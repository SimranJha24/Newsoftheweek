# replit.md

## Overview

This is a full-stack web application for "News of the Week," a premium weekly publication in Delhi NCR that showcases advertising packages and services to potential business clients. The application serves as a marketing website with contact forms, newsletter subscriptions, and inquiry management for advertising services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Custom CSS with premium design system including fonts (Playfair Display, Inter)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for inquiries and newsletter subscriptions
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: Hot reload with Vite integration in development mode

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling to sections
- **Hero Section**: Premium landing page with call-to-action buttons
- **Coverage Areas**: Display of premium neighborhoods and target demographics
- **Advertising Packages**: Pricing tiers and feature comparisons
- **Luxury Connection**: Lifestyle categories and brand positioning
- **Testimonials**: Client feedback and success stories
- **Contact Section**: Inquiry form with validation
- **Footer**: Newsletter subscription and company information

### Backend Components
- **Storage Layer**: Abstracted storage interface with PostgreSQL database implementation using Drizzle ORM
- **Database Connection**: Neon PostgreSQL database with connection pooling
- **Route Handlers**: API endpoints for inquiries, newsletter subscriptions, and rate card downloads
- **Middleware**: Request logging, error handling, and JSON parsing
- **Schema Validation**: Zod schemas for data validation

### Database Schema
- **Inquiries Table**: Customer inquiry tracking with contact details, company, phone, message, and inquiry type
- **Newsletter Subscriptions Table**: Email subscription management with unique constraint and subscription timestamp

## Data Flow

1. **User Interaction**: Users interact with the React frontend components
2. **Form Submission**: Contact forms and newsletter subscriptions send data via TanStack Query
3. **API Processing**: Express.js routes validate data using Zod schemas
4. **Data Storage**: Validated data is persisted to PostgreSQL database using Drizzle ORM
5. **Response Handling**: Success/error responses are displayed via toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver for Neon
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **zod**: Runtime type validation
- **express**: Web application framework

### UI Dependencies
- **@radix-ui/***: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **wouter**: Lightweight routing library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with Express.js integration
- **Type Checking**: TypeScript compilation checking without emission
- **Database**: Drizzle migrations with push commands

### Production Build
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Serving**: Express serves built React application in production
4. **Database Setup**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Session Management**: PostgreSQL-backed sessions for production scalability
- **Asset Serving**: Static file serving with appropriate caching headers

The application is designed to be deployment-ready for platforms like Replit, with proper environment variable handling and production optimizations.