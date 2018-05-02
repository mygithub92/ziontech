//SPDX-License-Identifier: Apache-2.0

/*
  This code is based on code written by the Hyperledger Fabric community.
  Original code can be found here: https://github.com/hyperledger/fabric-samples/blob/release/fabcar/query.js
  and https://github.com/hyperledger/fabric-samples/blob/release/fabcar/invoke.js
 */

// call the packages we need
var express       = require('express');        // call express
var app           = express();                 // define our app using express
var bodyParser    = require('body-parser');
var http          = require('http')
var fs            = require('fs');
var path          = require('path');
var util          = require('util');
var os            = require('os');
var qr            = require('qr-image');

var chaincodeId   = 'ziontech6';
var wines = [{
	Key:"1",
	Record: {
		companyName: "Hoggies Estate",
		region: "Merbein", 
		vineyard: "Thompson",
		block: "2",
		rowRange: "1-3",
		variety: "Muscat of Alexandria", 
		vintage: "2018", 
		dateDelivered: "2018-04-12",
		vinery: "Trentham Estate",
		estimatedWeight: "20",
		actualWeight: "18",
		volume: "5000",
		receivedFrom: "",
		transferredTo: "",
		bottlingCompany: "Best Bottlers",
		label: "Hoggies",
		corkCap: "",
		status: "Labeled",
		seller: "Liquid Shop",
		brand: "Vintage Reserve Shiraz"
	}
},
{
	Key:"2",
	Record: {
		companyName: "Penley",
		region: "Coonawarra", 
		vineyard: "Ladbroke",
		block: "3",
		rowRange: "4-10",
		variety: "Shiraz", 
		vintage: "2016", 
		dateDelivered: "2017-12-23",
		vinery: "Limestone Coast Wines",
		estimatedWeight: "35",
		actualWeight: "33",
		volume: "5600",
		receivedFrom: "",
		transferredTo: "",
		bottlingCompany: "Liquid Goods",
		label: "Olivias",
		corkCap: "",
		status: "Not Labeled",
		seller: "BWS",
		brand: "Riesling"
	}
}];



module.exports = (function() {
	return{
		get_user_role: (req, res) => {
			console.log(req.get('role'));
			res.send(req.get('role'));
		},

		genereateQR: function(id) {
			const url = `http://localhost:5000/getWine?wineId=${id}`;
			var qr_svg = qr.image(url);
			qr_svg.pipe(require('fs').createWriteStream(`client/public/qr/qr${id}.png`));

		},

		qr: function(req, res) {
			res.send(this.genereateQR(2));
		},

		getQRImage: function(req, res) {
			const wineId = req.query.wineId;
			res.sendFile(path.join(__dirname, `client/public/qr/qr${wineId}.png`));
		},

		getWine: function(req, res) {
			console.log("getting wine from mock: ");
			const wineId = req.query.wineId;
			const wine = wines.find(w => w.id === wineId);
			res.json(JSON.parse(wine));
		},

		get_all_wine: function(req, res) {
			console.log("getting all wines from mock: ");
			res.json(wines);
		},

		add_wine: function(req, res) {
			console.log("submit recording of a wine: ");
			var data = req.body;
			var newWine = {Key: data.id, Record: data};
			console.log(newWine);
			wines.push(newWine);
			this.genereateQR(data.id);
			res.send('newWine');
		},
		
		updateWine: function(req, res, data) {
			console.log("changing holder of wine catch: ");
			res.send('');
		},
	}
})();