var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var crypto = require('crypto');
const nodemailer = require("nodemailer");

// http://localhost:3000/pw

// /reset is called when a user wants to reset their password
router.post('/reset', function(req, res) {
	const useremail = req.body.email;

	
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	let testAccount = nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
		user: testAccount.user, // generated ethereal user
		pass: testAccount.pass, // generated ethereal password
		},
	});

	// send mail with defined transport object
	let info = transporter.sendMail({
		from: '"CISGO-noreply" <noreply@cisgospin.azurewebsites.net>', // sender address
		to: "Admin, " + useremail, // list of receivers
		subject: "CISGO Password Reset Link", // Subject line
		text: "Here's your requested password reset link. \
		\	\	If you didn't request this, oops! I can't really do anything about that.", // plain text body
		html: "<a href=''>Here's</a> your requested password reset link. \
		\	\	If you didn't request this, oops! I can't really do anything about that.", // html body
	});

	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


});

module.exports = router;