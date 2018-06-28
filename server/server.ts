import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import setRoutes from './routes';
import { sequelize } from "./sequelize";
import * as path from 'path';
import * as expressJwt from 'express-jwt';

const app = express();
const checkIfAuthenticated = expressJwt({
  secret: 'JIOwld*232f&l'
});
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

setRoutes(app, checkIfAuthenticated);

app.use(express.static(path.join(__dirname, '/../ng-client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../ng-client/dist/index.html'));
});

// Save our port
const port = process.env.PORT || 5000;

sequelize.sync(
  // { force: true }
)
.then(() => {
  app.listen(port, () => {  
    /* tslint:disable-next-line */
    console.log("Live on port: " + port);
  });
});
