import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    const connectDB = require('../config/db');
    connectDB();
    // Init middleware
    this.app.use(express.json()); // allows us to get the data into request.body in users route
  }

  private routes(): void {
    const router = express.Router();

    router.get('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'yo'
      });
    });

    router.post('/', (req: Request, res: Response) => {
      const data = req.body;
      // query a database and save data
      res.status(200).send(data);
    });

    router.use('/api/users', require('../routes/api/users'));
    router.use('/api/auth', require('../routes/api/auth'));

    this.app.use('/', router);
  }
}

export default new App().app;
