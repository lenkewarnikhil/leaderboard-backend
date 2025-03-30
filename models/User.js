const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    rollNo: String,
    classSec: String,
    instructor: String,
    year: Number,
    hackerRankUsername: String,
    leetCodeUsername: String,
    hackerRankScore: Number,
    leetCodeScore: Number
});

module.exports = mongoose.model("User", UserSchema);
