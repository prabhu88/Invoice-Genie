const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const fs = require("fs")
const _ = require('lodash')
const { OFFLINE_TOOL_DB, STATUS_CD_ZERO, STATUS_CD_ONE, DB_PATH, DB_EXT } = require('../utility/constants');
const {fetchAll}  = require('../db/common/dbUtil')

const userLoginTable = `CREATE TABLE user_login (
        user_id INTEGER PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        email TEXT NOT NULL
    );
    insert into user_login values (1,'admin','admin@123','s.prabhu.mtech88@gmail.com');
`
console.log(DB_PATH + OFFLINE_TOOL_DB + DB_EXT)
fetchAll('SELECT * FROM user_login ',OFFLINE_TOOL_DB).then((res,err)=>{
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
// })
  
// offlinedb.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });



