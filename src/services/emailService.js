import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    port: 465,
    // service: " GoDaddy",
    auth: {
        user: process.env.SENDER_EMAIL, // Update with your Gmail address
        pass: process.env.SENDER_PASSWORD, // Update with your Gmail password
    },
});

async function sendEmailNotification(name, email, userMessage) {
    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: `${email}`,
        subject: "Query",
        html: `<!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    /* General styling */
                    body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    color: #333;
                    margin: 0;
                    padding: 0;
                    }
                    .email-container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                    background-color: #4CAF50;
                    padding: 20px;
                    text-align: center;
                    color: white;
                    border-radius: 8px 8px 0 0;
                    }
                    .header h1 {
                    margin: 0;
                    font-size: 24px;
                    }
                    .content {
                    padding: 20px;
                    }
                    .content p {
                    margin: 16px 0;
                    font-size: 16px;
                    line-height: 1.5;
                    }
                    .user-message {
                    background-color: #f1f1f1;
                    border-left: 4px solid #4CAF50;
                    padding: 15px;
                    font-style: italic;
                    color: #555;
                    border-radius: 4px;
                    }
                    .footer {
                    padding: 20px;
                    text-align: center;
                    font-size: 12px;
                    color: #777;
                    }
                </style>
                </head>
                <body>

                <div class="email-container">
                    <!-- Header Section -->
                    <div class="header">
                    <h1>We've Received Your Query – Thank You for Reaching Out!</h1>
                    </div>

                    <!-- Content Section -->
                    <div class="content">
                    <p>Hello ${name},</p>
                    <p>We have received your query and our team will respond as soon as possible. Here is a copy of your message for your reference:</p>
                    
                    <!-- User's Message -->
                    <div class="user-message">
                        <p>${userMessage}</p>
                    </div>
                    
                    <p>Thank you for reaching out!</p>
                    </div>

                    <!-- Footer Section -->
                    <div class="footer">
                    <p>&copy; 2024 Devta Gensets. All rights reserved.</p>
                    </div>
                </div>

                </body>
                </html>
`,

    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("User Email error: " + error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

export { sendEmailNotification };
