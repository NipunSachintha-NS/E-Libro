require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const dbCon = require("../config/dbCon");

dbCon().then( async ()=>{
    await app.listen(PORT, ()=>{
        console.log("server is running");
    })
})

