import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  industry: string;
  message: string;
}

export async function sendContactNotification(contactData: ContactEmailData): Promise<boolean> {
  try {
    const emailContent = {
      to: 'contact@zinextechnology.com',
      from: 'noreply@zinextech.com', // This needs to be verified in SendGrid
      subject: `New Contact Form Submission from ${contactData.firstName} ${contactData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #e32322; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #1b3484;">Contact Information</h3>
            <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <p><strong>Company:</strong> ${contactData.company}</p>
            <p><strong>Industry:</strong> ${contactData.industry}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <h3 style="margin-top: 0; color: #1b3484;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${contactData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was automatically generated from the Zinex Technology website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${contactData.firstName} ${contactData.lastName}
Email: ${contactData.email}
Company: ${contactData.company}
Industry: ${contactData.industry}

Message:
${contactData.message}

Submitted on: ${new Date().toLocaleString()}
      `.trim()
    };

    await mailService.send(emailContent);
    console.log('Contact notification email sent successfully to contact@zinextechnology.com');
    return true;
  } catch (error) {
    console.error('Failed to send contact notification email:', error);
    return false;
  }
}
