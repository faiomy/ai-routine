# AI Routine Project

## Overview
A React application built with Vite, configured for the Replit environment.

## Current State
- **Framework**: React 19.1.1 with Vite 7.1.11
- **Status**: Development server running on port 5000
- **Build Tool**: Vite with React plugin
- **Package Manager**: npm

## Project Architecture
- **Frontend**: React SPA (Single Page Application)
- **Dev Server**: Vite dev server configured for Replit proxy
  - Host: 0.0.0.0
  - Port: 5000
  - Allowed hosts: enabled for Replit iframe proxy

## Project Structure
```
/src
  /assets - Static assets (images, etc.)
  App.jsx - Main application component
  App.css - App styles
  main.jsx - Application entry point
  index.css - Global styles
/public - Public static files
index.html - HTML template
vite.config.js - Vite configuration
package.json - Dependencies and scripts
```

## Development
- Run `npm run dev` to start the development server
- Run `npm run build` to build for production
- Run `npm run preview` to preview production build

## Deployment
- **Type**: Autoscale (stateless web app)
- **Build**: `npm run build` - Compiles React app to static files
- **Run**: `vite preview` - Serves the production build
- Ready to deploy via Replit's publish button

## Recent Changes
- 2025-10-22: Initial import from GitHub
- 2025-10-22: Created React + Vite project template
- 2025-10-22: Configured Vite for Replit environment (0.0.0.0:5000, allowed hosts)
- 2025-10-22: Set up development workflow
- 2025-10-22: Configured deployment settings for autoscale
