require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("⚠️  Email configuration error:");
    if (error.code === 'EAUTH') {
      console.log("   Authentication failed. Please check your .env file:");
      console.log("   1. Make sure EMAIL_USER is your Gmail address");
      console.log("   2. Make sure EMAIL_PASS is a Gmail App Password (not your regular password)");
      console.log("   3. See: https://support.google.com/accounts/answer/185833");
    } else {
      console.log("   Error:", error.message);
    }
    console.log("   Server is running, but emails may not send until this is fixed.\n");
  } else {
    console.log("✅ Email service ready - Ready to send emails!\n");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ code: 500, status: "Error", error: error.message });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
