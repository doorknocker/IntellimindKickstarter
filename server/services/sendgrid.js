// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const host = process.env.PRODUCTION_URL;
const senderEmail = process.env.SENDER_EMAIL;

const messageGen = (email, ref) => ({
  to: email,
  from: senderEmail,
  subject: "Registration Successfull",
  html: `
        <h1 style="font-size: 50px; text-align: center;">Intellimind</h1>
        <div style="max-width: 500px; border: 1px solid grey; margin: 0 auto; padding: 20px;">
	    <p style="margin-bottom: 10px;">Hi there</p>
        <p style="margin-bottom: 10px;">Thankyou you have been added to Intellimind waitlist</p>
	    <p style="font-weight: bold;">Interested in early access?</p>
        <p style="margin-bottom: 10px;">Get early access by referring your friends. The more friends that join, the sooner you'll get access. Just share this link:
        <a href="${`${host}/?ref=${ref}`}">${`${host}/?ref=${ref}`}</a>
	    </p>
	    <p style="margin-bottom: 10px;">You can check your spot in the waitlist any time by clicking <a href="${`${host}/waitlis?ref=${ref}`}">here</a>
		<p style="margin-bottom: 10px;">Sincerely,<br/>
			Intellimind Team</p>
	    <div>
        `,
});

const sendEmail = (email, ref) => sgMail.send(messageGen(email, ref));

module.exports = {
  sendEmail,
};
