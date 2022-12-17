
const express = require('express');
var cors = require('cors');
//const path=require("path");
const mongoose=require('mongoose');
const app= express();
require('dotenv').config();
const productRoute=require('./routes/products');
//const { dirname } = require("path");
const PORT=process.env.PORT||3000 
//const static_path=path.join(__dirname,"../index.html");
//console.log(path.join(__dirname));
//app.use(express.static(static_path));
app.use(cors());
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//creating routes
app.use('/api/products',productRoute);
//DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser:true})
.then(()=>
{console.log('Connected to Mongodb')}).catch(error=>{console.log("Something went wrong",error)});
//SERVER CONNECTION
app.listen(PORT,()=>{console.log("Server is running at PORT",PORT);})
