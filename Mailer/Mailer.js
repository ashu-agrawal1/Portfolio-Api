const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config();

const mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.SENDER,
		pass: process.env.GMAIL_PASSWORD,
	},
});

module.exports = { mailTransporter }