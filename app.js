require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const path = require("path");
const contactEmailOutput = require("./utils/contactEmailOutput");
const sendMail = require("./utils/sendMails");

const app = express();

// view engine setup
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("contact");
});

app.post("/sendb", (req, res) => {
  const data = req.body;

  // design to send email data
  const output = contactEmailOutput({
    name: data.name,
    company: data.company,
    email: data.email,
    phone: data.phone,
    message: data.message,
  });

  //   nodemailer method
  sendMail({
    from: '"Website Contact Form" <eshop@etmcs.com.ng>',
    to: ["abxcyberlink@gmail.com", "abdulmuminisah@yahoo.com"],
    subject: `New Contact Request from ${req.body.name}`,
    text: "",
    html: output,
    // replyTo: req.body.email,
  });
});

app.post("/send", async (req, res) => {
  const data = req.body;

  const output = contactEmailOutput({
    name: data.name,
    company: data.company,
    email: data.email,
    phone: data.phone,
    message: data.message,
  });

  try {
    const info = await sendMail({
      from: '"Website Contact Form" <eshop@etmcs.com.ng>',
      to: [
        "abxcyberlink@gmail.com",
        // "eshop@etmcs.com.ng",
        // "abdulmuminisah@yahoo.com",
      ],
      replyTo: data.email,
      subject: `New Contact Request from ${data.name}`,
      text: `
            New Contact Request
            Name: ${data.name}
            Company: ${data.company || "Not provided"}
            Email: ${data.email}
            Phone: ${data.phone || "Not provided"}
            Message: ${data.message}
      `,
      html: output,
    });

    console.log("Email sent:", info.messageId);
    res.render("contact", {
      msg: "Email has been sent successfully!",
    });
  } catch (error) {
    console.error("Email failed:", error);

    res.status(500).render("contact", {
      msg: "Unable to send your message.",
    });
  }
});

app.listen(5000, () => console.log(`Server is runinng on port 5000`));
