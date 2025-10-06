# Axel Merryl Artist Portfolio

## Overview

This is a modern, visually striking portfolio website for artist Axel Merryl, focusing on music and humor content. The site features a dark, cinematic design with gold accents, full-width hero sections, and smooth scroll animations. Built as a single-page application with vanilla JavaScript, it emphasizes visual storytelling through images, videos, and dynamic content sections.

The project creates an immersive experience with parallax effects, fade-in animations, and responsive design optimized for all devices. Key sections include a hero landing, biography, music/clips gallery, upcoming events, visual gallery, and footer with social links.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- Custom CSS with CSS variables for theming
- Montserrat font family for modern typography

**Design System:**
- CSS custom properties (`:root` variables) for consistent theming
- Dark color palette (black #0a0a0a, anthracite #1a1a1a) with bright accents (gold #d4af37, yellow #f4d03f, warm white #f5f5dc)
- Smooth transitions using cubic-bezier easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Responsive container system with max-width constraints (1200px)

**Layout Strategy:**
- Full-viewport hero section (100vh) with absolute positioning for background images
- Section-based vertical scroll structure with distinct visual separations
- Two container types: `.container` (max-width 1200px) and `.container-full` (full width with padding)
- Flexbox for centering and alignment

**Animation & Interaction Patterns:**
- Intersection Observer API for scroll-triggered fade-in animations (threshold: 0.1, rootMargin: -100px)
- Parallax scrolling effect (50% scroll speed) on background elements
- Smooth scroll behavior for anchor links
- Lazy class addition pattern (`.visible` class added when elements enter viewport)

**Responsive Design:**
- Mobile-first approach assumed
- CSS reset with box-sizing: border-box
- Overflow-x hidden to prevent horizontal scroll issues
- Flexible padding using rem units (2rem standard)

### Component Structure

**Planned Sections:**
1. **Hero Section** - Full-screen visual with overlay, title, subtitle, and CTA button
2. **Biography Section** - Side-by-side image/text layout with impactful quotes
3. **Music/Clips Section** - Grid-based gallery (3-4 videos) with hover effects and play icons
4. **Events Section** - Horizontal card layout for concerts with date, location, and booking CTA
5. **Visual Gallery** - Masonry/grid image gallery with lightbox functionality
6. **Footer** - Social media links, contact/booking information, copyright

**Interaction Features:**
- Scroll-triggered animations (fade-in, slide-in)
- Parallax background effects
- Hover states with subtle zoom/overlay transitions
- Smooth section transitions
- Image lazy loading (planned optimization)

### JavaScript Architecture

**Core Patterns:**
- Event-driven architecture using `DOMContentLoaded` initialization
- Observer pattern for scroll animations (IntersectionObserver)
- Event delegation for smooth scrolling links
- Passive scroll listening for parallax effects

**Performance Optimizations:**
- Single scroll event listener with minimal DOM queries
- Intersection Observer to avoid constant scroll calculations
- Class-based animation triggering (GPU-accelerated CSS transitions)
- Debouncing approach via rootMargin offset

**Code Organization:**
- Single-file approach for simplicity
- Modular sections within main initialization function
- Reusable observer for multiple fade-in elements
- Selector-based targeting for extensibility

## External Dependencies

### Third-Party Services

**Fonts:**
- Google Fonts: Montserrat font family (referenced but not yet loaded in HTML)

**Planned Integrations:**
- Video embedding service (YouTube/Vimeo) for music clips section
- Social media platform links (Instagram, YouTube, Spotify, etc.)
- Event booking/ticketing platform integration
- Image hosting/CDN for optimized visual assets
- Potential lightbox library for gallery (or custom implementation)

### Browser APIs

- **Intersection Observer API** - Progressive enhancement for scroll animations
- **Scroll Events** - Parallax effects and scroll tracking
- **CSS Custom Properties** - Dynamic theming support
- **Smooth Scroll** - Native CSS `scroll-behavior: smooth`

### Asset Requirements

- High-resolution hero background images/videos
- Artist photography for biography and gallery sections
- Music video thumbnails and embeds
- Event promotional images
- Social media icons/logos
- Favicon and metadata images

**Note:** No database, backend, or build tools currently configured. This is a static frontend application ready for expansion with additional interactivity, CMS integration, or dynamic content loading.