var express = require("express");
var router = express.Router();
var adminRouter = require("./admin/admin");

var userRouter = require("./users");

/* GET users listing. */

router.use("/", adminRouter);

router.use("/admin", adminRouter);
module.exports = router;
