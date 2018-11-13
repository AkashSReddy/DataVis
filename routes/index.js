var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "akash",
  password: "password",
  database: "visual"
});

con.connect(err => {
  if (err) throw err;
  console.log("Connected");
});

/* GET users listing. */
// con.query("desc CSE2001_C", (err, result, fields) => {
//   if (err) throw err;
// });

router.get("/", (req, res, next) => {
  res.send("HEY");
});
router.get("/login", (req, res, next) => {
  console.log("Yo");
  res.render("login", { title: "DBMS" });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/getclass");
});
router.get("/getclass", (req, res, next) => {
  con.query("show tables", (err, results, fields) => {
    if (err) throw err;
    else {
      res.json(results);
    }
  });
});

router.get("/getmarks", (req, res, next) => {});

module.exports = router;
