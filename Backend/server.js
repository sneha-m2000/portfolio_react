import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // to parse JSON data

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // you can also use Outlook or custom SMTP
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // your email where you’ll receive messages
        subject: `Portfolio Contact: ${subject}`,
        text: `
      📩 New message from your portfolio:
      -----------------------------
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message:
      ${message}
      -----------------------------
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
