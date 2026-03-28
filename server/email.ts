import nodemailer from "nodemailer";
import type { Order } from "@shared/schema";

// Create a transporter using Gmail (you can update this to use your email service)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function sendOrderConfirmationEmail(order: Order) {
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER || "orders@yellowroseswag.com",
      to: order.email,
      subject: "Order Confirmation - Yellow Rose Swag & Design",
      html: `
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
      `,
    });
  } catch (error) {
    console.error("Failed to send order confirmation email:", error);
  }
}

export async function sendOrderNotificationEmail(order: Order) {
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER || "orders@yellowroseswag.com",
      to: "yellowroseswag@gmail.com",
      subject: `New Order from ${order.firstName} ${order.lastName}`,
      html: `
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
      `,
    });
  } catch (error) {
    console.error("Failed to send order notification email:", error);
  }
}
