const express = require("express");
const { getUserScores, addUser } = require("../controllers/userController");
const router = express.Router();

router.get("/leaderboard", getUserScores);
router.post("/signup", addUser);

module.exports = router;
