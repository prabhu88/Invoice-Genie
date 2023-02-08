var userAuthAction  = require('./userAuthAction.js')
function loginService (req,res){
    userAuthAction.login(req,res).then(function(data){
        res.status(201).send(data);
    })
    .catch(function(err){
        res.status(500).send(err);
    })
}

function createProfile(req,res){
    userAuthAction.createProfile(req,res).then(function(data){
        res.status(201).send(data);
    })
    .catch(function(err){
        res.status(500).send(err);
    })
}

function getProfile(req,res){
    userAuthAction.getProfile(req,res).then(function(data){
        res.status(201).send(data);
    })
    .catch(function(err){
        res.status(500).send(err);
    })
}

function setProfile(req,res){
    userAuthAction.setProfile(req,res).then(function(data){
        res.status(201).send(data);
    })
    .catch(function(err){
        res.status(500).send(err);
    })
}

module.exports = {
    login : loginService,
    createProfile : createProfile ,
    getProfile : getProfile,
    setProfile : setProfile
}