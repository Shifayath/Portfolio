import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { PortFolio } from "@/app/lib/Collections/Portfolio";
import connectDB from "@/app/lib/db";

export const POST = async (request) => {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "All fields (name, email, phone, message) are required." },
      { status: 400 }
    );
  }

  await connectDB();


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shifayathkhan96@gmail.com",
      pass: "nlticohiozzjxwxa",
    },
  });

  const mailOptions = {
    from: "PortFolio@gmail.com",
    to: "shifayathkhan96@gmail.com",
    subject: "Shifayath Your Portfolio Submission",
    html: `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h2 {
            color: #007bff;
            font-size: 24px;
            margin-bottom: 10px;
          }
          p {
            margin: 10px 0;
          }
          .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Your portfolio new form submission!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      </body>
      </html>
    `,
  };

  const thankYouMailOptions = {
    from: "shifayathkhan96@gmail.com",
    to: email,
    subject: "Thank you for contacting Shifayath Portfolio",
    html: `
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            h2 { color: #007bff; font-size: 24px; margin-bottom: 10px; }
            p { margin: 10px 0; }
            .footer { margin-top: 20px; font-size: 14px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Thank You for Contacting Me!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for visiting my portfolio and reaching out. I have received your message and will contact you soon.</p>
            <p>If you have any urgent queries, feel free to reply to this email.</p>
            <div class="footer">
              <p>Best regards,<br/>Shifayath</p>
            </div>
          </div>
        </body>
        </html>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(thankYouMailOptions);
    await PortFolio.create({ name, email, phone, message });
     return NextResponse.json(
    { message: "Saved to DB successfully." },
    { status: 200 }
  );
  } catch (error) {
    console.log("DB Save Error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
};
