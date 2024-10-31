require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const cors = require('cors');


const app = express();
const dbCon = require("../config/dbCon");
const bookRouter = require("../routes/bookRoutes");
app.use(express.json());
app.use(cors());
app.use("/", bookRouter);

dbCon().then(async () => {
  await app.listen(PORT, () => {
    console.log("server is running");
  });
});
