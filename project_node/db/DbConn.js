let db = require('mysql');
var conn = db.createConnection({
    host: "127.0.0.1",
    user: "root",
    port: 3311,
    password: "root",
    database: "webelectiveproject"
});

conn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Database Connected...');
    }
});

module.exports = conn;