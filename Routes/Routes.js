const express = require("express")
const router = express.Router();
const dotenv = require("dotenv")
dotenv.config();

const { sendGmail } = require("../Mailer/MailController.js")

router.post('/visitor-mail', async (req, res) => {
    try {
        let data = req.body
        const emailData = {
            from: process.env.SENDER,
            to: process.env.RECEIVER,
            subject: 'You Got a visitor on Portfolio',
            text: 
            `Name: ${data.name},\nEmail: ${data.email},\nMessage: ${data.message}`,
        };
        await sendGmail(emailData)
        res.sendStatus(200)
    }
    catch (e) {
        res.sendStatus(500)
    }
});
module.exports = { router };
