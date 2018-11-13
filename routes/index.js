var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "akash",
  password: "password",
  database: "visual"
});
var regno = 0;

con.connect(err => {
  if (err) throw err;
  console.log("Connected");
});

router.get("/", (req, res, next) => {
  res.send("HEY");
});
router.get("/login", (req, res, next) => {
  res.render("login", { title: "DBMS" });
});

router.post("/", (req, res, next) => {
  regno = req.body.regno;
  res.redirect("/getclass");
});

router.get("/getclass", (req, res, next) => {
  var queryy = "select course_code from " + regno;
  // var queryy = "desc 17bci0097";

  console.log(queryy);
  con.query(queryy, (err, results, fields) => {
    if (err) throw err;
    else {
      res.render("class", { title: " DBMS", data: results });
    }
  });
});

router.get("/:id", (req, res, next) => {
  var idd = req.path;
  idd = idd.substr(1);
  console.log(idd);
  // console.log(queryy);
  // con.query(queryy, (err, results, fields) => {
  //   if (err) throw err;
  //   else {
  //     res.render("class", { title: " DBMS", data: results });
  //   }
  res.render("marks", { title: "DBMS" });
});
module.exports = router;
