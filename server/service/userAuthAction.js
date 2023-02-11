const path = require('path')
const fs = require('fs-extra')
const db = require('../db/common/dbUtil')
var Promise = require('bluebird')
const log = require('../utility/logger').logger
const {OFFLINE_TOOL_DB,STATUS_CD_ZERO} = require('../utility/constants')
function login(req,res){    
    let username = req.body.username ? req.body.username :  ''
    let password = req.body.password ? req.body.password : ''
    let query = "SELECT * FROM user_login where username = '"+username+"' and password = '"+password+"'";
    return new Promise(function(resolve,reject){
        log.log("info", "Entering userAuthAction.js :: login Function");
        return db.fetchAll(query,OFFLINE_TOOL_DB).then((rows,err)=>{
            if(err){
                reject({ error: err, statusCd: STATUS_CD_ZERO });
            }
                       
            if(rows.length > 0){
                resolve({error_state : false,data : rows})
            }   
            
            resolve({ error_state : true,error: 'username or password incorrect', statusCd: STATUS_CD_ZERO });
            
        })
        
    })
}
function createProfile(req,res){          
    let query = `INSERT INTO user_profile (company_name,gstin,pan,address_line1,address_line2,
        city,state,country,postal_code,email) values (?,?,?,?,?,?,?,?,?,?)`
    let values = [
        company_name => req.body.company_name ? req.body.company_name : req.query.company_name ? req.query.company_name : '',
        gstin => req.body.gstin ? req.body.gstin :  req.query.gstin ? req.query.gstin : '',
        pan => req.body.pan ? req.body.pan :  req.query.pan ? req.query.pan : '',
        address_line1 => req.body.address_line1 ? req.body.address_line1 :  req.query.address_line1 ? req.query.address_line1 : '',
        address_line2 => req.body.address_line2 ? req.body.address_line2 :  req.query.address_line2 ? req.query.address_line2 : '',
        city => req.body.city ? req.body.city :  req.query.city ? req.query.city : '',
        state => req.body.state ? req.body.state :  req.query.state ? req.query.state : '',
        country => req.body.country ? req.body.country :  req.query.country ? req.query.country : '',
        postal_code => req.body.postal_code ? req.body.postal_code :  req.query.postal_code ? req.query.postal_code : '',
        email => req.body.email ? req.body.email :  req.query.email ? req.query.email : ''
    ] 
    let Where = ` user_id = '${req.body.email ? req.body.email :  req.query.email ? req.query.email : 2}' `;
    return new Promise(function(resolve,reject){        
        return db.updateTable(OFFLINE_TOOL_DB,'user_profile',values,Where).then((rows,err)=>{
            if(err){
                reject({ error: err, statusCd: STATUS_CD_ZERO });
            }
            resolve({error_state : false,data : rows})
        })
    })
}
function getProfile(req,res){        
    let query = "select * from user_profile ";
    return new Promise(function(resolve,reject){
        log.log("info", "Entering userAuthAction.js :: getProfile Function");
        return db.fetchAll(query,OFFLINE_TOOL_DB).then((rows,err)=>{
            if(err){
                reject({ error: err, statusCd: STATUS_CD_ZERO });
            }                       
            if(rows.length > 0){
                resolve({error_state : false,data : rows})
            }
            resolve({ error_state : true,error: 'username or password incorrect', statusCd: STATUS_CD_ZERO });            
        })
        
    })
}
function setProfile(req,res){
    let data = req.body    
    let condition = "user_id = 3"    
    return new Promise(function(resolve,reject){
        return db.updateTable(OFFLINE_TOOL_DB,'user_profile',data,condition).then((rows,err)=>{
            if(err){
                reject({ error: err, statusCd: STATUS_CD_ZERO });
            }
            resolve({error_state : false,data : rows})
        })
    })  
    
}
function updateLogo(req,res){
    return new Promise(function(resolve,reject){
        let filename = req.body.filename
        if (req.files){                
            var u_files = req.files.logo
            var re = /(?:\.([^.]+))?$/
            var ext = re.exec(u_files.name)[1]
            let file_path = path.join('public/assets/img/faces/',filename )
            u_files.mv(file_path, (err) => {
                if (err) {
                    reject({ error: err, statusCd: STATUS_CD_ZERO });
                }
                else{
                    //resolve({error_state : false,data : "updated Successfully"})
                    let sql = "UPDATE user_profile SET logo_path = ? WHERE user_id = 3 "                    
                    return db.update(sql,['assets/img/faces/'+u_files.name],OFFLINE_TOOL_DB).then((rows,err)=>{
                        if(err){
                            console.log('error')
                            reject({ error: err, statusCd: STATUS_CD_ZERO });
                        }            
                        console.log('no error')              
                        resolve({error_state : false,data : "updated Successfully"})                                  
                    })
                }
            })        
        }
        else{
            reject({ error: err, statusCd: STATUS_CD_ZERO });
        }        
    })
    
}
module.exports = {
    login : login,
    createProfile : createProfile,
    getProfile : getProfile,
    setProfile : setProfile,
    updateLogo : updateLogo
}