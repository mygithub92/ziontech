import Controller from './controller.mock';

export default function setRoutes(app) {
  const controller = new Controller();

  app.route('/api/login').post(controller.login);
  app.route('/api/grapes').get(controller.getGrapes);
  app.route('/api/grape').get(controller.getGrapeById);
  app.route('/api/grape/create').put(controller.createGrape); // create
  app.route('/api/grape/update').post(controller.updateGrape); // update
  app.route('/api/grape/:id').delete(controller.deleteGrape); // delete
  app.route('/api/grape/transport').post(controller.transportGrape);


  app.route('/api/wineries').get(controller.getWineries);
  app.route('/api/winery').get(controller.getWineryById);
  app.route('/api/winery/create').put(controller.createWinery);
  app.route('/api/winery/update').post(controller.updateWinery);
  app.route('/api/winery/transport').post(controller.transportWinery);
  
  app.route('/api/bottlers').get(controller.getBottlers);
  app.route('/api/bottler').get(controller.getBottlerById);
  app.route('/api/bottler/create').put(controller.createBottler);
  app.route('/api/bottler/update').post(controller.updateBottler);
  app.route('/api/bottler/transport').post(controller.transportBottler);

}
