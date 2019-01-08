let router = require('express').Router();
let conn = require('../db/DbConn');

router.get('/',(req,res) => {
    let query = "SELECT * FROM category";
    categories = {}
    conn.query(query, (err,rows,fields) => {
        if(err){
            console.log("Error :" +err);
        }else{
            categories = rows;
           return res.json(categories);
        }
    });
});

module.exports = router;