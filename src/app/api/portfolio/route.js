// pages/api/send-email.js

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const { name, email, phone, message } = await request.json();

  // Check if all required fields are present
  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'All fields (name, email, phone, message) are required.' }, { status: 400 });
  }

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shifayathkhan96@gmail.com',
      pass: 'nlticohiozzjxwxa',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'PortFolio@gmail.com',
    to: 'shifayathkhan96@gmail.com',
    subject: 'Shifayath Your Portfolio Submission',
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

  try {
    // Send the email to yourself
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

    // Send a thank you email to the sender
    const thankYouMailOptions = {
      from: 'shifayathkhan96@gmail.com',
      to: email,
      subject: 'Thank you for contacting Shifayath Portfolio',
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
    await transporter.sendMail(thankYouMailOptions);

    return NextResponse.json({ message: 'Email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
  }
};




























// import mongoose from "mongoose";
// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";
// import { PortFolio } from "../../lib/Collections/Portfolio";
// import { ConnectionStr } from "../../lib/db";

// // Configure nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER, // Your Gmail address
//     pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App Password
//   },
// });

// export const POST = async (request) => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(ConnectionStr);

//     // Parse the incoming JSON payload
//     const Payload = await request.json();
//     console.log("Payload", Payload);

//     // Validate the payload
//     if (!Payload.name || !Payload.email || !Payload.phone || !Payload.message) {
//       return NextResponse.json({ response: "Please Enter Required Fields.", status: false }, { status: 400 });
//     }

//     // Save the payload to MongoDB
//     const Response = new PortFolio(Payload);
//     const result = await Response.save();

//     // Send an email notification
//     const mailOptions = {
//       from: process.env.EMAIL_USER, // Sender address
//       to: `${Payload.email}, shifayathkhan96@gmail.com`, // List of recipients
//       subject: 'New Portfolio Submission', // Subject line
//       html: `
//         <html>
//         <head>
//           <style>
//             body {
//               font-family: Arial, sans-serif;
//               line-height: 1.6;
//               color: #333;
//               background-color: #f4f4f4;
//               padding: 20px;
//             }
//             .container {
//               max-width: 600px;
//               margin: 0 auto;
//               background: #fff;
//               padding: 20px;
//               border-radius: 8px;
//               box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//             }
//             h2 {
//               color: #007bff;
//               font-size: 24px;
//               margin-bottom: 10px;
//             }
//             p {
//               margin: 10px 0;
//             }
//             .footer {
//               margin-top: 20px;
//               font-size: 14px;
//               color: #777;
//             }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <h2>New Portfolio Submission</h2>
//             <p><strong>Name:</strong> ${Payload.name}</p>
//             <p><strong>Email:</strong> ${Payload.email}</p>
//             <p><strong>Phone:</strong> ${Payload.phone}</p>
//             <p><strong>Message:</strong> ${Payload.message}</p>
//             <div class="footer">
//               <p>Thank you for your submission!</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     // Return success response
//     return NextResponse.json({ response: result, status: true }, { status: 200 });

//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({ response: "An error occurred.", status: false }, { status: 500 });
//   }
// }



// import mongoose from "mongoose"
// import { NextResponse } from "next/server"
// import { PortFolio } from "../../lib/Collections/Portfolio"
// import { ConnectionStr } from "../../lib/db";

// export const POST = async (request) => {
//     await mongoose.connect(ConnectionStr);
//     const Payload = await request.json();
//     console.log("Payload",Payload)
//     if(!Payload.name || !Payload.email || !Payload.phone || !Payload.message ){
//         return NextResponse.json({response : "Please Enter Required Fields.",status:false},{status : 500})
//     }
    
//     const Response = new PortFolio(Payload);
//     const result = await Response.save();

//     return NextResponse.json({response : result,status : true},{status : 200})
// }


// export const GET = async () => {
//     await mongoose.connect(ConnectionStr);
//     const result = await PortFolio.find();
//     return NextResponse.json({response : result ,status : true},{status : 200})
// }






