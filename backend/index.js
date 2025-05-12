require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

// Fixed CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || "https://portfolio-gacg.onrender.com",
  methods: ["POST"],
  credentials: true
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use your email as "from"
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} (Portfolio)`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});