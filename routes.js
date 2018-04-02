//SPDX-License-Identifier: Apache-2.0

var wine = require('./controller.js');

module.exports = function(app){

  app.get('/get_tuna/:id', function(req, res){
    wine.get_tuna(req, res);
  });
  app.post('/add_wine', function(req, res){
    wine.add_wine(req, res);
  });
  app.get('/get_all_wine', function(req, res){
    wine.get_all_wine(req, res);
  });
  app.get('/vinery', function(req, res){
    var data = req.body;
    console.log(data);
    var args = [];

    wine.updateWine(req, res, {
      funcName: "changedByVinery",
      args: args
    });
  });
  app.get('/bottling', function(req, res){
    var data = req.body;
    console.log(data);
    var args = [];

    wine.updateWine(req, res, {
      funcName: "changedByBottling",
      args: args
    });
  });
}
