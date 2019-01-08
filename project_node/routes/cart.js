let router = require('express').Router();
let conn = require('../db/DbConn');

router.post('/add', (req, res) => {
    var pid = req.body.pid;
    var uid = req.body.uid;
    let query = "INSERT INTO cart(pid,uid) VALUES(?,?)";
    conn.query(query, [pid, uid], (err, rows, fields) => {
        console.log(pid + " " + uid);
        if (err) {
            console.log("Error :" + err);
        } else {
            return res.json({ addedToCart: true });
        }
    });
});

router.get('/showCart',(req,res)=>{
    var uid = req.query.uid;
    products = {}
    console.log(uid);
    var query = "SELECT * FROM products AS p ,cart AS c WHERE p.pid=c.pid AND uid=?";
    conn.query(query,[uid],(err,rows,fields)=>{
        if(err){
            console.log("Error :" + err);
        }else{
            products = rows;
            return res.json(products);
        }
    });
});

module.exports = router;