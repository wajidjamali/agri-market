const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(
  process.env.ONE,
  process.env.TWO,
  process.env.THREE
);

// Set the access token
oAuth2Client.setCredentials({
  access_token:
    "ya29.a0AfB_byCgyd1nCTJRu5o2McnFfCwe_Rlq6GD2KdQFTACpLC8LgW_EGRYi9mN3mI6-Us4nZAf-ks0unfmB7yIs5atRCyol1OcmGOv1HGUaYo9ApJpNw9rkgBmcce7i8lDli5sim49Yy_xDZO2-b2UG8yZC4JRpZUklpaywaCgYKAQ8SARASFQHGX2MiXMZM5YS45BkEkzveugwkog0171",
});

// Create the transporter using OAuth2 authentication
const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "moinulhaqshaikh2015@gmail.com",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: oAuth2Client.getAccessToken(),
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

module.exports = sendMail;
