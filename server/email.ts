import type { Order } from "@shared/schema";

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
        from: "orders@resend.dev",
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

  await sendEmailViaResend(
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

  await sendEmailViaResend(
    "yellowroseswag@gmail.com",
    `New Order from ${order.firstName} ${order.lastName}`,
    html
  );
}
