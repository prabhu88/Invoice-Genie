var express = require('express')
var router = express.Router()
const logger = require('../utility/logger').logger
const {login,createProfile,getProfile,setProfile} = require('../service/userAuthService')

router.post('/login',function(req,res){
    logger.log("info", "Entering routes::: userAuthRouter :: /login : %s");
    login(req,res)
    logger.log("info", "Exiting routes::: userAuthRouter :: /login : %s");
})

router.post('/createProfile',function(req,res){
    logger.log("info", "Entering routes::: userAuthRouter :: /createProfile : %s");
    createProfile(req,res)
    logger.log("info", "Exiting routes::: userAuthRouter :: /createProfile : %s");
})

router.post('/getProfile',function(req,res){
    logger.log("info", "Entering routes::: userAuthRouter :: /getProfile : %s");
    getProfile(req,res)
    logger.log("info", "Exiting routes::: userAuthRouter :: /getProfile : %s");
})

router.post('/updateProfile',function(req,res){
    logger.log("info", "Entering routes::: userAuthRouter :: /getProfile : %s");
    setProfile(req,res)
    logger.log("info", "Exiting routes::: userAuthRouter :: /getProfile : %s");
})
module.exports = router;