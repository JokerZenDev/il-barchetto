import nodemailer from "nodemailer";
import { google } from "googleapis";
import Mail from "nodemailer/lib/mailer";

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
	const oauth2Client = new OAuth2(
		process.env.CLIENT_ID,
		process.env.CLIENT_SECRET,
		"https://developers.google.com/oauthplayground"
	);

	oauth2Client.setCredentials({
		refresh_token: process.env.REFRESH_TOKEN
	});

	const accessToken = await new Promise((resolve, reject) => {
		oauth2Client.getAccessToken((err, token) => {
			if (err) {
				reject("Failed to create access token :(");
			}
			resolve(token);
		});
	});

	if (accessToken === undefined || accessToken === null) {
		throw new Error("Failed to create access token :(");
	}

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			type: "OAuth2",
			user: process.env.EMAIL,
			accessToken: accessToken as string,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN
		}
	});

	return transporter;
};

export default async function sendEmail(emailOptions: Mail.Options) {
	let emailTransporter = await createTransporter();
	await emailTransporter.sendMail(emailOptions);
};
