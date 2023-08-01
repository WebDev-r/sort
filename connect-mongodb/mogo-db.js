const middleware=(req,resp,next)=>{
    console.log("middleware excuted")
    next();
}
module.exports=middleware