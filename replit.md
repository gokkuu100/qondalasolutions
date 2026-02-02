# Zinex Technology - Enterprise Technology Solutions

## Overview
Zinex Technology is a full-stack web application showcasing enterprise technology solutions. It combines software, hardware, and AI-driven automation services for various industries, including manufacturing, transportation, security, and business automation. The project aims to provide comprehensive technology services to businesses.

## Brand Colors
- **Primary Red**: RGB(227, 35, 34) - Used for accents, buttons, and highlights
- **Primary Blue**: RGB(27, 52, 132) - Used for headings, backgrounds, and text
- **Logo**: Zinex Technology logo with red arrow icon and blue text

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **UI Library**: Radix UI components with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **API Design**: RESTful API endpoints

### Development Setup
- **Monorepo Structure**: Shared schemas and types between client and server
- **Hot Reload**: Vite HMR for frontend, tsx for backend
- **Type Safety**: Strict TypeScript configuration

### Key Features
- **UI/UX**: Professional and modern design with red and blue branding, updated industry images, dynamic hero carousels, and Google Maps integration on the contact page. Consistent branding with Zinex Technology logo.
- **AI Chat Assistant**: Integrated OpenAI API (GPT-4o) with a floating, professional, and bot-themed chat interface. Includes chat message storage, session management, and company-specific knowledge.
- **Content Management**: Dedicated pages for Solutions (Healthcare, Logistics, Connected Systems, Process Automation, Custom Enterprise Software) and Industries (Government, Enterprise, Business Automation, Custom Solutions).
- **Image Optimization**: Comprehensive image optimization applied across the entire website for performance, reducing file sizes significantly.
- **Responsive Design**: Ensured responsiveness for mobile and desktop views.
- **Email Notifications**: SendGrid integration for contact form submissions (sends to info@zinextech.com)

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Hookform Resolvers
- **UI Components**: Radix UI, Class Variance Authority
- **Styling**: Tailwind CSS
- **Utilities**: date-fns, clsx

### Backend Dependencies
- **Server Framework**: Express.js
- **Database**: Drizzle ORM with Neon Database adapter
- **Session Storage**: connect-pg-simple
- **Development**: tsx, esbuild

### AI Integration
- **OpenAI API**: Used for the AI chat assistant (GPT-4o model).

### Other Integrations
- **Google Maps**: Embedded on the Contact page.
- **SendGrid**: Email notifications for contact form submissions.
