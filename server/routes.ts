import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema } from "@shared/schema";
import { sendOrderConfirmationEmail, sendOrderNotificationEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Create a new order
  app.post("/api/orders", async (req, res) => {
    try {
      console.log("📝 Order received:", req.body);
      const validated = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validated);
      
      console.log("✓ Order created:", order.id);
      console.log("📧 Sending emails (async)...");
      
      // Send emails asynchronously - don't block the response
      sendOrderConfirmationEmail(order).catch(console.error);
      sendOrderNotificationEmail(order).catch(console.error);
      
      res.json(order);
    } catch (error) {
      console.error("❌ Error creating order:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create order" });
      }
    }
  });

  // Get order details
  app.get("/api/orders/:id", async (req, res) => {
    try {
      const order = await storage.getOrder(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch order" });
    }
  });

  // Get orders by email
  app.get("/api/orders/email/:email", async (req, res) => {
    try {
      const orders = await storage.getOrdersByEmail(req.params.email);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });

  // Get all orders (admin endpoint - in production, add authentication)
  app.get("/api/admin/orders", async (req, res) => {
    try {
      const orders = await storage.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });

  // Update payment status
  app.patch("/api/orders/:id/payment", async (req, res) => {
    try {
      const { paymentStatus, paymentIntentId } = req.body;
      const order = await storage.updateOrderPaymentStatus(
        req.params.id,
        paymentStatus,
        paymentIntentId
      );
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to update payment status" });
    }
  });

  return httpServer;
}
