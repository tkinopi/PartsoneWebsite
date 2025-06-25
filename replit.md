# Partsone - Automotive Parts Recycling Platform

## Overview

Partsone is a comprehensive automotive parts recycling platform that combines modern web technologies with sustainable business practices. The application consists of a React frontend with a Node.js/Express backend, featuring both sourcing business operations and digital platform services for automotive parts recycling.

## System Architecture

### Full-Stack Architecture
- **Frontend**: React 18 with TypeScript, using Vite for build tooling
- **Backend**: Node.js with Express.js API server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Development Environment
- **Runtime**: Node.js 20
- **Build Tool**: Vite with custom configuration for client/server separation
- **Package Manager**: npm with workspace-style structure
- **Development Server**: Development mode runs both client and server concurrently

## Key Components

### Frontend Structure
- **Pages**: Organized by business domain (company, recruit, services, support)
- **Components**: Reusable UI components with shadcn/ui integration
- **Layout**: Header/Footer layout with responsive navigation
- **Styling**: Custom Tailwind configuration with red/black brand colors

### Backend Services
- **API Routes**: RESTful endpoints for contact submissions and news articles
- **Database Layer**: Drizzle ORM with PostgreSQL for data persistence
- **Email Integration**: Gmail API integration for contact form notifications
- **Storage**: Abstract storage interface with database implementation

### Database Schema
- **Users**: Basic user authentication system
- **Contact Submissions**: Form submissions with validation
- **News Articles**: Content management with categories and publishing features
- **Data Validation**: Zod schemas for type-safe data validation

## Data Flow

### Request Flow
1. Client requests routed through Wouter
2. API calls handled by TanStack Query with caching
3. Express server processes requests with middleware
4. Drizzle ORM manages database operations
5. Responses formatted and returned to client

### Content Management
- News articles with rich content support
- Contact form submissions with email notifications
- Image handling for article content
- Published/unpublished article states

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Backend**: Express.js, tsx for TypeScript execution
- **Database**: Neon serverless PostgreSQL, Drizzle ORM
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Icons**: FontAwesome, Lucide React

### Email Services
- **Gmail API**: OAuth2 integration for sending emails
- **Nodemailer**: Email sending functionality
- **SendGrid**: Alternative email service support

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Production Build
- **Client**: Vite builds static assets to `dist/public`
- **Server**: ESBuild bundles server code to `dist/index.js`
- **Database**: Automatic database seeding on startup
- **Environment**: Production mode with optimized builds

### Development Setup
- **Port Configuration**: Client on port 5000, server integrated
- **Hot Reloading**: Vite HMR for client, tsx for server
- **Database**: Automatic migration and seeding
- **Error Handling**: Development error overlay integration

### Infrastructure
- **Hosting**: Configured for autoscale deployment
- **Database**: PostgreSQL 16 with connection pooling
- **Static Assets**: Served through Express static middleware
- **Environment Variables**: Database URL and email service configuration

## Changelog

```
Changelog:
- June 25, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```