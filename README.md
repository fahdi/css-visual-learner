# CSS Visual Learner

CSS Visual Learner is an interactive learning tool designed to help both beginners and advanced users understand the impact of various CSS properties in real-time. This tool provides a hands-on approach for experimenting with CSS, making it easier to see how changes in CSS affect web layouts and designs.

## Features

- **Live CSS Rule Application:** Instantly see how different CSS rules change the appearance of elements.
- **Interactive Visualizers:** Explore various CSS properties like Flexbox, Grid, and the Box Model through interactive examples.
- **Responsive Design:** A mobile-friendly interface that adapts to different screen sizes for a seamless learning experience on any device.
- **Real-Time Feedback:** See immediate changes and effects as you interact with the visualizers.
- **Extendable Platform:** Easily add more visualizers or modify existing ones thanks to a modular and scalable code structure.

## Getting Started

### Prerequisites

- A modern web browser like Chrome, Firefox, or Safari.
- Basic understanding of HTML and CSS.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/fahdi/css-visual-learner.git
cd css-visual-learner
```

**For Local Development:**
Open `src/index.html` in your browser to start using the tool.

**For Server Deployment:**
Use the provided Caddyfile configurations for proper routing and redirects.

## How to Use

1. Explore different CSS properties using the interactive visualizers.
2. Use the responsive sidebar for easy navigation between different CSS concepts.
3. Modify the CSS rules directly or use the controls provided in the visualizers to see the changes applied in real-time.

## Server Deployment

This project includes two Caddyfile configurations for different deployment scenarios:

### Standalone Deployment (`Caddyfile`)
For deploying as a standalone site:
- Handles redirects from old URLs to new structure
- Serves files directly from the project directory
- Includes performance optimizations and security headers

### Subfolder Deployment (`Caddyfile.subfolder`)
For deploying as a subfolder on an existing site (e.g., `fahdmurtaza.com/css-visual-learner/`):
- Template configuration for integration into your main Caddyfile
- Handles path-based routing with `handle_path`
- Maintains proper redirects for backward compatibility

## Project Structure

All source code is organized in the `src/` directory:
- `src/index.html` - Main entry point
- `src/visualizers/` - Interactive CSS learning modules
- `src/scripts/` - JavaScript functionality
- `src/styles/` - CSS stylesheets
- `src/assets/` - Images and media files

## Roadmap & Future Plans

CSS Visual Learner is continuously evolving! See our comprehensive [TODO.md](TODO.md) for detailed roadmap including:

- 🎯 **Phase 1 (Q1 2025)**: Performance optimization, mobile experience, accessibility improvements
- 🎨 **Phase 2 (Q2 2025)**: Progressive learning paths, advanced visualizers, TypeScript migration  
- 🌐 **Phase 3 (Q3 2025)**: Community features, user-generated content, platform integrations
- 🔧 **Phase 4 (Q4 2025)**: AI-powered features, cutting-edge CSS support, enterprise tools

### Immediate Priorities
- [ ] Mobile touch interactions and responsive improvements
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] New visualizers: CSS Variables, Container Queries, Subgrid
- [ ] Real-time code editor with syntax highlighting
- [ ] Performance optimization and offline support

## Developer Information

For detailed development guidelines and architecture information, see [CLAUDE.md](CLAUDE.md).

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Fahdi - [info@fahdmurtaza.com](mailto:info@fahdmurtaza.com)

Project Link: [https://github.com/fahdi/css-visual-learner](https://github.com/fahdi/css-visual-learner)

