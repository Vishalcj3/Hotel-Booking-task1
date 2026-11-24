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
app.use("/api/enquiries", require("./routes/enquiryRoutes"));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to database");
}).catch((error) => {
    console.log(error);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
