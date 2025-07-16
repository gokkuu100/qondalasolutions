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
- July 3, 2025. Added Government and Enterprise industry pages
  - Created Government Agencies page with security, compliance, and citizen services solutions
  - Built Enterprise page with cloud solutions, business intelligence, and digital transformation
  - Updated routing and navigation to link all four industry cards to dedicated pages
  - All "Learn More" buttons now lead to comprehensive solution pages
- July 3, 2025. Enhanced visual design and navigation
  - Added green geometric background to Solutions page matching Qondala branding
  - Updated drone technology icons from factory/plane to target crosshairs for better representation
  - Fixed scroll-to-top functionality for proper page navigation
  - Applied new header images to Healthcare and Logistics pages with professional styling
- July 3, 2025. Redesigned Industries page with modern tabbed interface
  - Transformed Industries page from grid layout to professional tabbed navigation
  - Added green geometric background matching Solutions page branding
  - Implemented responsive tab design with icons and industry names
  - Enhanced content presentation with two-column layout and larger images
  - Added call-to-action buttons for each industry section
  - Integrated sales lady image in call-to-action section with optimal positioning
- July 3, 2025. Updated industry images with professional photography
  - Replaced Healthcare image with authentic medical workers discussing x-rays
  - Updated Manufacturing image with technician operating control systems  
  - Added Transportation image with professional bus driver
  - Updated Security image with police officer using digital patrol technology
  - Optimized all images with lazy loading and local storage for performance
  - Completed full industry image replacement with authentic workplace photography
- July 3, 2025. Enhanced Solutions page with Process Automation imagery
  - Added professional business automation image to Process Automation service
  - Enhanced Solutions page card template to display service images
  - Optimized image loading with lazy loading and responsive design
- July 3, 2025. Added Custom Enterprise Software imagery
  - Added multi-ethnic programmers image to Custom Enterprise Software service
  - Shows collaborative development environment with source code review
  - Enhanced visual representation of custom software development process
- July 3, 2025. Updated Enterprise page hero image
  - Replaced enterprise business image with professional businessman and analytics dashboard
  - Shows modern business environment with data visualization and team collaboration
  - Optimized image display with lazy loading and proper aspect ratio
- July 3, 2025. Implemented dynamic hero carousel with multiple slides
  - Created 3-slide hero carousel with auto-advance and manual navigation
  - Slide 1: Original "Smarter Systems" content with existing background
  - Slide 2: "Advanced AI" messaging with Qondala business consultation image
  - Slide 3: "Innovation Driven" content with updated Qondala team member image
  - Added smooth transitions, navigation arrows, and slide indicators
  - Maintained responsive design for mobile and desktop
- July 3, 2025. Updated About section image on homepage
  - Replaced generic stock photo with authentic developer collaboration image
  - Shows developers working on code in modern office environment
  - Enhanced About section with realistic representation of Qondala's technical team
- July 3, 2025. Added Google Maps integration to Contact page
  - Updated office address to "200 Southdale Ctr, Edina, MN 55435 US"
  - Embedded interactive Google Maps showing exact location
  - Added "Visit Our Office" section with professional map display
  - Made address clickable to open Google Maps for directions
- July 3, 2025. Created hero section for Contact page
  - Added professional hero image showing Qondala customer service representatives
  - Features customer support team with headsets and Qondala branding
  - Implemented full-width hero section with overlay and centered text
  - Enhanced Contact page visual appeal with branded customer service imagery
- July 3, 2025. Updated Enterprise tab image on Industries page
  - Replaced generic stock photo with professional businessman analytics environment
  - Shows modern office setting with data visualization and business intelligence
  - Enhanced Enterprise section with authentic business decision-making imagery
  - Improved visual representation of enterprise technology solutions
- July 3, 2025. Updated Business Automation tab image on Industries page
  - Replaced generic stock photo with diverse business team meeting image
  - Shows multiracial professionals collaborating with digital analytics displays
  - Enhanced Business Automation section with authentic teamwork and technology integration
  - Improved visual representation of business process optimization and digital transformation
- July 3, 2025. Updated Custom Solutions tab image on Industries page
  - Replaced generic stock photo with developer collaboration image
  - Shows team members actively working on code development together
  - Enhanced Custom Solutions section with authentic software development imagery
  - Improved visual representation of custom development and specialized integration services
- July 4, 2025. Completed comprehensive image optimization across entire website
  - Updated all page references to use optimized image versions (-optimized suffix)
  - Applied optimization to Home, Industries, Solutions, Government, Logistics, Enterprise, and Contact pages
  - Ensured consistent loading performance with compressed images under 228KB
  - Maintained visual quality while achieving 99%+ file size reduction across all website assets
- July 4, 2025. Enhanced footer and Connected Systems page design
  - Increased footer logo size from 32px to 48px for better visibility
  - Updated social media links with authentic Qondala accounts (Twitter: @Qondala1, Instagram: @qondala4)
  - Added Instagram social media icon to footer navigation
  - Applied black hero section design to Connected Systems page matching drone technology style
  - Added "Back to Home" navigation and green Network icon to Connected Systems hero
- July 4, 2025. Comprehensive website image optimization for performance
  - Optimized all major images reducing file sizes by 95-99% while maintaining quality
  - Healthcare image: 14MB → 191KB, Logistics: 11MB → 149KB, Transportation: 18MB → 197KB
  - Security: 5.9MB → 147KB, Team Member: 19MB → 69KB, Sales Lady: 19MB → 69KB
  - Header images: Logistics 8.5MB → 21KB, Health 7.6MB → 27KB
  - Updated all page references to use optimized image versions
  - Implemented lazy loading and responsive image sizing for faster page loads
  - Total bandwidth reduction: Over 100MB of image data optimized across the website
- July 5, 2025. Updated contact information and statistics
  - Changed email from contact@qondala.com to info@qondala.com
  - Updated phone number to +1 (612) 508-8704
  - Updated company statistics to reflect accurate business metrics:
    - Enterprise Clients: 500+ → 1
    - Projects Delivered: 1,200+ → 3
    - Countries Served: 25+ → 25+
    - System Uptime: 99.9% → 99.99%
- July 16, 2025. UI improvements and image optimization fixes
  - Fixed Solutions page text overlap and layout issues in "Don't See Your Industry?" section
  - Removed black background from team member image by using transparent PNG version
  - Updated About page: capitalized "Team" in "Meet our Team" heading and removed exclamation mark
  - Removed Hussein Mohamed from team section and centered remaining 3 members
  - Optimized over 200MB additional image data with 95-99% file size reductions
  - Created responsive, centered layout for team section with proper spacing
  - Fixed Industries page black background issue by creating transparent PNG for sales lady image
  - Applied transparent background fix to both mobile and desktop layouts on Industries page
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```