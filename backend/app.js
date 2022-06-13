const express = require("express");
const app = express();
require('dotenv').config()
const cors = require('cors');
const connection = require('./database');
const authRoutes=require("./router/userRoutes.js");

//database
connection();

//middlewares
app.use(express.json());
app.use(cors());
//routes
app.use("/",authRoutes);


const port = process.env.PORT || 8000;

app.listen(port,()=> console.log('8000 port is running'))