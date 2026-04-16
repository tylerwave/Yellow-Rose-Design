import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const orders = pgTable("orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceType: text("service_type").notNull(), // 'apparel', 'glassware', 'totes', 'other'
  designDetails: text("design_details").notNull(),
  quantity: integer("quantity").notNull().default(1),
  estimatedCost: integer("estimated_cost").notNull(), // in cents
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  paymentStatus: text("payment_status").notNull().default("pending"), // 'pending', 'completed', 'failed'
  orderStatus: text("order_status").notNull().default("received"), // 'received', 'in_progress', 'completed', 'shipped'
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
});

export const insertOrderSchema = createInsertSchema(orders)
  .omit({ id: true, stripePaymentIntentId: true, createdAt: true, updatedAt: true })
  .extend({
    firstName: z.string().min(1, "First name required"),
    lastName: z.string().min(1, "Last name required"),
    email: z.string().email("Valid email required"),
    phone: z.string().min(10, "Valid phone number required"),
    serviceType: z.enum(["apparel", "glassware", "totes", "other"]),
    designDetails: z.string().min(10, "Please describe your design in detail"),
    quantity: z.number().int().min(1),
    estimatedCost: z.number().int().min(0),
  });

export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const callbackRequests = pgTable("callback_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  bestTimeStart: text("best_time_start").notNull(),
  bestTimeEnd: text("best_time_end").notNull(),
  preferredDate: text("preferred_date").notNull(),
  reason: text("reason").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertCallbackRequestSchema = createInsertSchema(callbackRequests)
  .omit({ id: true, status: true, createdAt: true })
  .extend({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(10, "Valid phone number required"),
    email: z.string().email("Valid email required"),
    bestTimeStart: z.string().min(1, "Start time required"),
    bestTimeEnd: z.string().min(1, "End time required"),
    preferredDate: z.string().min(1, "Preferred date required"),
    reason: z.string().min(5, "Please provide a reason for the call"),
  });

export type InsertCallbackRequest = z.infer<typeof insertCallbackRequestSchema>;
export type CallbackRequest = typeof callbackRequests.$inferSelect;
