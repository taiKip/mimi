import express, { Application ,Request,Response} from 'express'
import morgan from 'morgan';

import dataSource from './config/datasource';

import Router from './routes/index'

const PORT = process.env.PORT|| 9000;



const app: Application = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

app.use(Router);

dataSource
  .initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((err) => {
    console.error(`Unable to connect to db`, err);
    process.exit(1);
  });