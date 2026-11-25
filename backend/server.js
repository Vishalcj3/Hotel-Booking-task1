const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const allowedOrigins = [
    process.env.FRONTEND_URL,
    "http://localhost:5173"
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    methods: ["POST", "GET"]
}));
app.use(express.json());

let isConnected = false;
app.use(async (req, res, next) => {
    try {
        if (!isConnected) {
            await mongoose.connect(process.env.MONGODB_URI);
            isConnected = true;
            console.log("Connected to database");
        }
        next();
    } catch (err) {
        console.error("DB connection error:", err);
        res.status(500).json({ message: "Database connection failed" });
    }
});

app.use("/api/enquiries", require("./routes/enquiryRoutes"));

module.exports = app;
