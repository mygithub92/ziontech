//SPDX-License-Identifier: Apache-2.0

var wine = require('./controller.js');

module.exports = function(app){

  app.get('/get_user_role', function(req, res){
    wine.get_user_role(req, res);
  });
  app.post('/add_wine', function(req, res){
    wine.add_wine(req, res);
  });
  app.get('/getQRImage', function(req, res) {
    wine.getQRImage(req, res);
  })
  app.get('/getWine', function(req, res){
    wine.getWine(req, res);
  })
  app.get('/qr', function(req, res) {
    wine.qr(req, res);
  })
  app.get('/get_all_wine', function(req, res){
    wine.get_all_wine(req, res);
  });
  app.post('/vinery', function(req, res){
    var data = req.body;
    console.log(data);
    var args = [data.key, data.actualWeight, data.volume, 'from', 'to', data.bottlingCompany];

    wine.updateWine(req, res, {
      funcName: "changedByVinery",
      args
    });
  });
  app.post('/bottler', function(req, res){
    var data = req.body;
    console.log(data);
    var args = [data.key, data.label, data.corkCap, data.status, data.seller, data.brand];
    wine.updateWine(req, res, {
      funcName: "changedByBottler",
      args
    });
  });
}
