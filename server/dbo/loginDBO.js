const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const fs = require("fs")
const _ = require('lodash')
const { OFFLINE_TOOL_DB, STATUS_CD_ZERO, STATUS_CD_ONE, DB_PATH, DB_EXT } = require('../utility/constants');
const {fetchAll,save}  = require('../db/common/dbUtil')

const userLoginTable = `CREATE TABLE user_login (
        user_id INTEGER PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        email TEXT NOT NULL
    );
    insert into user_login values (1,'admin','admin@123','s.prabhu.mtech88@gmail.com');
`
const userProfileTable = `
CREATE TABLE user_profile (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_name TEXT NOT NULL,
    gstin TEXT(15) unique,
    pan TEXT(15) unique,
    address_line1 TEXT NOT NULL,
    address_line2 TEXT ,
    city TEXT ,
    state TEXT ,
    country TEXT ,
    postal_code INTEGER ,
    mobile_momber INTEGER ,
    email TEXT NOT NULL,
    terms_top TEXT,
    terms_bottom TEXT,
    logo_path TEXT
);
`
// save("INSERT INTO  user_profile values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,'Prabhu Soft Solution','33EYOPW8565T2Z4','EYOPW8565T','Appartment','Main Road',
// 'Madurai','Tamilnadu','India','625014','9994040005','pss@pss.com','',''
// ],OFFLINE_TOOL_DB)

fetchAll('SELECT * FROM user_profile',OFFLINE_TOOL_DB).then((res,err)=>{
    console.log(res)
})

// const offlinedb = new sqlite3.Database(DB_PATH + OFFLINE_TOOL_DB + DB_EXT, (err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Connected to the SQLite database.');
// });
// offlinedb.serialize(()=>{
//     offlinedb.run(userLoginTable,(res,err)=>{
//         if (err) console.log("secondResponse :" + err);
//         else console.log("res " + res);
//     })
//     offlinedb.run(userProfileTable)
// })
  
// offlinedb.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });



