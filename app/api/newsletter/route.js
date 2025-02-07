// app/api/newsletter/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Replace these with your environment variables or actual credentials
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Basic validation: check if email is present
    if (!email) {
      return NextResponse.json(
        { error: "Missing email field." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // 1) Send "Thank you" email to the subscriber
    await transporter.sendMail({
      from: `"Ontario Heat Pump Rebates" <${SMTP_USER}>`,
      to: email,
      subject: "Thank You for Subscribing",
      text: `Hello!

Thank you for subscribing to our Ontario Heat Pump Rebates newsletter. We'll keep you updated on the latest rebates, energy-saving tips, and more!

Best regards,
Ontario Heat Pump Rebates Team`,
      // You could also send HTML if you prefer:
      // html: "<h1>Thanks for subscribing!</h1><p>We'll be in touch soon.</p>"
    });

    // 2) Send notification to your own email
    await transporter.sendMail({
      from: `"Ontario Heat Pump Rebates" <${SMTP_USER}>`,
      to: SMTP_USER, // or your preferred admin email
      subject: "New Newsletter Subscriber",
      text: `A new user has subscribed to the newsletter with the following email: ${email}`,
    });

    return NextResponse.json(
      { success: true, message: "Subscription successful." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Something went wrong with the subscription." },
      { status: 500 }
    );
  }
}
