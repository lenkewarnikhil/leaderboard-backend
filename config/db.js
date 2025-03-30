const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,  // Remove these options if using MongoDB 4+
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected to:", mongoose.connection.name);
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
