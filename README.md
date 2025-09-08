# Course Catalog

A modern, lightweight course catalog application built with React and TypeScript, deployed on Azure Static Web Apps.

## Features

- 🎯 **Course Browsing**: Browse through 48+ technical courses with detailed information
- 🔍 **Search & Filter**: Search by title, description, or tags with category filtering
- 🎨 **Modern UI**: Material-UI components with dark/light theme support
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Development**: Vite-powered development with hot module replacement
- 🔒 **Type Safety**: Full TypeScript implementation with clean interfaces
- ☁️ **Azure Deployment**: Automated CI/CD with Azure Static Web Apps

## Tech Stack

### Frontend (Static Web App)
- **React 18** with TypeScript
- **Material-UI (MUI) v7.3.1** for consistent UI components
- **Tailwind CSS** for utility styling
- **React Icons** for iconography
- **Wouter** for lightweight client-side routing
- **Vite 5.4.19** for optimized build tooling

### Data Layer
- **JSON-based**: Static course data stored in repository
- **SharePoint Integration**: Video content hosted on SharePoint
- **Future**: Azure Functions for automated course updates

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SOUARJI/course-catalog.git
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

The application will be available at `http://localhost:5173`

### Live Demo
🌐 **Azure Static Web App**: [https://wonderful-ground-006053203.1.azurestaticapps.net](https://wonderful-ground-006053203.1.azurestaticapps.net)

## Available Scripts

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run build:static` - Build optimized static assets
- `npm run start` - Preview production build locally
- `npm run check` - TypeScript type checking
- `npm run preview` - Preview built application

## Project Structure

```
├── src/                 # React application source
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # Material-UI component library
│   │   └── course-card.tsx # Course display component
│   ├── pages/          # Route components (Home, NotFound)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and configurations
│   ├── data/           # Static course data (JSON)
│   └── types/          # TypeScript interfaces
├── public/             # Static assets
│   └── images/         # Course placeholder images
├── .github/workflows/  # Azure Static Web Apps CI/CD
└── dist/               # Production build output
```

## Architecture Highlights

### Data Management
- **Static JSON**: Course data stored in `src/data/courses.json`
- **Type Safety**: Clean TypeScript interfaces in `src/types/course.ts`
- **SharePoint Videos**: Direct links to SharePoint-hosted course videos
- **Optimized Images**: Single placeholder image for consistent UI

### Deployment
- **Azure Static Web Apps**: Automated deployment from GitHub
- **CI/CD Pipeline**: Auto-build and deploy on main branch commits
- **Optimized Bundle**: 456KB production build with tree-shaking

### Future Enhancements
- **Azure Functions**: Planned integration for automated course updates
- **SharePoint API**: Tuesday afternoon sync for course data updates
- **Dynamic Content**: JSON updates without rebuild requirements

## Course Data

The application currently contains 48+ technical courses covering:
- **C++ Programming**: Advanced topics, debugging, optimization
- **Development Tools**: Build systems, testing, debugging tools
- **Architecture**: System design, patterns, best practices
- **DevOps**: CI/CD, deployment, monitoring

Course data is stored in `src/data/courses.json` with the following structure:
```typescript
interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string; // SharePoint hosted videos
  category: string;
  duration: string;
  tags: string[];
  date: string;
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Maintain TypeScript strict mode compliance
- Follow Material-UI design patterns
- Ensure responsive design across devices
- Test builds locally before pushing
- Keep bundle size optimized

## Recent Changes (v1.0.0)

### 🗑️ Removed Dependencies
- Removed Express.js backend (74 packages, 19% reduction)
- Eliminated database dependencies (Drizzle ORM, Zod)
- Removed unnecessary UI libraries (shadcn/ui)
- Cleaned up development dependencies

### 🏗️ Architecture Simplification
- Migrated from full-stack to static web app
- Consolidated to Material-UI only for consistency
- Simplified TypeScript interfaces
- Reorganized directory structure

### ⚡ Performance Improvements
- Reduced bundle size by 15% (456KB total)
- Optimized Vite configuration with aliases
- Eliminated server-side dependencies
- Improved build times and deployment speed

## License

This project is licensed under the MIT License.
