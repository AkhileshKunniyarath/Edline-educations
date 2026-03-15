import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, course, location } = body;

    // Validate required fields
    if (!name || !phone || !course) {
      return Response.json({ success: false, message: 'Required fields missing.' }, { status: 400 });
    }

    // Create transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const courseLabels = {
      mbbs: 'MBBS / BDS',
      nursing: 'BSc Nursing / Allied Health',
      engineering: 'Engineering (BTech)',
      management: 'Management (BBA/MBA)',
      other: 'Other',
    };

    const locationLabels = {
      bangalore: 'Bangalore',
      mangalore: 'Mangalore',
      coimbatore: 'Coimbatore',
      chennai: 'Chennai',
      any: 'Anywhere in South India',
    };

    const mailOptions = {
      from: `"ED LINE Website" <${process.env.SMTP_USER}>`,
      to: 'info@edlineconsultancy.com',
      replyTo: email || undefined,
      subject: `📋 New Registration – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f8ff; padding: 20px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #1E5ADC, #3B82F6); padding: 24px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Registration Received</h1>
            <p style="color: #bfdbfe; margin: 6px 0 0;">ED LINE Edu Consultancy Website</p>
          </div>
          <div style="background: white; padding: 28px; border-radius: 0 0 10px 10px; border: 1px solid #dbeafe;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 40%;">Full Name</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0a1f44;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Phone Number</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0a1f44;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email Address</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0a1f44;">${email || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Course Interested</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0a1f44;">${courseLabels[course] || course}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; color: #64748b; font-size: 14px;">Preferred Location</td>
                <td style="padding: 12px 16px; font-weight: 600; color: #0a1f44;">${locationLabels[location] || location || 'Not specified'}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; font-size: 13px; color: #1d4ed8;">
                📅 Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'long', timeStyle: 'short' })} IST
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Registration submitted successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ success: false, message: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
