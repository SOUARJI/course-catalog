# Project Overview

## Overview

This is a full-stack TypeScript application for a corporate knowledge-sharing platform focused on course delivery. The platform allows users to browse, search, and filter through video courses covering various technical topics like API development, DevOps, and best practices. The application features a responsive design with dark/light theme support and integrates with external SharePoint services for video hosting.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Dual approach using both Material-UI components and Tailwind CSS with shadcn/ui components
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Material-UI's ThemeProvider with custom theme creation supporting dark/light modes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with endpoints for course management
- **Data Storage**: Currently uses in-memory storage (MemStorage class) with interface design for easy migration to persistent storage
- **Development Setup**: Vite integration for hot module replacement in development

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined schemas for users and courses with proper TypeScript typing
- **Migrations**: Configured migration system in the `/migrations` directory
- **Current State**: Database integration is prepared but currently using in-memory storage

### Authentication & Authorization
- **Current State**: User schema is defined but authentication is not yet implemented
- **Prepared Structure**: User table with username/password fields ready for authentication implementation

### Development Environment
- **Build System**: Vite for frontend, esbuild for backend production builds
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Development Experience**: Hot reloading, error overlays, and Replit-specific development tools

### UI Component Strategy
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Material Design**: Material-UI components for complex UI patterns
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Radix UI ensures accessibility standards compliance

## External Dependencies

### Database Services
- **Neon Database**: PostgreSQL database service (`@neondatabase/serverless`)
- **Connection**: Configured via `DATABASE_URL` environment variable

### UI Libraries
- **Material-UI**: Comprehensive React component library with theming
- **Radix UI**: Unstyled, accessible UI primitives for custom components
- **Tailwind CSS**: Utility-first CSS framework for styling

### Development Tools
- **Vite**: Frontend build tool and development server
- **Drizzle Kit**: Database migration and management tools
- **React Query**: Server state management and caching
- **TypeScript**: Type safety and enhanced developer experience

### Content Delivery
- **SharePoint Integration**: Videos hosted on SharePoint workplace sites
- **Unsplash**: External image service for course thumbnails
- **Course Content**: Sample data includes various technical training topics

### Build and Deployment
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Environment Configuration**: Development and production environment handling