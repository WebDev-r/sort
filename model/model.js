const mongoose = require('mongoose');
const UserSchema =new mongoose.Schema({
    url:{type:String,required:true},
    key:{type:String,required:true},
    count:{type:Number,required:true}
})
 const MyModel = mongoose.model('shorturl',UserSchema )

 module.exports=MyModel