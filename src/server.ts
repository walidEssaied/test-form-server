import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";
import { Sector } from "./entity/Sector";
import { User } from "./entity/User";
import router from "./routes/index";

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3002;

app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/", router);

const connectionOptions: ConnectionOptions = {
  type: 'mysql', // or any other type supported by TypeORM
  host: 'mysql-71l0', // This should match the service name from Render
  port: 3306, // This should match the port of your MySQL service
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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
