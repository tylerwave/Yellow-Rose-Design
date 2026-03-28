# Yellow Rose Swag & Design

## Overview
A business website for Yellow Rose Swag & Design, LLC - a custom apparel and etched glassware company owned by Seger Tyler in Elgin, SC.

## Architecture
- **Frontend**: React with Vite, wouter for routing, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage)
- **Email**: Resend API (direct REST calls, no npm package) for order notifications

## Key Pages
- `/` - Home page with business info, gallery, products, contact form

## Structure
- `client/src/pages/Home.tsx` - Main landing page with all sections
- `client/src/App.tsx` - Router setup
- `shared/schema.ts` - Data models (orders table)
- `server/routes.ts` - API routes (orders CRUD)
- `server/storage.ts` - Storage interface
- `server/email.ts` - Email notifications via Resend API

## Email System
- Uses Resend REST API (no npm package needed)
- Sends from: `orders@yellowroseswag.com` (verified domain)
- Customer confirmation email on order submission
- Business notification email to `yellowroseswag@gmail.com`
- Emails are sent asynchronously (don't block order response)
- Requires `RESEND_API_KEY` environment secret

## API Endpoints
- `POST /api/orders` - Create order + send emails
- `GET /api/orders/:id` - Get order by ID
- `GET /api/orders/email/:email` - Get orders by email
- `GET /api/admin/orders` - List all orders
- `PATCH /api/orders/:id/payment` - Update payment status

## Design
- Colors: Deep navy primary, metallic gold secondary, bright yellow accent
- Fonts: Playfair Display (headings), Inter (body)
- Vite aliases: `@assets` → `attached_assets/`, `@/` → `client/src/`

## Deployment
- Run command: `npm run dev`
- Deployment type: Autoscale
