const express = require("express");
const {
  getHomeMessage,
  getContentLocalDb,
  postContentLocalDb,
} = require("../controller/awesomeController");

const router = express.Router();

router.route("/home").get(getHomeMessage);
router.route("/").get(getContentLocalDb).post(postContentLocalDb);

module.exports = router;
