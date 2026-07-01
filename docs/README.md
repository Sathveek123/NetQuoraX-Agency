# NetQuoraX Agency Website - Documentation

## Overview

NetQuoraX is a full-stack Next.js agency website showcasing services, solutions, industries, portfolio, pricing, about, and contact pages. Built with modern web technologies for optimal performance and user experience.

## Tech Stack

- **Framework**: Next.js 16.2.9 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Manrope (Google Fonts)

## Features

- 7 fully responsive pages (Home, Services, Solutions, Industries, Portfolio, Pricing, About, Contact)
- Dynamic case study pages with individual routes
- Mobile-first responsive design
- Smooth animations and transitions
- Form validation with real-time feedback
- Filterable portfolio grid
- Interactive pricing cards
- Dark mode ready (via browser extension support)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page with story, values, team
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── industries/
│   │   └── page.tsx          # 8 industry deep-dive sections
│   ├── portfolio/
│   │   ├── page.tsx          # Portfolio grid with filters
│   │   └── [slug]/
│   │       └── page.tsx      # Individual case study pages
│   ├── pricing/
│   │   └── page.tsx          # Pricing tiers with FAQ
│   ├── services/
│   │   └── page.tsx          # 4 service categories
│   ├── solutions/
│   │   └── page.tsx          # Problem/solution navigation
│   ├── layout.tsx            # Root layout with fonts
│   ├── page.tsx              # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── layout/
│   │   └── ClientLayout.tsx  # Client-side layout wrapper
│   ├── sections/
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Hero.tsx          # Homepage hero
│   │   ├── Services.tsx      # Homepage services section
│   │   ├── Industries.tsx   # Homepage industries section
│   │   ├── Portfolio.tsx    # Homepage portfolio section
│   │   ├── Process.tsx      # Process timeline
│   │   ├── Stats.tsx         # Animated statistics
│   │   ├── Testimonials.tsx  # Testimonials carousel
│   │   ├── FAQ.tsx          # FAQ accordion
│   │   ├── FinalCTA.tsx     # Final call-to-action
│   │   ├── BookingForm.tsx  # Booking form
│   │   ├── AutomationFlow.tsx # Automation flow visualization
│   │   ├── TradingShowcase.tsx # Trading systems showcase
│   │   ├── TrustedBy.tsx     # Trusted by section
│   │   └── WhyUs.tsx        # Why us section
│   ├── splash/
│   │   └── SplashScreen.tsx  # Splash screen animation
│   └── ui/
│       ├── ServiceCard.tsx  # Service card component
│       ├── TiltCard.tsx     # 3D tilt card
│       ├── RepelCard.tsx    # Magnetic repel card
│       ├── Magnetic.tsx     # Magnetic button effect
│       ├── MagneticWrap.tsx # Magnetic wrapper
│       ├── Marquee.tsx      # Infinite marquee
│       ├── MobileMenu.tsx   # Mobile navigation menu
│       └── HamburgerIcon.tsx # Hamburger menu icon
public/                      # Static assets
```

## Pages Documentation

### Homepage (`/`)
- Hero section with animated text
- Services overview with tabs
- Industries showcase
- Portfolio highlights
- Process timeline
- Statistics with animated counters
- Testimonials
- FAQ accordion
- Final CTA

### Services (`/services`)
- 4 service categories (Digital & Product, AI & Automation, Trading Systems, Growth & Marketing)
- Expanded service cards with "What's Included" checklists
- Pricing indicators
- Condensed process section
- Bottom CTA

### Solutions (`/solutions`)
- Problem/solution outcome-based navigation
- 6 problem scenarios with linked solutions
- Alternating layout for visual interest
- Service tags linking to services page

### Industries (`/industries`)
- 8 industry deep-dive sections (Startups, Healthcare, Education, Finance, Real Estate, Ecommerce, Hospitality, Logistics)
- Custom mockup visuals for each industry
- Challenge and capability breakdown
- Alternating left/right layout

### Portfolio (`/portfolio`)
- Filterable project grid (All, Websites, Apps, AI & Automation, Trading Systems, Marketing)
- Animated filter transitions
- Hover metrics reveal
- Links to individual case studies

### Portfolio Case Study (`/portfolio/[slug]`)
- Project hero with visual
- Brief section (client needs)
- Approach section (what was built)
- Tech stack display
- Results metrics with animated counters
- Client testimonials
- Next project navigation

### Pricing (`/pricing`)
- 4 pricing tiers (Project-Based, Retainer, Trading Systems, Enterprise)
- Recommended tier highlighting
- Feature checklists
- FAQ section specific to pricing
- Bottom CTA

### About (`/about`)
- Origin/mission story
- 4 core principles
- Founder/team section
- Social links
- Bottom CTA

### Contact (`/contact`)
- Split-screen layout (form + alternatives)
- Validated contact form with real-time error feedback
- Project type and budget dropdowns
- Booking widget integration
- Direct contact information
- Mini FAQ for getting started
- Success state after submission

## Component Documentation

### Navbar
- Responsive navigation with mobile menu
- Transparent to solid scroll effect
- Active link highlighting

### Footer
- Multi-column layout
- Social links
- Quick navigation links

### ServiceCard
- Reusable service card component
- Icon, title, description
- Hover effects

### SplashScreen
- Initial load animation
- Plays only on first visit
- Staggered text reveal

## Styling

### Color Palette
- **Primary**: #2563EB (Blue)
- **Secondary**: #06B6D4 (Cyan)
- **Background**: #F8FAFC (Slate-50)
- **Text**: #0F172A (Slate-900)
- **Accent**: Various industry-specific colors

### Typography
- **Headings**: Manrope font
- **Body**: Inter font
- Responsive font sizes using Tailwind classes

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## Environment Variables

No environment variables are currently required for basic functionality. For production, you may want to add:

- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_CALENDLY_URL` - Calendly booking URL
- Contact form endpoint (if using external form service)

## Performance

- Next.js Image optimization
- Lazy loading for images
- Code splitting via App Router
- Tailwind CSS purging for minimal CSS
- Framer Motion for performant animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Proprietary - All rights reserved to NetQuoraX

## Contact

For questions or support, contact hello@netquorax.com
