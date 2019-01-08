let router = require('express').Router();
let conn = require('../db/DbConn');

router.post('/login', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var isValid = false;
    var userId;
    var userName;

    console.log(email+" "+password);

    let query = "SELECT * FROM users";
    conn.query(query, (err, rows, fields) => {
        if (err) {
            console.log("Error :" + err);
        } else {
            rows.forEach(user => {
                if (user.email == email && user.password == password) {
                    isValid = true;
                    userId = user.uid;
                    userName = user.name;
                } else {
                    isValid = false;
                }
            });

            if (isValid == true) {
                return res.json({
                    loginSuccess: true,
                    userId: userId,
                    userName: userName
                });
            } else {
                return res.json({ loginSuccess: false });
            }
        }
    });
});

router.post('/register', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var address = req.body.address;
    let query = "INSERT INTO users(name,email,password,address) VALUES(?,?,?,?)";
    conn.query(query, [name, email, password, address], (err, rows, fields) => {
        if (err) {
            console.log(name+" "+email+" "+password+" "+address);
            console.log("Error :" + err);
        } else {
            return res.json({ registerSuccess: true });
        }
    });
});


module.exports = router;