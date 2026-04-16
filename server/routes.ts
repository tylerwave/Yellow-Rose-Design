import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema, insertCallbackRequestSchema } from "@shared/schema";
import { sendOrderConfirmationEmail, sendOrderNotificationEmail, sendCallbackRequestEmails } from "./email";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Create a new order
  app.post("/api/orders", async (req, res) => {
    try {
      const validated = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validated);
      
      sendOrderConfirmationEmail(order).catch(console.error);
      sendOrderNotificationEmail(order).catch(console.error);
      
      res.json(order);
    } catch (error) {
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

  // Create a callback request (appointment scheduling)
  app.post("/api/callbacks", async (req, res) => {
    try {
      const validated = insertCallbackRequestSchema.parse(req.body);
      const request = await storage.createCallbackRequest(validated);

      sendCallbackRequestEmails(request).catch(console.error);

      res.json(request);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit callback request" });
      }
    }
  });

  app.get("/api/admin/callbacks", async (_req, res) => {
    try {
      const requests = await storage.getAllCallbackRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch callback requests" });
    }
  });

  return httpServer;
}
