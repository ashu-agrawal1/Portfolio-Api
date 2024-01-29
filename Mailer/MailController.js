const { mailTransporter } = require("./Mailer.js")

const sendGmail = async (data) => {
	return new Promise((resolve, reject) => {
		mailTransporter.sendMail(data, (error, info) => {
			if (error) {
				reject(error);
			} else {
				resolve('Mail Send Successfully');
			}
		});
	});
};

module.exports = { sendGmail }