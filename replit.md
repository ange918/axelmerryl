# Axel Merryl Artist Portfolio

## Overview

This is a modern, visually striking portfolio website for French artist Axel Merryl, focusing on music and humor content. The site features a dark, cinematic design with gold accents, full-width hero sections, and smooth scroll animations. Built with vanilla JavaScript and static HTML, it emphasizes visual storytelling through images, videos, and dynamic content sections.

The project creates an immersive experience with parallax effects, fade-in animations, and comprehensive mobile responsive design. Key sections include a hero landing, biography, music/clips gallery, testimonials slider, visual gallery with descriptive captions, upcoming events, and footer with social links.

## Recent Changes (November 2025)

- **Homepage Latest Release Section**: Replaced "Musique & Clips" section with "Dernière Sortie" featuring 4 latest video clips (KIMI, TITULAIRE, JULIE, CÉLIBATAIRE) with view counts, badges (Nouveau, Tendance, Populaire, Récent), and direct YouTube links.
- **Infinite Scroll Gallery Carousel**: Transformed static 6-image gallery into infinite horizontal scrolling carousel with 50 images, CSS keyframe animation (120s duration), gradient edge masks, hover-to-pause functionality, and seamless loop via JavaScript cloning.
- **Enhanced Testimonials**: Harmonized testimonial card heights (min-height: 350px), centered all text and star ratings, added hover effects with scale transformation and enhanced box-shadow for better visual feedback.
- **Trophies Restructure (About Page)**: Consolidated individual trophy cards into 3 main award categories (BÉNIN SHOWBIZ AWARDS, ÀRÀWÒ AMBASSADEUR AWARDS, PRIMUD) with featured images, descriptions, and "En savoir plus" buttons.
- **Trophy Modal System**: Implemented reusable modal component with dynamic content population, keyboard navigation (Escape key), backdrop click-to-close, and smooth fade-in/slide-in animations displaying trophy categories for each award.
- **Album Feature Section (Music Page)**: Replaced "Albums & EPs" multi-card layout with single featured album section for TEMPÉRATURE, including large cover art, detailed description, metadata (12 tracks, 48:30 duration), and primary CTA button.
- **TEMPÉRATURE Album Playlist Page**: Created new dedicated page (temperature-album.html) with Spotify-style interface featuring hero section with album cover, 12-track playlist with mini thumbnails, play buttons, durations, artist credits, and back-to-music navigation.
- **CSS Enhancements**: Added 800+ lines of new CSS including carousel animations, modal overlays, album playlist layouts, trophy cards, and mobile responsive breakpoints for all new sections.
- **JavaScript Extensions**: Extended script.js with trophy modal handlers, carousel cloning logic, enhanced event listeners for all new interactive elements.

## Recent Changes (October 2025)

- **PHP to HTML Migration**: All PHP files (index.php, about.php, music.php, contact.php) converted to static HTML. Header and footer content integrated directly into each page.
- **Server Migration**: Switched from PHP built-in server to Python HTTP server (port 5000).
- **Mobile Responsive Enhancements**: Significantly reduced font sizes, button sizes, and title sizes for screens under 768px to improve mobile UX.
- **Hero Section Update**: Removed "Musique" and "Contact" buttons, replaced "À Propos" with "Découvrez-moi" button linking to about.html.
- **Gallery Captions**: Added descriptive text overlays to all 6 gallery cards that appear on hover.
- **Testimonials Section**: New auto-sliding testimonials carousel with 12 French reviews, navigation arrows, and 5-second auto-rotation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- Static HTML files with integrated headers/footers
- Python HTTP server for local development
- Custom CSS with CSS variables for theming
- Montserrat and Playfair Display font families

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
- Auto-sliding testimonials with 5-second interval

**Responsive Design:**
- Mobile-first approach with 768px breakpoint
- Significantly reduced text sizes on mobile:
  - Hero title: 2.5rem → 1.8rem
  - Hero subtitle: 1.2rem → 0.9rem
  - Section titles: 3rem → 1.8rem
  - Body text: proportionally scaled
  - Buttons: 1.2rem → 1rem
- CSS reset with box-sizing: border-box
- Overflow-x hidden to prevent horizontal scroll issues
- Flexible padding using rem units
- Hamburger menu with smooth animation on mobile

### Component Structure

