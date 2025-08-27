# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CSS Visual Learner is an interactive educational tool built with vanilla HTML, CSS, and JavaScript. It provides real-time visual feedback for learning CSS concepts through interactive examples and visualizers.

## Development Setup

This is a static website project that requires no build process or dependencies. Simply open `src/index.html` in a browser to run the application locally.

**No package.json, build commands, or test scripts exist** - this is a pure client-side project.

## Architecture

### Core Structure
- **Source Directory**: `/src/` - All source code and assets
- **Entry Point**: `src/index.html` - Main landing page with interactive boxes
- **Navigation**: `src/sidebar.html` - Shared navigation loaded dynamically
- **Visualizers**: Individual HTML files in `src/visualizers/` directory for each CSS concept
- **Scripts Directory**: `src/scripts/` - JavaScript modules for each visualizer
- **Styles Directory**: `src/styles/` - CSS files corresponding to each visualizer
- **Assets Directory**: `src/assets/` - Images and media files

### Key JavaScript Utilities
- **`src/scripts/main.js`**: Core utilities including:
  - `getBaseURL()` - Handles GitHub Pages vs local development paths
  - `loadSidebar()` - Dynamically loads navigation
  - `toggleSidebar()` - Mobile menu functionality
  - `getRandomColor()`, `invertColor()` - Color manipulation utilities

### Visualizer Pattern
Each visualizer follows a consistent pattern:
1. HTML file in `src/visualizers/` directory (e.g., `src/visualizers/flex-box.html`) containing the interactive elements
2. Corresponding JavaScript file (e.g., `src/scripts/flexbox.js`) with the logic
3. Matching CSS file (e.g., `src/styles/flexbox.css`) with specific styles
4. Entry in `src/sidebar.html` for navigation
5. Server-side redirects handled by Caddyfile for backward compatibility

### Available Visualizers
- **Animations** (`src/visualizers/animations.html`) - CSS animations and keyframes
- **Color** (`src/visualizers/color.html`) - Color manipulation and gradients  
- **Flexbox** (`src/visualizers/flex-box.html`, `src/visualizers/flex-justify-content.html`) - Flexbox properties
- **Grid** (`src/visualizers/grid.html`, `src/visualizers/grid-extended.html`) - CSS Grid layouts
- **Box Model** (`src/visualizers/css-box.html`) - CSS box model visualization
- **Nth-Child** (`src/visualizers/nth-child.html`) - CSS nth-child selectors
- **Selector Playground** (`src/visualizers/selector-playground.html`) - CSS selector testing
- **Z-Index** (`src/visualizers/z-index.html`) - Z-index stacking contexts

### Deployment Configuration
- **Local Development**: Open `src/index.html` directly in browser
- **Server Deployment**: Use provided Caddyfile configurations for proper routing and redirects
- The `getBaseURL()` function in `src/scripts/main.js` automatically adjusts paths based on hostname

## Adding New Visualizers

1. Create HTML file in `src/visualizers/` directory with visualizer content
2. Create corresponding JavaScript file in `src/scripts/`
3. Create corresponding CSS file in `src/styles/`
4. Add navigation link to `src/sidebar.html` with `visualizers/` prefix
5. Update Caddyfile with redirect rules for backward compatibility
6. Follow the established naming convention (kebab-case)