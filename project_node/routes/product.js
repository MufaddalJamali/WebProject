let router = require('express').Router();
let conn = require('../db/DbConn');

router.get('/', (req, res) => {

    products = {}
    var cid = req.query.cid;
    var category = req.query.category;

    if (cid == undefined || cid == "0") {
        let query = "SELECT * FROM products";
        conn.query(query, (err, rows, fields) => {
            if (err) {
                console.log("Error :" + err);
            } else {
                products == null;
                products = rows;
                return res.json(products);
            }
        });
    }
    else {
        var cid = req.query.cid;
        console.log("CID: " + cid);
        let query = "SELECT * FROM products WHERE cid=?";
        products = {}
        conn.query(query, [cid], (err, rows, fields) => {
            if (err) {
                console.log("Error :" + err);
            } else {
                products=null;
                products = rows;
                return res.json(products);
            }
        });
    }
});

router.get('/getProductsByCategory', (req, res) => {
    var cid = req.query.cid;
    console.log("CID: " + cid);
    let query = "SELECT * FROM products WHERE cid=?";
    products = {}
    conn.query(query, [cid], (err, rows, fields) => {
        if (err) {
            console.log("Error :" + err);
        } else {
            products = rows;
            return res.json(products);
        }
    });
});

module.exports = router;