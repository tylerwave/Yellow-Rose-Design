# Yellow Rose Swag & Design

## Overview
A business website for Yellow Rose Swag & Design, LLC - a custom apparel and etched glassware company owned by Seger Tyler.

## Architecture
- **Frontend**: React with Vite, wouter for routing, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage)

## Key Pages
- `/` - Home page with business info, gallery, products, contact

## Structure
- `client/src/pages/Home.tsx` - Main landing page with all sections
- `client/src/App.tsx` - Router setup
- `shared/schema.ts` - Data models
- `server/routes.ts` - API routes
- `server/storage.ts` - Storage interface
