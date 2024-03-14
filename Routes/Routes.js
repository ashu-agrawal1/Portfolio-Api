const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const { Mail } = require("../Models/Mails.js");

dotenv.config();

const { sendGmail } = require("../Mailer/MailController.js");

router.get("/", async (req, res) => {
  res.json("hii, welcome");
});

router.post("/visitor-mail", async (req, res) => {
  try {
    const clientIp =
      req.ip || req.headers["x-forwarded-for"] || req.connection?.remoteAddress;
    let { name, email, message } = req.body;
    const emailData = {
      from: process.env.SENDER,
      to: process.env.RECEIVER,
      subject: "You Got a visitor on Portfolio",
      text: `Name: ${name},\nEmail: ${email},\nMessage: ${message}`,
    };
    const newMail = new Mail({
      name,
      email,
      message,
      clientIp,
    });
    sendGmail(emailData);
    await newMail.save();
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});
module.exports = { router };
