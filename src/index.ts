import express, { Request, Response, NextFunction } from "express";
const app = express();
import connectDB from "./loaders/db";
import routes from './routes';
import config from "./config";
const cors = require('cors');

require('dotenv').config();

connectDB();

app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(
 cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      config.EC2URI
    ],
  })
);

app.use(express.json());

interface ErrorType {
  message: string;
  status: number;
}

app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(process.env.PORT, () => {
    console.log(`
    ################################################
          🛡️  Server listening on port 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