**Implemented Sections:**
1. **Hero Section** - Full-screen visual with overlay, title "AXEL MERRYL", subtitle "HUMOUR & MUSIQUE", and single "DÉCOUVREZ-MOI" CTA button
2. **Biography Section** - Side-by-side image/text layout with impactful quotes about the artist
3. **Music/Clips Section** - Grid-based gallery (4 albums) with hover effects and play icons
4. **Gallery Section** - 6-card image gallery with descriptive captions on hover:
   - "Sur scène lors d'un spectacle d'humour"
   - "Moment de concentration avant le show"
   - "Interaction avec le public"
   - "Performance live au festival"
   - "Session d'enregistrement en studio"
   - "Répétitions musicales"
5. **Testimonials Section** - Auto-sliding carousel with 12 French testimonials, 5-star ratings, navigation arrows
6. **Events Section** - Horizontal card layout for upcoming concerts with date, location, and booking CTAs
7. **Contact Section** - Form with name, email, message fields and submit button
8. **Footer** - Social media links, contact/booking information, copyright

**Interaction Features:**
- Scroll-triggered animations (fade-in, slide-in)
- Parallax background effects
- Hover states with subtle zoom/overlay transitions on gallery cards
- Gallery caption overlays with smooth transitions
- Testimonial auto-rotation with manual navigation
- Smooth section transitions
- Lightbox functionality for gallery images
- Mobile burger menu with hamburger-to-X animation

### JavaScript Architecture

**Core Patterns:**
- Event-driven architecture using `DOMContentLoaded` initialization
- Observer pattern for scroll animations (IntersectionObserver)
- Event delegation for smooth scrolling links
- Passive scroll listening for parallax effects
- Interval-based testimonial rotation (5000ms)

**Features Implemented:**
- Burger menu toggle with class-based animation
- Smooth scroll to sections
- Parallax hero background
- Fade-in animations on scroll
- Gallery lightbox with keyboard navigation (arrow keys, escape)
- Testimonial slider with auto-advance and manual controls
- Null safety checks for elements that may not exist on all pages

**Performance Optimizations:**
- Single scroll event listener with minimal DOM queries
- Intersection Observer to avoid constant scroll calculations
- Class-based animation triggering (GPU-accelerated CSS transitions)
- Debouncing approach via rootMargin offset
- Conditional event listener attachment (null checks)

**Code Organization:**
- Single-file approach for simplicity (js/script.js)
- Modular sections within main initialization function
- Reusable observer for multiple fade-in elements
- Selector-based targeting for extensibility

## File Structure

```
/
├── index.html          # Home page with hero, gallery, testimonials, events
├── about.html          # Biography page
├── music.html          # Music/albums page
├── contact.html        # Contact form page
├── css/
│   └── style.css       # Complete stylesheet with responsive design
├── js/
│   └── script.js       # All interactive functionality
└── attached_assets/
    └── stock_images/   # Gallery and background images
```

## External Dependencies

### Third-Party Services

**Fonts:**
- Google Fonts: Montserrat and Playfair Display font families

**Social Media Links:**
- Instagram, YouTube, Spotify integration in footer

### Browser APIs

- **Intersection Observer API** - Progressive enhancement for scroll animations
- **Scroll Events** - Parallax effects and scroll tracking
- **CSS Custom Properties** - Dynamic theming support
- **Smooth Scroll** - Native CSS `scroll-behavior: smooth`
- **Keyboard Events** - Navigation for lightbox (arrows, escape)

### Asset Requirements

- High-resolution hero background images
- Artist photography for biography and gallery sections
- Album cover images (4 albums in music section)
- Gallery images (6 images with descriptive captions)
- Event promotional images
- Social media icons/logos

## Development Server

- **Server**: Python HTTP server on port 5000
- **Command**: `python3 -m http.server 5000`
- **Access**: http://localhost:5000 or via Replit webview

## Notes

This is a fully static frontend application with no backend, database, or build tools. All content is hardcoded in HTML. The site is ready for:
- Deployment as a static site
- Integration with a CMS for dynamic content
- Addition of backend services (contact form submission, event management)
- Performance optimizations (image compression, lazy loading, CDN integration)

### New Files Added (November 2025)

- **temperature-album.html** - Dedicated album playlist page for TEMPÉRATURE with Spotify-style track listing, hero section, and full navigation
- **Enhanced CSS (800+ lines)** - New styles for carousel, modal, album sections, and responsive breakpoints
- **Extended JavaScript** - Modal handlers, carousel cloning, and interactive element listeners

