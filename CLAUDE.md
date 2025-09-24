# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Kurtis Taylor built with vanilla HTML5 and Tailwind CSS. The site consists of two main pages with a clean, minimal design featuring animated wave text and responsive layouts.

## Architecture

- **Static HTML site** - No build process required, uses CDN-hosted Tailwind CSS
- **Two-page structure**: 
  - `index.html` - Home page with profile photo, animated name, and social links
  - `about.html` - About page with biographical content
- **Resources directory**: `res/` contains images, documents (resume, research PDF), and favicon
- **Custom styling**: Embedded CSS for wave text animation with responsive breakpoints

## Development Commands

### Local Development
```bash
# Start local development server
./run.sh
# OR manually:
python3 -m http.server 8000
```

### Deployment
```bash
# Deploy to production server
./deploy.sh

# Local copy to server directory (requires sudo)
./copy.sh
```

## Styling Architecture

- **Tailwind CSS**: Loaded via CDN with custom configuration for Lato font family
- **Custom animations**: CSS keyframes for wave text effect with staggered delays across 70 child elements
- **Responsive design**: Uses Tailwind's responsive prefixes (sm:, md:, lg:) for breakpoint-specific styling
- **Color scheme**: Blue gradient background with consistent gray/blue accent colors

## Content Structure

- Social links point to real profiles (Twitter, GitHub, LinkedIn) and resume PDF
- Profile image located at `res/img/kurt.jpg` 
- Consistent navigation between pages with active state styling
- Wave text animation applied to greeting on home page

## File Organization

```
/
├── index.html          # Home page with animated greeting
├── about.html          # About page with bio content  
├── res/
│   ├── img/kurt.jpg   # Profile photo
│   ├── docs/          # Resume and research PDFs
│   └── favicon.ico    # Site icon
└── *.sh               # Deployment scripts
```