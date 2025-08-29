# Course Catalog

A modern, full-stack course catalog application built with React, TypeScript, and Express.js.

## Features

- 🎯 **Course Browsing**: Browse and search through available courses
- 🔍 **Search & Filter**: Search by title, description, or tags with category filtering
- 🎨 **Modern UI**: Material-UI components with dark/light theme support
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Development**: Vite-powered development with hot module replacement
- 🔒 **Type Safety**: End-to-end TypeScript with shared schemas

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Material-UI (MUI)** for components
- **Tailwind CSS** for utility styling
- **shadcn/ui** for additional UI components
- **TanStack Query** for data fetching and caching
- **Wouter** for client-side routing
- **Vite** for build tooling

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** (via Neon serverless)
- **Zod** for runtime validation

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pasouarj_amadeus/course-catalog.git
cd course-catalog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema changes

## Project Structure

```
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Route components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities and configurations
│   │   └── data/        # Static data
├── server/          # Express.js backend
│   ├── index.ts     # Main server entry point
│   ├── routes.ts    # API route definitions
│   └── storage.ts   # Data access layer
├── shared/          # Shared TypeScript schemas
└── public/          # Static assets
```

## API Endpoints

- `GET /api/courses` - Fetch all courses
- `GET /api/courses/:id` - Fetch specific course by ID

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
