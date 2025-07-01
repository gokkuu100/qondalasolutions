# Qondala - Enterprise Technology Solutions

## Overview

Qondala is a modern full-stack web application that serves as a company website for enterprise technology solutions. The application showcases comprehensive technology services combining software, hardware, and AI-driven automation for businesses across various industries including manufacturing, transportation, security, and business automation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **API Design**: RESTful API endpoints with proper error handling

### Development Setup
- **Monorepo Structure**: Shared schemas and types between client and server
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Type Safety**: Strict TypeScript configuration across the entire stack

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Footer with company information
- **Page Components**: Home, Solutions, Industries, About, Contact pages
- **UI Components**: Comprehensive shadcn/ui component library including forms, cards, buttons, and navigation elements
- **Custom Components**: Hero section, stats display, industry showcases

### Backend Components
- **Route Handlers**: Contact inquiry management endpoints
- **Storage Layer**: Abstract storage interface with in-memory implementation (ready for database integration)
- **Middleware**: Request logging, JSON parsing, error handling
- **Development Tools**: Vite integration for SSR-like development experience

### Shared Components
- **Schema Definitions**: Zod schemas for data validation
- **Type Definitions**: TypeScript types generated from Drizzle schemas
- **Database Models**: User and contact inquiry models

## Data Flow

### Client-Server Communication
1. **Frontend Requests**: TanStack Query handles API requests with caching and error states
2. **API Endpoints**: Express routes validate data using shared Zod schemas
3. **Data Storage**: Storage layer abstracts database operations
4. **Response Handling**: Consistent JSON responses with error handling

### Form Submission Flow
1. **Form Validation**: React Hook Form with Zod resolver validates input
2. **API Request**: Validated data sent to backend via TanStack Query mutation
3. **Server Processing**: Express route validates and stores contact inquiries
4. **User Feedback**: Toast notifications provide success/error feedback

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM for component rendering
- **Routing**: Wouter for lightweight routing
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Hookform Resolvers
- **UI Components**: Extensive Radix UI primitive components
- **Styling**: Tailwind CSS, Class Variance Authority for component variants
- **Utilities**: date-fns for date handling, clsx for conditional classes

### Backend Dependencies
- **Server Framework**: Express.js for HTTP server
- **Database**: Drizzle ORM with Neon Database adapter
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Dependencies
- **Build Tools**: Vite for frontend bundling, PostCSS for CSS processing
- **Type Checking**: TypeScript with strict configuration
- **Replit Integration**: Specialized Vite plugins for Replit environment

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with automatic restart on file changes
- **Database**: Neon Database serverless PostgreSQL
- **Environment**: Replit-optimized with specialized plugins

### Production Build
- **Frontend**: Vite build to static assets in dist/public
- **Backend**: esbuild bundle to dist/index.js
- **Serving**: Express serves both API and static files
- **Database**: Drizzle migrations for schema management

### Environment Configuration
- **Database URL**: Required environment variable for Neon Database connection
- **Session Storage**: PostgreSQL-based session management
- **Static Assets**: Served from dist/public directory

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Added AI chat assistant powered by ChatGPT
  - Integrated OpenAI API with GPT-4o model
  - Created floating chat interface with professional styling
  - Added chat message storage and session management
  - Implemented company-specific AI assistant with knowledge about Qondala's services
- June 27, 2025. Enhanced AI chat assistant with bot-like appearance
  - Redesigned chat interface with larger size (700px-800px height, wider dialog)
  - Added gradient backgrounds and robot-themed styling with Bot icons
  - Implemented pulsing animations and "Bot Online" status indicator
  - Enhanced message bubbles with larger sizes and better spacing
  - Added "AI Bot is thinking..." loading state with animated dots
  - Updated welcome message with system initialization theme
  - Integrated official Qondala logo in header and footer
- July 1, 2025. Created dedicated solution pages
  - Built comprehensive Healthcare page with EHR, patient management, and medical device integration
  - Created Logistics page with supply chain optimization, fleet management, and analytics solutions
  - Developed Connected Systems page with integration platforms, IoT management, and intelligent analytics
  - Updated all navigation links to point to specific solution pages
  - Fixed broken links from home page solution cards and industry sections
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```