// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json()); // to parse JSON data

// app.post('/send-email', async (req, res) => {
//     const { name, email, subject, message } = req.body;

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//         service: 'gmail', // you can also use Outlook or custom SMTP
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     const mailOptions = {
//         from: email,
//         to: process.env.EMAIL_USER, // your email where you’ll receive messages
//         subject: `Portfolio Contact: ${subject}`,
//         text: `
//       📩 New message from your portfolio:
//       -----------------------------
//       Name: ${name}
//       Email: ${email}
//       Subject: ${subject}
//       Message:
//       ${message}
//       -----------------------------
//     `,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ success: true, message: 'Email sent successfully!' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ success: false, message: 'Failed to send email' });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// simple health endpoint
app.get('/', (req, res) => res.json({ ok: true, message: 'Backend up' }));

// create transporter once (not per-request)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // use App Password if Gmail + 2FA
    },
});

// verify transporter at startup (logs error if auth fails)
transporter
    .verify()
    .then(() => console.log('✅ Mail transporter verified'))
    .catch((err) => {
        console.error('❌ Mail transporter verification failed. Check EMAIL_USER / EMAIL_PASS.', err);
    });

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, // use your mailbox here (prevents spoofing issues)
        replyTo: email, // reply goes to the user who filled the form
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        text: `
New message from portfolio
--------------------------
Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
--------------------------
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        // include error.message in logs, but return a generic client message
        return res.status(500).json({ success: false, message: 'Failed to send email. See server logs.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
