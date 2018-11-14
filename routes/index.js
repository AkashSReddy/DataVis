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
var idd2 = 0;
var idd = 0;
var DATA = 0;
var arr = [];
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

// router.get("/test", (req, res, next) => {
//   res.json("Test complete");
// });

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

router.get("/Final", (req, res, next) => {
  res.render("marks", { title: "DBMS" });
});
router.get("/test", (req, res, next) => {
  // var resultArray = DATA.values(JSON.parse(JSON.stringify(rows)));
  // console.log(resultArray);
  res.json(arr);
});
router.post("/:Field", (req, res, next) => {
  idd2 = req.path;
  idd2 = idd2.substr(1);
  var queryy = "select " + idd2 + " from " + idd;
  con.query(queryy, (err, results, fields) => {
    if (err) throw err;
    else {
      DATA = results;
      Object.keys(results).forEach(function(key) {
        var row = results[key];
        var prop;
        for (prop in row) {
          // console.log(row);
          if (row.hasOwnProperty(prop)) {
            arr.push(row[prop]);
          }
        }
      });
      console.log(arr);
      res.redirect("/Final");
    }
  });
});

router.get("/:id", (req, res, next) => {
  idd = req.path;
  idd = idd.substr(1);
  console.log(idd);
  var queryy = "desc " + idd;
  console.log(queryy);
  con.query(queryy, (err, results, fields) => {
    if (err) throw err;
    else {
      res.render("cat", { title: " DBMS", data: results });
    }
  });
});

module.exports = router;
