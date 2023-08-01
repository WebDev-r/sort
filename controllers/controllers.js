const mongoose = require('mongoose');
const dotenv=require('dotenv').config()
const MyModel = require('../model/model');
async function push_data(req,resp){
    mongoose.connect(process.env.MONGODB_URL);
    if(await MyModel.findOne({url:req.body.url})==null){
    await MyModel.create({url:req.body.url,key:await MyModel.estimatedDocumentCount()+1,count:0})
    resp.json({url:req.body.url,shortUrl:`http//:${req.hostname}:3000/${await MyModel.findOne({url:req.body.url}).key}`})
    }
    else{
        resp.send("short url alrady exist")
    }
   
}
async function redirect_resp(req,resp){
    mongoose.connect(process.env.MONGODB_URL);
    const obj=await MyModel.findOne({key:req.params.urlkey})
    // let click=+ (await MyModel.findOne({key:req.params.urlkey}).count+1)
    await MyModel.updateOne({key:req.params.urlkey},{count:obj.count+1})

    resp.redirect('http://'+obj.url)
}
module.exports={push_data:push_data,redirect_resp:redirect_resp}