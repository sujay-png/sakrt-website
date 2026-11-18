import type { APIRoute } from 'astro';
import { appendToGoogleSheet } from '../../lib/googleSheets';
import { submitToWordPressElementor } from '../../lib/wordpress';

async function sendEmailNotification(data: Record<string, any>) {
  const recipientEmail = import.meta.env.NOTIFICATION_EMAIL || 'enquires.wrnxt@gmail.com';
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const name = data.name || data.fullName || 'Customer';
  const phone = data.phone || data.phoneNumber || '-';
  const company = data.company || data.companyName || '-';
  const email = data.email || data.businessEmail || '-';
  const product = data.product_name || data.productName || '-';
  const quantity = data.item_quantity || data.itemQuantity || '-';
  const message = data.message || '-';
  const formType = data.form_type === 'popup' ? 'Product Bulk Supply Inquiry' : 'Contact Us Inquiry';

  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', {
    timeZone: 'Asia/Kolkata',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).toLowerCase();

  // If RESEND_API_KEY is configured, dispatch direct white-label email
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SAKRT Orders <onboarding@resend.dev>',
          to: [recipientEmail],
          subject: `New Lead: ${name} - ${product}`,
          html: `
            <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.8; color: #111827; background-color: #ffffff; padding: 24px; max-width: 600px;">
              <p style="margin: 0 0 4px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 4px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0b57d0; text-decoration: underline;">${email}</a></p>
              <p style="margin: 0 0 4px 0;"><strong>Phone :</strong> ${phone}</p>
              <p style="margin: 0 0 4px 0;"><strong>Company:</strong> ${company}</p>
              <p style="margin: 0 0 4px 0;"><strong>Product Name:</strong> ${product}</p>
              <p style="margin: 0 0 4px 0;"><strong>Quantity:</strong> ${quantity}</p>
              <p style="margin: 0 0 16px 0;"><strong>Message:</strong> ${message}</p>
              
              <p style="margin: 16px 0; color: #6b7280;">---</p>
              
              <p style="margin: 0 0 4px 0; color: #374151;"><strong>Date:</strong> ${formattedDate}</p>
              <p style="margin: 0 0 4px 0; color: #374151;"><strong>Time:</strong> ${formattedTime}</p>
              <p style="margin: 0 0 4px 0; color: #374151;"><strong>Page URL:</strong> <a href="https://sakrt.in" style="color: #0b57d0; text-decoration: underline;">https://sakrt.in</a></p>
              <p style="margin: 0 0 4px 0; color: #374151;"><strong>Submission Source:</strong> ${formType}</p>
            </div>
          `,
          text: `Name: ${name}\nEmail: ${email}\nPhone : ${phone}\nCompany: ${company}\nProduct Name: ${product}\nQuantity: ${quantity}\nMessage: ${message}\n\n---\n\nDate: ${formattedDate}\nTime: ${formattedTime}\nPage URL: https://sakrt.in\nSubmission Source: ${formType}`,
        }),
      });

      const resData = await response.json().catch(() => ({}));
      console.log('[Enquiry API] Resend email result:', resData);
      return { success: response.ok, provider: 'resend', data: resData };
    } catch (err: any) {
      console.error('[Enquiry API] Resend email error:', err);
      return { success: false, error: err?.message };
    }
  }

  return { success: true, notice: 'Delegated to WordPress Elementor Email' };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    console.log('[Enquiry API] Received form submission:', data);
    
    // Execute Email, Google Sheets, and WordPress in parallel so one never blocks the other
    const [emailResult, sheetResult, wpResult] = await Promise.allSettled([
      sendEmailNotification(data),
      appendToGoogleSheet(data),
      submitToWordPressElementor(data),
    ]);

    console.log('[Enquiry API] Execution results:', { emailResult, sheetResult, wpResult });

    return new Response(JSON.stringify({ 
      success: true, 
      emailResult,
      sheetResult,
      wpResult 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('[Enquiry API Error]:', error);
    return new Response(JSON.stringify({ success: false, error: error?.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
