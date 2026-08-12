const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async ({ from, to, subject, text, html, replyTo }) => {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo,
    });

    console.log("Message sent:", info.messageId);

    return info;
  } catch (err) {
    console.error("Email sending error:", err);
    throw err;
  }
};

module.exports = sendMail;

//   from: '"Website Contact Form" <eshop@etmcs.com.ng>',
//   to: [
//     "abdulmuminisah79@gmail.com",
//     "eshop@etmcs.com.ng",
//     "abdulmuminisah@yahoo.com",
//   ],
//   replyTo: req.body.email,
//   subject: `New Contact Request from ${req.body.name}`,
//   text: "",
//   html: output,
