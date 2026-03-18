'use server'

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST as string, 
    port: Number(process.env.MAIL_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME as string,
      pass: process.env.MAIL_PASSWORD as string,
    },
});

  try {
    const mailOptions = {
      from: `"Website MBC" <${process.env.MAIL_USERNAME}>`,
      to: "general@mitrabhadraconsulting.com",
      replyTo: email, 
      subject: `[MBC Lead] ${service} Inquiry - ${name}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 24px; padding: 40px; color: #1a202c; background-color: #ffffff;">
          <h2 style="color: #01502D; text-transform: uppercase; font-size: 20px; margin-bottom: 24px; font-weight: 800; letter-spacing: 0.05em;">New Business Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid #edf2f7; margin-bottom: 24px;" />
          
          <div style="margin-bottom: 32px;">
            <p style="margin: 0 0 12px 0;"><strong>Client Name:</strong> ${name}</p>
            <p style="margin: 0 0 12px 0;"><strong>Email Address:</strong> ${email}</p>
            <p style="margin: 0 0 12px 0;"><strong>Phone Number:</strong> ${phone}</p>
            <p style="margin: 0 0 12px 0;"><strong>Service Interest:</strong> ${service}</p>
          </div>
          
          <div style="margin-top: 32px; padding: 24px; background-color: #f8fafc; border-radius: 16px; border: 1px inset #f1f5f9;">
            <p style="font-weight: bold; margin-bottom: 8px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Message Details:</p>
            <p style="line-height: 1.6; color: #334155; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 40px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; pt: 20px;">
            This email was generated automatically from the <br/> 
            <strong>Mitra Bhadra Consulting</strong> official website.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };

  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
        success: false, 
        message: error instanceof Error ? error.message : "Internal Server Error" 
    };
  }
}