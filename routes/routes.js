const express = require('express');
const routes=express.Router();
const controllers=require('../controllers/controllers')

routes.get('/:urlkey',controllers.redirect_resp)
routes.post('/',controllers.push_data)
module.exports=routes