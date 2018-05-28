//SPDX-License-Identifier: Apache-2.0

/*
  This code is based on code written by the Hyperledger Fabric community.
  Original code can be found here: https://github.com/hyperledger/fabric-samples/blob/release/fabcar/query.js
  and https://github.com/hyperledger/fabric-samples/blob/release/fabcar/invoke.js
 */

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var http = require('http')
var fs = require('fs');
var path = require('path');
var util = require('util');
var os = require('os');
var qr = require('qr-image');
var config = require('./config');
var jwt = require('jsonwebtoken');

var User = require('./model/user');
var Product = require('./model/product');

module.exports = (function () {
    return {
        login: (req, res) => {
            const body = req.body;
            User.findOne({
                email: body.email,
                password: body.password
            }).exec(function (err, user) {
                if (err) throw err;

                const payload = {
                    sub: user._id,
                    name: user.name,
                    role: user.role
                }
                let token = jwt.sign(payload, config.secret, {
                    expiresIn: '12h'
                });

                res.json({ token });
            });
        },
        
        all_products: (req, res) => {
            payload = req.decoded;
            Product.find()
            .exec((err, products) => {
                console.log(products);
                res.json(products);
            })
        },

        genereateQR: function (id) {
            const url = `http://18.221.40.162/getWine?id=${id}`;
            var qr_svg = qr.image(url);
            qr_svg.pipe(require('fs').createWriteStream(`ng-client/src/assets/qr/qr${id}.png`));

        },

        qr: function (req, res) {
            if (req.query.id) {
                res.send(this.genereateQR(req.query.id));
            }
        },

        getWine: function (req, res) {
            console.log("getting wine from database: ");
            const wineId = req.query.id;
            this.authUser({
                chaincodeId: chaincodeId,
                fcn: 'queryWine',
                args: [wineId]
            }, false, 'queryByChaincode')
                .then((query_responses) => {
                    console.log("Query has completed, checking results");
                    // query_responses could have more than one  results if there multiple peers were used as targets
                    if (query_responses && query_responses.length == 1) {
                        if (query_responses[0] instanceof Error) {
                            console.error("error from query = ", query_responses[0]);
                        } else {
                            console.log("Response is ", query_responses[0].toString());
                            // res.json(JSON.parse(query_responses[0].toString()));
                            const result = JSON.parse(query_responses[0].toString());
                            res.render('index', result);
                        }
                    } else {
                        console.log("No payloads were returned from query");
                    }
                }).catch((err) => {
                    console.error('Failed to query successfully :: ' + err);
                });
        },

        get_all_wine: function (req, res) {
            console.log("getting all wines from database: ");
            this.authUser({
                chaincodeId: chaincodeId,
                fcn: 'queryAllWine',
                args: ['']
            }, false, 'queryByChaincode')
                .then((query_responses) => {
                    console.log("Query has completed, checking results");
                    // query_responses could have more than one  results if there multiple peers were used as targets
                    if (query_responses && query_responses.length == 1) {
                        if (query_responses[0] instanceof Error) {
                            console.error("error from query = ", query_responses[0]);
                        } else {
                            console.log("Response is ", query_responses[0].toString());
                            res.json(JSON.parse(query_responses[0].toString()));
                        }
                    } else {
                        console.log("No payloads were returned from query");
                    }
                }).catch((err) => {
                    console.error('Failed to query successfully :: ' + err);
                });
        },

        add_wine: function (req, res) {
            console.log("submit recording of a wine: ");
            var data = req.body;
            console.log(data);
            this.authUser({
                chaincodeId: chaincodeId,
                fcn: 'recordWine',
                args: [data.id, data.companyName, data.region, data.vineyard, data.block, data.rowRange, data.variety, data.vintage, data.dateDelivered, data.vinery, data.estimatedWeight],
                chainId: 'mychannel'
            }, true, 'sendTransactionProposal')
                .then(this.sendProposal)
                .then(this.handleProposal)
                .then(result => {
                    this.genereateQR(data.id);
                    res.send(result)
                })
                .catch(this.handProposalError);
        },

        updateWine: function (req, res, data) {
            console.log("changing holder of wine catch: ");
            this.authUser({
                chaincodeId: chaincodeId,
                fcn: data.funcName,
                args: data.args,
                chainId: 'mychannel'
            }, true, 'sendTransactionProposal')
                .then(this.sendProposal)
                .then(this.handleProposal)
                .then(result => res.send(result))
                .catch(this.handProposalError);
        },

        authUser: (request, needTxId, funName) => {
            var member_user = null;
            var store_path = path.join(os.homedir(), '.hfc-key-store');
            console.log('Store path:' + store_path);
            // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
            return Fabric_Client.newDefaultKeyValueStore({
                path: store_path
            }).then((state_store) => {
                // assign the store to the fabric client
                fabric_client.setStateStore(state_store);
                var crypto_suite = Fabric_Client.newCryptoSuite();
                // use the same location for the state store (where the users' certificate are kept)
                // and the crypto store (where the users' keys are kept)
                var crypto_store = Fabric_Client.newCryptoKeyStore({ path: store_path });
                crypto_suite.setCryptoKeyStore(crypto_store);
                fabric_client.setCryptoSuite(crypto_suite);

                // get the enrolled user from persistence, this user will sign all requests
                return fabric_client.getUserContext('user1', true);
            }).then((user_from_store) => {
                if (user_from_store && user_from_store.isEnrolled()) {
                    console.log('Successfully loaded user1 from persistence');
                    member_user = user_from_store;
                } else {
                    throw new Error('Failed to get user1.... run registerUser.js');
                }
                // send the query proposal to the peer
                if (needTxId) {
                    request['txId'] = fabric_client.newTransactionID();
                }
                return channel[funName](request).then((result) => {
                    return new Promise((resolve, reject) => {
                        result['txId'] = request['txId'];
                        resolve(result);
                    })
                });
            });
        },

        sendProposal: (results) => {
            var proposalResponses = results[0];
            var proposal = results[1];
            let isProposalGood = false;
            if (proposalResponses && proposalResponses[0].response &&
                proposalResponses[0].response.status === 200) {
                isProposalGood = true;
                console.log('Transaction proposal was good');
            } else {
                console.error('Transaction proposal was bad');
            }
            if (isProposalGood) {
                console.log(util.format(
                    'Successfully sent Proposal and received ProposalResponse: Status - %s, message - "%s"',
                    proposalResponses[0].response.status, proposalResponses[0].response.message));

                // build up the request for the orderer to have the transaction committed
                var request = {
                    proposalResponses: proposalResponses,
                    proposal: proposal
                };

                // set the transaction listener and set a timeout of 30 sec
                // if the transaction did not get committed within the timeout period,
                // report a TIMEOUT status
                var transaction_id_string = results.txId.getTransactionID(); //Get the transaction ID string to be used by the event processing
                var promises = [];

                var sendPromise = channel.sendTransaction(request);
                promises.push(sendPromise); //we want the send transaction first, so that we know where to check status

                // get an eventhub once the fabric client has a user assigned. The user
                // is required bacause the event registration must be signed
                let event_hub = fabric_client.newEventHub();
                event_hub.setPeerAddr('grpc://localhost:7053');

                // using resolve the promise so that result status may be processed
                // under the then clause rather than having the catch clause process
                // the status
                let txPromise = new Promise((resolve, reject) => {
                    let handle = setTimeout(() => {
                        event_hub.disconnect();
                        resolve({ event_status: 'TIMEOUT' }); //we could use reject(new Error('Trnasaction did not complete within 30 seconds'));
                    }, 3000);
                    event_hub.connect();
                    event_hub.registerTxEvent(transaction_id_string, (tx, code) => {
                        // this is the callback for transaction event status
                        // first some clean up of event listener
                        clearTimeout(handle);
                        event_hub.unregisterTxEvent(transaction_id_string);
                        event_hub.disconnect();

                        // now let the application know what happened
                        var return_status = { event_status: code, tx_id: transaction_id_string };
                        if (code !== 'VALID') {
                            console.error('The transaction was invalid, code = ' + code);
                            resolve(return_status); // we could use reject(new Error('Problem with the tranaction, event status ::'+code));
                        } else {
                            console.log('The transaction has been committed on peer ' + event_hub._ep._endpoint.addr);
                            resolve(return_status);
                        }
                    }, (err) => {
                        //this is the callback if something goes wrong with the event registration or processing
                        reject(new Error('There was a problem with the eventhub ::' + err));
                    });
                });
                promises.push(txPromise);

                return Promise.all(promises);
            } else {
                console.error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
                throw new Error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
            }
        },

        handleProposal: (results) => {
            console.log(results[0]);
            console.log('Send transaction promise and event listener promise have completed');
            // check the results in the order the promises were added to the promise all list
            if (results && results[0] && results[0].status === 'SUCCESS') {
                console.log('Successfully sent transaction to the orderer.');
                return Promise.resolve(results[0].tx_id);
                // res.send(results[0].tx_id);
            } else {
                console.error('Failed to order the transaction. Error code: ' + response.status);
            }

            if (results && results[1] && results[1].event_status === 'VALID') {
                console.log('Successfully committed the change to the ledger by the peer');
                // res.send(results[0].tx_id);
                return Promise.resolve(results[0].tx_id);
            } else {
                console.log('Transaction failed to be committed to the ledger due to ::' + results[1].event_status);
            }
        },

        handProposalError: (err) => {
            console.error('Failed to invoke successfully :: ' + err);
        },
    }
})();