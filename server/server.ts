import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as jwt from 'jsonwebtoken';
import setRoutes from './routes';
import { sequelize } from "./sequelize";
import * as path from "path";

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('ng-client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'ng-client/dist/index.html'));
  });
}


app.use(function(req, res, next) {
  if (req.url === '/api/login') {
    next();
  } else {
    const authorization = req.headers.authorization;
    let token;
    if (authorization) {
      token = authorization.split(' ')[1];
    }
    token = token || req.body.token || req.params.token || req.headers['token'] || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, 'JIOwld*232f&l', function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  }
});

setRoutes(app);

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
