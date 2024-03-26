"use server";

import { google } from "googleapis";

export const contactUsHandler = async (formStatus: { [key: string]: any }, formData: FormData) => {
  const name = formData.get("name") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const telephone = formData.get("telephone") as string;
  const message = formData.get("message") as string;

  // Your OAuth2 credentials
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  // const redirectUri = 'YOUR_REDIRECT_URI';
  const refreshToken = process.env.REFRESH_TOKEN; // Obtained through OAuth2 flow

  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    // redirectUri
  );

  // Set credentials
  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const emailBody = `From: "${process.env.SENDER_NAME}" <${process.env.SENDER_EMAIL}>
To: "${process.env.RECIPIENT_NAME}" <${process.env.RECIPIENT_EMAIL}>
Reply-To: ${email}
Subject: Richiesta dal sito
Content-Type: text/plain; charset="UTF-8"

Nome: ${name}
Cognome: ${lastname}
Email: ${email}
Telefono: ${telephone}
Messaggio: ${message}`;

  const encodedMessage = Buffer.from(emailBody)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  try {
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    return { status: 200, message: "success" }
  } catch (error) {
    console.error('The API returned an error: ' + error);
    return { status: 500, message: "error" }
  }
};
