import { type User, type InsertUser, type Order, type InsertOrder, type CallbackRequest, type InsertCallbackRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createOrder(order: InsertOrder): Promise<Order>;
  getOrder(id: string): Promise<Order | undefined>;
  getOrdersByEmail(email: string): Promise<Order[]>;
  updateOrderPaymentStatus(id: string, paymentStatus: string, paymentIntentId?: string): Promise<Order>;
  getAllOrders(): Promise<Order[]>;
  createCallbackRequest(request: InsertCallbackRequest): Promise<CallbackRequest>;
  getAllCallbackRequests(): Promise<CallbackRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private orders: Map<string, Order>;
  private callbackRequests: Map<string, CallbackRequest>;

  constructor() {
    this.users = new Map();
    this.orders = new Map();
    this.callbackRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = randomUUID();
    const now = new Date();
    const order: Order = {
      ...insertOrder,
      id,
      stripePaymentIntentId: null,
      paymentStatus: "pending",
      orderStatus: "received",
      createdAt: now,
      updatedAt: now,
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async getOrdersByEmail(email: string): Promise<Order[]> {
    return Array.from(this.orders.values()).filter((order) => order.email === email);
  }

  async updateOrderPaymentStatus(id: string, paymentStatus: string, paymentIntentId?: string): Promise<Order> {
    const order = this.orders.get(id);
    if (!order) throw new Error("Order not found");
    
    const updated: Order = {
      ...order,
      paymentStatus,
      stripePaymentIntentId: paymentIntentId || order.stripePaymentIntentId,
      updatedAt: new Date(),
    };
    this.orders.set(id, updated);
    return updated;
  }

  async getAllOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }

  async createCallbackRequest(insertRequest: InsertCallbackRequest): Promise<CallbackRequest> {
    const id = randomUUID();
    const request: CallbackRequest = {
      ...insertRequest,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.callbackRequests.set(id, request);
    return request;
  }

  async getAllCallbackRequests(): Promise<CallbackRequest[]> {
    return Array.from(this.callbackRequests.values());
  }
}

export const storage = new MemStorage();
