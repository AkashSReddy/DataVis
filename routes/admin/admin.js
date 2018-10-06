var express = require("express");
var router = express.Router();

// admin Router listing

router.get("/admin", (req, res, next) => {
  res.send("admin response");
});

module.exports = router;
