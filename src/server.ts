import * as dotenv from "dotenv";
import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";
import { Sector } from "./entity/Sector";
import { User } from "./entity/User";
import router from "./routes/index";

dotenv.config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3002;

app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/", router);

const connectionOptions: ConnectionOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Sector],
  synchronize: true,
};

createConnection(connectionOptions)
  .then(async (connection) => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
