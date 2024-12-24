const DBCON = process.env.DBCON;
const mongoose = require("mongoose");
const dbCon = async ()=> {
    await mongoose.connect("mongodb://localhost:27017/e-libro");
    console.log("database connected");
}
module.exports = dbCon;