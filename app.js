const express=require('express')
const app=express()
const routes=require('./routes/routes.js')
const bodyParser = require('body-parser')
const middleware = require('./connect-mongodb/mogo-db.js');
const dotenv=require("dotenv")
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

const PORT=process.env.PORT || 3000

app.use(middleware)
app.use('/shortURL',routes)
app.get('/',(res,resp)=>{
    resp.send("its get")
})
app.listen(3000,()=>{
    console.log("server is working")
})