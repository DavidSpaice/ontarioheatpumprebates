import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_HOST = env.process.SMTP_HOST;
const SMTP_PORT = env.process.SMTP_PORT;
const SMTP_USER = env.process.SMTP_USER;
const SMTP_PASS = env.process.SMTP_PASS;

export async function POST(request) {
  try {
    // Parse JSON body from the incoming request
    const { name, email, phone, message } = await request.json();

    // Validate fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Create a transporter using your SMTP credentials
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Prepare mail options
    const mailOptions = {
      from: `"Website Contact" <${SMTP_USER}>`,
      to: SMTP_USER,
      subject: "New Contact Form Submission",
      text: `
        You have a new contact form submission:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
