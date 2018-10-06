var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/", (req, res, next) => {
  res.send("first get request of User routes");
});

router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

router.get("/login", (req, res, next) => {
  res.send("login get page reached");
});

router.post("/login", (req, res, next) => {
  res.send("Login post request");
});
router.get("/register", (req, res, next) => {
  res.send("Register get request");
});
router.post("/register", (req, res, next) => {
  res.send("Register post request");
});

module.exports = router;
