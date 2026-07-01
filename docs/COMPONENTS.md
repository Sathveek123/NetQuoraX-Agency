# Component Documentation

This document details all reusable components in the NetQuoraX website.

## Layout Components

### ClientLayout
**Location**: `src/components/layout/ClientLayout.tsx`

Wraps the entire application with client-side logic. Handles splash screen state and global client-side effects.

**Usage**:
```tsx
<ClientLayout>
  {children}
</ClientLayout>
```

## Section Components

### Navbar
**Location**: `src/components/sections/Navbar.tsx`

Responsive navigation bar with mobile menu support.

**Features**:
- Transparent to solid background on scroll
- Mobile hamburger menu
- Active link highlighting
- Smooth scroll to sections

**Props**: None (uses internal state)

### Footer
**Location**: `src/components/sections/Footer.tsx`

Multi-column footer with navigation links and social icons.

**Features**:
- Quick navigation links
- Social media links
- Copyright information

### Hero
**Location**: `src/components/sections/Hero.tsx`

Homepage hero section with animated text and CTA buttons.

**Features**:
- Animated headline with stagger effect
- Subheadline fade-in
- CTA buttons with hover effects
- Background gradient

### Services
**Location**: `src/components/sections/Services.tsx`

Services overview section with tabbed categories.

**Features**:
- 4 category tabs (Digital & Product, AI & Automation, Trading Systems, Growth & Marketing)
- Animated tab switching with layoutId
- Service card grid per category
- Hover effects on cards

### Industries
**Location**: `src/components/sections/Industries.tsx`

Industries showcase with tabbed panels.

**Features**:
- 8 industry tabs
- Industry-specific accent colors
- Capability lists
- Smooth transitions between tabs

### Portfolio
**Location**: `src/components/sections/Portfolio.tsx`

Portfolio showcase with project cards.

**Features**:
- Grid of project cards
- Hover metrics reveal
- Gradient backgrounds
- Links to case studies

### Process
**Location**: `src/components/sections/Process.tsx`

Process timeline showing development pipeline.

**Features**:
- 4-step timeline
- Animated progress indicators
- Step descriptions
- Visual timeline connector

### Stats
**Location**: `src/components/sections/Stats.tsx`

Animated statistics counter section.

**Features**:
- Count-up animation on scroll
- Multiple stat items
- Icon indicators
- Responsive grid

### Testimonials
**Location**: `src/components/sections/Testimonials.tsx`

Testimonials carousel with client quotes.

**Features**:
- Multiple testimonial cards
- Avatar images
- Client names and roles
- Company logos

### FAQ
**Location**: `src/components/sections/FAQ.tsx`

FAQ accordion section.

**Features**:
- Expandable/collapsible questions
- Smooth height animations
- Multiple questions openable
- Clean typography

### FinalCTA
**Location**: `src/components/sections/FinalCTA.tsx`

Final call-to-action section.

**Features**:
- Headline and description
- Primary and secondary CTAs
- Centered layout

### BookingForm
**Location**: `src/components/sections/BookingForm.tsx`

Booking form for scheduling calls.

**Features**:
- Form fields for name, email, company
- Project type selection
- Date/time picker
- Form validation

### AutomationFlow
**Location**: `src/components/sections/AutomationFlow.tsx`

Visual representation of automation workflows.

**Features**:
- Flow diagram visualization
- Animated connections
- Step indicators
- Responsive layout

### TradingShowcase
**Location**: `src/components/sections/TradingShowcase.tsx`

Trading systems showcase section.

**Features**:
- Trading interface mockup
- Chart visualization
- Performance metrics
- Technical indicators display

### TrustedBy
**Location**: `src/components/sections/TrustedBy.tsx`

"Trusted by" section with company logos.

**Features**:
- Logo grid/marquee
- Grayscale to color on hover
- Responsive layout

### WhyUs
**Location**: `src/components/sections/WhyUs.tsx`

"Why Choose Us" section with alternating layout.

**Features**:
- Alternating left/right content
- Icon indicators
- Feature descriptions
- Responsive grid

## Splash Components

### SplashScreen
**Location**: `src/components/splash/SplashScreen.tsx`

Initial splash screen animation.

**Features**:
- Plays only on first visit
- Staggered text reveal
- Logo animation
- Smooth fade-out

**Usage**: Controlled via ClientLayout state

## UI Components

### ServiceCard
**Location**: `src/components/ui/ServiceCard.tsx`

Reusable service card component.

**Props**:
```tsx
interface ServiceCardProps {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  included?: string[];
  price?: string;
}
```

**Features**:
- Icon display
- Title and description
- Optional "What's Included" checklist
- Optional pricing tag
- Hover lift effect

### TiltCard
**Location**: `src/components/ui/TiltCard.tsx`

3D tilt effect card component.

**Props**:
```tsx
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}
```

**Features**:
- 3D perspective tilt on mouse move
- Smooth transitions
- Configurable tilt intensity

### RepelCard
**Location**: `src/components/ui/RepelCard.tsx`

Magnetic repel effect card.

**Props**:
```tsx
interface RepelCardProps {
  children: React.ReactNode;
  className?: string;
}
```

**Features**:
- Magnetic repel effect on hover
- Smooth animations
- Mouse tracking

### Magnetic
**Location**: `src/components/ui/Magnetic.tsx`

Magnetic button effect component.

**Props**:
```tsx
interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}
```

**Features**:
- Button follows cursor magnetically
- Configurable magnetic strength
- Smooth spring animations

### MagneticWrap
**Location**: `src/components/ui/MagneticWrap.tsx`

Wrapper for magnetic effects.

**Props**:
```tsx
interface MagneticWrapProps {
  children: React.ReactNode;
  className?: string;
}
```

**Features**:
- Applies magnetic effect to children
- Performance optimized

### Marquee
**Location**: `src/components/ui/Marquee.tsx`

Infinite scrolling marquee.

**Props**:
```tsx
interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}
```

**Features**:
- Infinite scroll animation
- Configurable speed and direction
- Pause on hover

### MobileMenu
**Location**: `src/components/ui/MobileMenu.tsx`

Mobile navigation menu.

**Props**:
```tsx
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Features**:
- Slide-in animation
- Navigation links
- Close button
- Backdrop overlay

### HamburgerIcon
**Location**: `src/components/ui/HamburgerIcon.tsx`

Animated hamburger menu icon.

**Props**:
```tsx
interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}
```

**Features**:
- Animated transform to X
- Smooth transitions
- Accessible

## Animation Patterns

### Framer Motion Usage

Most components use Framer Motion for animations:

```tsx
import { motion } from 'framer-motion';

// Fade in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="show"
>

// Layout animation
<motion.div layout>
```

### LayoutId Pattern

Used for smooth transitions between similar elements:

```tsx
<motion.div layoutId="activeTab" />
```

## Responsive Design

All components follow mobile-first responsive design:

```tsx
// Mobile-first approach
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Responsive typography
className="text-[24px] md:text-[32px] lg:text-[40px]"

// Responsive spacing
className="p-4 md:p-6 lg:p-8"
```

## Accessibility

Components follow accessibility best practices:

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus states
- Color contrast compliance

## Performance Considerations

- Lazy loading for images
- Code splitting via dynamic imports
- Optimized animations (use transform/opacity)
- Debounced event handlers
- Memoized components where appropriate
