const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Enquiry = require("../models/enquiry");

const sanitize = (str) => String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.post("/enquiry", async (req, res) => {
    const { fullname, email, phone, Service, message } = req.body;

    if (!fullname || !email || !phone || !Service || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const s = { fullname: sanitize(fullname), email: sanitize(email), phone: sanitize(phone), Service: sanitize(Service), message: sanitize(message) };

    try {
        const enquiry = new Enquiry({ fullname, email, phone, Service, message });
        await enquiry.save();

        const clientMail = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Enquiry Received - Nginep Boss',
            html: `<h2>Hi ${s.fullname},</h2><p>We received your enquiry about <b>${s.Service}</b>. Our team will get back to you shortly.</p><p>Your message: ${s.message}</p>`
        };

        const adminMail = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Enquiry - Nginep Boss',
            html: `<h2>New Enquiry</h2><p><b>Name:</b> ${s.fullname}</p><p><b>Email:</b> ${s.email}</p><p><b>Phone:</b> ${s.phone}</p><p><b>Service:</b> ${s.Service}</p><p><b>Message:</b> ${s.message}</p>`
        };

        await transporter.sendMail(clientMail);
        await transporter.sendMail(adminMail);

        res.status(201).json({ message: "Enquiry submitted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
});

module.exports = router;