require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const cors = require("cors");

const app = express();
const dbCon = require("../config/dbCon");
const bookRouter = require("../routes/bookRoutes");
const userRouter = require("../routes/userRoutes"); // Include this line as it was only present in your local changes

app.use(express.json());
app.use(cors());
app.use("/", bookRouter);
app.use("/users", userRouter); // Include this route as it was only in your local changes

dbCon().then(async () => {
  await app.listen(PORT, () => {
    console.log("server is running");
  });
});
