const express = require("express"),
      app = express(),
     // bodyParser = require("body-parser"),
     // fs = require("fs"),
     // multer = require("multer"),
      mongoose = require("mongoose");
const up =require('./routes/routes');      
app.set("view engine","ejs");
app.use(express.urlencoded(
    { extended:true }
))

app.use(up);
mongoose.connect('mongodb://localhost:27017/Images',{
    useNewUrlParser:true,
    //useCreateIndex:true,                 
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected")
}).catch(err=>{
    console.log("err0r while connecting")
})


app.listen(3000,function () {
      console.log("Server Started at PORT 3000");
})