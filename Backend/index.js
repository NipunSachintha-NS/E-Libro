<<<<<<< HEAD:Backend/index.js
require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const cors = require('cors');


const app = express();
const dbCon = require("../config/dbCon");
const bookRouter = require("../routes/bookRoutes");
const userRouter = require("../routes/userRoutes");

app.use(express.json());
app.use(cors());
app.use("/", bookRouter);
app.use("/users", userRouter);




dbCon().then(async () => {
  await app.listen(PORT, () => {
    console.log("server is running");
  });
=======
require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const cors = require('cors');


const app = express();
const dbCon = require("../config/dbCon");
const bookRouter = require("../routes/bookRoutes");
const userRouter = require("../routes/userRoutes");

app.use(express.json());
app.use(cors());
app.use("/", bookRouter);
app.use("/users", userRouter);




dbCon().then(async () => {
  await app.listen(PORT, () => {
    console.log("server is running");
  });
>>>>>>> 60ccefa (Register form Backend Operation):Backend/src/index.js
});