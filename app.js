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

//Schema
/*var imgSchema = mongoose.Schema({
    img:{data:Buffer,contentType: String}
});
var image = mongoose.model("image",imgSchema);*/
// SET STORAGE

  //Routes
/*app.get("/",(req,res)=>{
    res.render("index");
});*/
/*app.post("/uploadphoto",upload.single('myImage'),(req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType:req.file.mimetype,
        image:new Buffer (encode_img,'base64')
    };
    image.create(final_img,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result.img.Buffer);
            console.log("Saved To database");
            res.contentType(final_img.contentType);
            res.send(final_img.image);
        }
    })
})*/

app.listen(3000,function () {
      console.log("Server Started at PORT 3000");
})