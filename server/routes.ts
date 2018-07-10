import Controller from './controller.mock';
import TimelineController from './timeline.controller';

export default function setRoutes(app, checkIfAuthenticated) {
  app.route('/wine/:id').get(new TimelineController().getWineJourney);
  
  const controller = new Controller();
  app.route('/wine/create/:id').get(controller.genereate);

  app.route('/api/login').post(controller.login);
  app.route('/api/partener').get(checkIfAuthenticated, controller.getPartener);
  app.route('/api/grapes').get(checkIfAuthenticated, controller.getGrapes);
  app.route('/api/grape').get(checkIfAuthenticated, controller.getGrapeById);
  app.route('/api/grape/create').put(checkIfAuthenticated, controller.createGrape); // create
  app.route('/api/grape/update').post(checkIfAuthenticated, controller.updateGrape); // update
  app.route('/api/grape/:id').delete(checkIfAuthenticated, controller.deleteGrape); // delete
  app.route('/api/grape/transport').post(checkIfAuthenticated, controller.transportGrape);


  app.route('/api/wineries').get(checkIfAuthenticated, controller.getWineries);
  app.route('/api/winery').get(checkIfAuthenticated, controller.getWineryById);
  app.route('/api/winery/create').put(checkIfAuthenticated, controller.createWinery);
  app.route('/api/winery/update').post(checkIfAuthenticated, controller.updateWinery);
  app.route('/api/winery/transport').post(checkIfAuthenticated, controller.transportWinery);
  
  app.route('/api/bottlers').get(checkIfAuthenticated, controller.getBottlers);
  app.route('/api/bottler').get(checkIfAuthenticated, controller.getBottlerById);
  app.route('/api/bottler/create').put(checkIfAuthenticated, controller.createBottler);
  app.route('/api/bottler/update').post(checkIfAuthenticated, controller.updateBottler);
  app.route('/api/bottler/transport').post(checkIfAuthenticated, controller.transportBottler);
  
  app.route('/api/transports').get(checkIfAuthenticated, controller.getTransports);
  app.route('/api/transports2').get(checkIfAuthenticated, controller.getTransports2);
  app.route('/api/transport').get(checkIfAuthenticated, controller.getTransportById);
  app.route('/api/transport/create').put(checkIfAuthenticated, controller.createTransport);
  app.route('/api/transport/update').post(checkIfAuthenticated, controller.updateTransport);
  app.route('/api/transport/transport').post(checkIfAuthenticated, controller.transport);

  app.route('/api/warehouse').get(checkIfAuthenticated, controller.getWarehouse);
  app.route('/api/warehouse/transport').post(checkIfAuthenticated, controller.transportWarehouse);

}
