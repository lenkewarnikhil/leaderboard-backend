const User = require("../models/User");
const axios = require("axios");

// Get all users and their scores
async function getUserScores(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Add a new user to the leaderboard
async function addUser(req, res) {
    try {
        console.log("Received Data:", req.body);  // ✅ Check incoming data

        const { name, rollNo, classSec, instructor, year, hackerRankUsername, leetCodeUsername } = req.body;
        if (!name || !rollNo || !classSec || !instructor || !year || !hackerRankUsername || !leetCodeUsername) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const hackerRankScore = await fetchHackerRankScore(hackerRankUsername);
        const leetCodeScore = await fetchLeetCodeScore(leetCodeUsername);

        const user = new User({ name, rollNo, classSec, instructor, year, hackerRankUsername, leetCodeUsername, hackerRankScore, leetCodeScore });
        await user.save();  // ✅ Save to MongoDB

        console.log("✅ User Saved:", user);
        res.status(201).json(user);
    } catch (err) {
        console.error("❌ Error Saving to MongoDB:", err);
        res.status(500).json({ error: err.message });
    }
}



// Dummy function to fetch HackerRank score (Replace with actual API)
const fetchHackerRankScore = async (username) => {
    return 100;  // Replace with real score fetching logic
};

// Dummy function to fetch LeetCode score (Replace with actual API)
const fetchLeetCodeScore = async (username) => {
    return 150;  // Replace with real score fetching logic
};

module.exports = { getUserScores, addUser };
