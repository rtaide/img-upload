const express =require("express")

const {uploader} = require('../controllers/upload')
const image=require('../model/image'); 
const router = express.Router();
const multer = require("multer");
var upload = multer({ storage: storage }) ;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
     }
    })
var upload = multer({ storage: storage }) 


router.get('/',(req,res)=>{
    res.render('index');
})

router.post("/uploadphoto", upload.single('myImage'),uploader);

module.exports=router;