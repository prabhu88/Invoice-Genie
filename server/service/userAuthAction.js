const db = require('../db/common/dbUtil')
var Promise = require('bluebird')
const log = require('../utility/logger').logger
const {OFFLINE_TOOL_DB,STATUS_CD_ZERO} = require('../utility/constants')
const {} = require('')
function login(req,res){
    console.log(req.body)
    let username = req.body.username ? req.body.username :  'admin'
    let password = req.body.password ? req.body.password : 'admin@123'
    let query = "SELECT * FROM user_login ";//where username = '"+username+"' and password = '"+password+"'";
    return new Promise(function(resolve,reject){
        log.log("info", "Entering userAuthAction.js :: login Function");
        return db.fetchAll("SELECT * FROM user_login",OFFLINE_TOOL_DB).then((rows,err)=>{
            if(err){
                reject({ error: err, statusCd: STATUS_CD_ZERO });
            }
            else{
                console.log(rows)
                resolve(rows)
            }
        })
        
    })
}

module.exports = {
    login : login
}