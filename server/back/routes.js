
module.exports = function(app){
  app.post('/api/login', function(req, res) {
    db.login(req, res);
  });

  app.get('/api/all_products', function(req, res) {
    var role = req.decoded.role;
    switch(role) {
      case 'grower':
        db.get_all_grapes(req, res);
        break;
      case 'winery':
        req.query.history = 'true';
        db.get_all_wineries(req, res);
    }
  });

  app.post('/api/add_update_product', function(req, res) {
    var role = req.decoded.role;
    switch(role) {
      case 'grower':
        db.update_grape(req, res);
      case 'winery':
        db.update_winery(req, res);
    }
  });

  app.delete('/api/delete_product', function(req, res) {
    var role = req.decoded.role;
    switch(role) {
      case 'grower':
        db.delete_grape(req, res);
    }
  });

  app.get('/api/init_users', function(req, res) {
    db.init_users(req, res);
  })

  app.get('/api/init_products', function(req, res) {
    db.init_products(req, res);
  })

  app.get('/qr', function(req, res){
    res.sendFile(require('path').join(__dirname, `client/public/qr/qr${req.query.id}.png`));
  });
  app.post('/api/authenticate', function(req, res){
    wine.authenticate(req, res);
  });
  app.get('/shengcheng', function(req, res){
    wine.genereateQR(req.query.id);
    res.send('done: ' + req.query.id);
  });
  app.post('/add_wine', function(req, res){
    wine.add_wine(req, res);
  });
  app.get('/getQRImage', function(req, res) {
    wine.getQRImage(req, res);
  });
  app.get('/getWine', function(req, res){
    wine.getWine(req, res);
  });
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
