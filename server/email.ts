import type { Order, CallbackRequest } from "@shared/schema";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

async function sendEmailViaResend(to: string, subject: string, html: string) {
  console.log(`\n🔄 Attempting to send email to: ${to}`);
  
  if (!RESEND_API_KEY) {
    console.log(`⚠️  RESEND_API_KEY not set. Email would go to: ${to}`);
    console.log(`   Subject: ${subject}`);
    return;
  }

  console.log(`✓ RESEND_API_KEY is configured`);

  try {
    console.log(`📤 Calling Resend API...`);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "orders@yellowroseswag.com",
        to: to,
        subject: subject,
        html: html,
      }),
    });

    console.log(`📬 Resend API Response Status: ${response.status}`);

    if (response.ok) {
      const data = await response.json();
      console.log(`✓ Email successfully sent to ${to} (ID: ${data.id})\n`);
    } else {
      const error = await response.json();
      console.error(`✗ Resend API Error (${response.status}):`, error);
      console.error(`   To: ${to}\n`);
    }
  } catch (error) {
    console.error(`✗ Network Error sending email:`, error, `\n`);
  }
}

// Silently handle email errors - don't block order creation
async function sendEmailSafely(to: string, subject: string, html: string) {
  try {
    await sendEmailViaResend(to, subject, html);
  } catch (error) {
    console.error("Email failed but order succeeded:", error);
  }
}

export async function sendOrderConfirmationEmail(order: Order) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0f172a;">Thank you for your order, ${order.firstName}!</h2>
      <p>We've received your custom design request and will be in touch shortly.</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0f172a; margin-top: 0;">Order Details</h3>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Service:</strong> ${order.serviceType}</p>
        <p><strong>Quantity:</strong> ${order.quantity}</p>
        <p><strong>Description:</strong> ${order.designDetails}</p>
      </div>
      
      <p>We'll review your design request and reach out to discuss pricing and timeline.</p>
      
      <p style="color: #666; font-size: 14px;">
        <strong>Contact us:</strong><br>
        Phone: 318-829-7479<br>
        Email: yellowroseswag@gmail.com
      </p>
    </div>
  `;

  await sendEmailSafely(
    order.email,
    "Order Confirmation - Yellow Rose Swag & Design",
    html
  );
}

export async function sendOrderNotificationEmail(order: Order) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0f172a;">New Order Received!</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0f172a; margin-top: 0;">Customer Information</h3>
        <p><strong>Name:</strong> ${order.firstName} ${order.lastName}</p>
        <p><strong>Email:</strong> ${order.email}</p>
        <p><strong>Phone:</strong> ${order.phone}</p>
      </div>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0f172a; margin-top: 0;">Order Details</h3>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Service:</strong> ${order.serviceType}</p>
        <p><strong>Quantity:</strong> ${order.quantity}</p>
        <p><strong>Design Details:</strong></p>
        <p>${order.designDetails}</p>
        <p><strong>Estimated Cost:</strong> $${(order.estimatedCost / 100).toFixed(2)}</p>
      </div>
    </div>
  `;

  await sendEmailSafely(
    "yellowroseswag@gmail.com",
    `New Order from ${order.firstName} ${order.lastName}`,
    html
  );
}

function buildGoogleCalendarLink(req: CallbackRequest): string {
  const date = req.preferredDate.replace(/-/g, "");
  const start = req.bestTimeStart.replace(":", "") + "00";
  const end = req.bestTimeEnd.replace(":", "") + "00";
  const startDt = `${date}T${start}`;
  const endDt = `${date}T${end}`;
  const title = encodeURIComponent(`Call ${req.name} - Yellow Rose Swag`);
  const details = encodeURIComponent(
    `Customer: ${req.name}\nPhone: ${req.phone}\nEmail: ${req.email}\nReason: ${req.reason}`
  );
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDt}/${endDt}&details=${details}`;
}

export async function sendCallbackRequestEmails(request: CallbackRequest) {
  const calendarLink = buildGoogleCalendarLink(request);

  const businessHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0f172a;">📞 New Callback Request</h2>
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4a017;">
        <p style="margin: 0; font-size: 16px;"><strong>${request.name}</strong> would like a callback on <strong>${request.preferredDate}</strong> between <strong>${request.bestTimeStart}</strong> and <strong>${request.bestTimeEnd}</strong>.</p>
      </div>

      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0f172a; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${request.name}</p>
        <p><strong>Phone:</strong> <a href="tel:${request.phone}">${request.phone}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${request.email}">${request.email}</a></p>
      </div>

      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0f172a; margin-top: 0;">Appointment Details</h3>
        <p><strong>Preferred Date:</strong> ${request.preferredDate}</p>
        <p><strong>Best Time to Call:</strong> ${request.bestTimeStart} – ${request.bestTimeEnd}</p>
        <p><strong>Reason for Call:</strong></p>
        <p>${request.reason}</p>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${calendarLink}" style="background-color: #d4a017; color: #0f172a; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">📅 Add to Google Calendar</a>
      </div>

      <p style="color: #666; font-size: 12px; text-align: center;">Request ID: ${request.id}</p>
    </div>
  `;

  const customerHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0f172a;">Thanks for reaching out, ${request.name}!</h2>
      <p>We've received your callback request and will give you a call on <strong>${request.preferredDate}</strong> between <strong>${request.bestTimeStart}</strong> and <strong>${request.bestTimeEnd}</strong>.</p>

      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0f172a; margin-top: 0;">Your Request</h3>
        <p><strong>Phone:</strong> ${request.phone}</p>
        <p><strong>Reason:</strong> ${request.reason}</p>
      </div>

      <p>If anything changes or you need to reach us sooner, feel free to call or text us directly.</p>

      <p style="color: #666; font-size: 14px;">
        <strong>Yellow Rose Swag & Design</strong><br>
        Phone: 318-829-7479<br>
        Email: yellowroseswag@gmail.com
      </p>
    </div>
  `;

  await Promise.all([
    sendEmailSafely(
      "yellowroseswag@gmail.com",
      `📞 Callback Request from ${request.name} (${request.preferredDate})`,
      businessHtml
    ),
    sendEmailSafely(
      request.email,
      "We'll Call You Soon - Yellow Rose Swag & Design",
      customerHtml
    ),
  ]);
}
