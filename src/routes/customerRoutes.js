const express = require("express");
const route = express.Router();

// Importing controllers
const { featchOneCustomer, updateCustomer } = require("./../controller/customerController");

route.use(function(req,res,next){
    console.log('API', req.url, '@', Date.now());
    next();
    })

//creating new user
route.post("/fetchOneCustomer", featchOneCustomer);
route.post("/updateCustomer", updateCustomer);

module.exports = route;
