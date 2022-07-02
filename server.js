const express = require("express");
const mongoose = require("mongoose");
const database = require('./server/config/connection');
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");


const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config()
const connect = async () => {
    await mongoose.connect(process.env.MONGO_DB)
    console.log("Database connected")
}
//mongoose.connection.on()

//middlewares
app.use(cookieParser());
app.use(express.json());
//app.use(express.static(public))
app.use(express.urlencoded({ extended: true }))
app.use(require("./server/routes"));


database.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

