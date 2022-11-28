const express = require("express");
const route = express.Router();

// Importing controllers
const { userRegister, userLogin } = require("./../controller/userController");

route.use(function(req,res,next){
    console.log('API', req.url, '@', Date.now());
    next();
    })

//creating new user
route.post("/userRegister", userRegister);
route.get("/userLogin", userLogin);

module.exports = route;
