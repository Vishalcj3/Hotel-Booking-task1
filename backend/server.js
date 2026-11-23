const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET']
}));
app.use(express.json());
app.use("/api/enquiries",
    require("./routes/enquiryRoutes")
);
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
}).catch((error) => {
    console.log(error);
});