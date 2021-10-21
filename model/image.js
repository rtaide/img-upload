const mongoose = require ("mongoose");

/*const userSchema = new mongoose.Schema({
    images:[{
    url:String,
    filename:String
}]
});*/

var imgSchema = mongoose.Schema({
    img:{data:Buffer,contentType: String}
});
//var image = mongoose.model("image",imgSchema);

module.exports = mongoose.model("image",imgSchema);