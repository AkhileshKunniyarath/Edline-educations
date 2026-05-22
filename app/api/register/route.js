import nodemailer from 'nodemailer';

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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildDetailRow = (label, value, isLast = false) => `
  <tr>
    <td style="padding: 16px 0; width: 180px; vertical-align: top; font-size: 13px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #64748b; border-bottom: ${isLast ? 'none' : '1px solid #e2e8f0'};">
      ${label}
    </td>
    <td style="padding: 16px 0; vertical-align: top; font-size: 15px; line-height: 1.6; color: #0f172a; border-bottom: ${isLast ? 'none' : '1px solid #e2e8f0'};">
      ${value}
    </td>
  </tr>
`;

const normalizePhone = (value = '') => value.replace(/\D/g, '');
const getIndianMobileCore = (value = '') => {
  let digits = normalizePhone(value);

  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  return digits;
};
const formatName = (value = '') =>
  value
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

export async function POST(request) {
  try {
    const body = await request.json();
    const name = formatName(body.name || '');
    const phone = body.phone?.trim() || '';
    const email = body.email?.trim() || '';
    const course = body.course?.trim() || '';
    const location = body.location?.trim() || '';
    const normalizedPhone = getIndianMobileCore(phone);

    // Validate required fields
    if (!name || !phone || !email || !course || !location) {
      return Response.json({ success: false, message: 'Required fields missing.' }, { status: 400 });
    }

    if (!PHONE_REGEX.test(normalizedPhone)) {
      return Response.json({ success: false, message: 'Please enter a valid Indian mobile number.' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return Response.json({ success: false, message: 'Please enter a valid email address.' }, { status: 400 });
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

    const recipientEmail = process.env.REGISTRATION_TO_EMAIL || process.env.SMTP_USER;
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'long',
      timeStyle: 'short',
    });
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = email ? escapeHtml(email) : 'Not provided';
    const safeCourse = escapeHtml(courseLabels[course] || course);
    const safeLocation = location ? escapeHtml(locationLabels[location] || location) : 'Not specified';
    const replyCta = email
      ? `<a href="mailto:${encodeURIComponent(email)}" style="display: inline-block; padding: 13px 20px; border-radius: 999px; background: #0a4d8c; color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none;">Reply to Student</a>`
      : '';
    const safePhoneHref = `+91${normalizedPhone}`;
    const callCta = `<a href="tel:${safePhoneHref}" style="display: inline-block; padding: 13px 20px; border-radius: 999px; background: #ffb400; color: #0f172a; font-size: 14px; font-weight: 700; text-decoration: none;">Call ${safePhone}</a>`;

    const mailOptions = {
      from: `"ED LINE Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email || undefined,
      subject: `New Registration | ${name}`,
      text: `
New registration received from the ED LINE website

Full Name: ${name}
Phone Number: ${phone}
Email Address: ${email || 'Not provided'}
Course Interested: ${courseLabels[course] || course}
Preferred Location: ${locationLabels[location] || location || 'Not specified'}
Received On: ${submittedAt} IST
      `.trim(),
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <body style="margin: 0; padding: 0; background: #eef4ff; font-family: Arial, Helvetica, sans-serif; color: #0f172a;">
            <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
              New student registration from ${safeName} for ${safeCourse}.
            </div>

            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background: #eef4ff; margin: 0; padding: 24px 12px;">
              <tr>
                <td align="center">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 680px; background: #ffffff; border-radius: 28px; overflow: hidden; box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);">
                    <tr>
                      <td style="padding: 0;">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background: linear-gradient(135deg, #0a4d8c 0%, #1f7ae0 58%, #74b3ff 100%);">
                          <tr>
                            <td style="padding: 36px 34px 30px;">
                              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                  <td style="font-size: 12px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #dbeafe; padding-bottom: 16px;">
                                    ED LINE Edu Consultancy
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size: 30px; line-height: 1.2; font-weight: 700; color: #ffffff; padding-bottom: 14px;">
                                    New registration received
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size: 15px; line-height: 1.7; color: #e0ecff; max-width: 520px;">
                                    A student has submitted the website registration form. The lead details are organized below for quick follow-up.
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding-top: 24px;">
                                    <span style="display: inline-block; padding: 8px 14px; border-radius: 999px; background: rgba(255, 255, 255, 0.16); color: #ffffff; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">
                                      Admissions Lead
                                    </span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 30px 34px 18px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border: 1px solid #dbeafe; border-radius: 22px; background: #f8fbff; overflow: hidden;">
                          <tr>
                            <td style="padding: 22px 24px; border-bottom: 1px solid #dbeafe;">
                              <div style="font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; margin-bottom: 8px;">
                                Priority Contact
                              </div>
                              <div style="font-size: 28px; line-height: 1.25; font-weight: 700; color: #0a1f44;">
                                ${safeName}
                              </div>
                              <div style="font-size: 15px; line-height: 1.7; color: #475569; margin-top: 8px;">
                                Interested in <strong style="color: #0f172a;">${safeCourse}</strong>${location ? ` and prefers <strong style="color: #0f172a;">${safeLocation}</strong>` : '.'}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 24px;">
                              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                ${buildDetailRow('Phone Number', `<a href="tel:${safePhoneHref}" style="color: #0a4d8c; text-decoration: none; font-weight: 700;">${safePhone}</a>`)}
                                ${buildDetailRow('Email Address', email ? `<a href="mailto:${encodeURIComponent(email)}" style="color: #0a4d8c; text-decoration: none; font-weight: 700;">${safeEmail}</a>` : safeEmail)}
                                ${buildDetailRow('Course Interested', safeCourse)}
                                ${buildDetailRow('Preferred Location', safeLocation)}
                                ${buildDetailRow('Received On', `${escapeHtml(submittedAt)} IST`, true)}
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 4px 34px 12px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background: #fff7e6; border: 1px solid #fde68a; border-radius: 20px;">
                          <tr>
                            <td style="padding: 18px 22px;">
                              <div style="font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #9a6700; margin-bottom: 8px;">
                                Follow-up Suggestion
                              </div>
                              <div style="font-size: 15px; line-height: 1.7; color: #7c5a00;">
                                Contact this lead soon while interest is fresh. Calling first is recommended, then continue the conversation on email or WhatsApp.
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 22px 34px 18px;">
                        <table role="presentation" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-right: 12px; padding-bottom: 12px;">
                              ${callCta}
                            </td>
                            <td style="padding-bottom: 12px;">
                              ${replyCta}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 0 34px 32px;">
                        <div style="font-size: 12px; line-height: 1.7; color: #64748b;">
                          This notification was generated automatically from the ED LINE website registration form.
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Registration submitted successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ success: false, message: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
