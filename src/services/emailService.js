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
        subject: "[Devtagensets] Recieved your query",
        html: `<!DOCTYPE html> 
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    /* General styling */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f3f4f6;
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }
                    .email-container {
                        width: 100%;
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #ffffff;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        border: 1px solid #e1e4e8;
                    }
                    .header {
                        background-color: #1a73e8;
                        padding: 25px;
                        text-align: center;
                        color: white;
                        border-radius: 8px 8px 0 0;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 22px;
                        font-weight: normal;
                    }
                    .content {
                        padding: 25px;
                    }
                    .content p {
                        margin: 16px 0;
                        font-size: 16px;
                        line-height: 1.6;
                    }
                    .user-message {
                        background-color: #f9fafa;
                        border-left: 4px solid #1a73e8;
                        padding: 15px;
                        font-style: italic;
                        color: #555;
                        border-radius: 4px;
                        margin-top: 20px;
                    }
                    .user-message p {
                        margin: 0;
                    }
                    .footer {
                        padding: 20px;
                        text-align: center;
                        font-size: 12px;
                        color: #777;
                        background-color: #f3f4f6;
                    }
                    .footer p {
                        margin: 0;
                    }
                </style>
                </head>
                <body>

                <div class="email-container">
                    <!-- Header Section -->
                    <div class="header">
                        <h1>Your Query Has Been Received</h1>
                    </div>

                    <!-- Content Section -->
                    <div class="content">
                        <p>Dear ${name},</p>
                        <p>Thank you for reaching out to Devta Gensets. We have received your query and our team is already reviewing it. Below is a copy of the message we received from you:</p>
                        
                        <!-- User's Message -->
                        <div class="user-message">
                            <p>${userMessage}</p>
                        </div>
                        
                        <p>We will get back to you shortly with further information or assistance.</p>
                        <p>Best regards,</p>
                        <p><strong>Customer Support Team</strong><br>Devta Gensets</p>
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
