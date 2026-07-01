# Pages Documentation

Complete documentation for all pages in the NetQuoraX website.

## Homepage (`/`)

**Location**: `src/app/page.tsx`

**Purpose**: Main landing page showcasing all services and capabilities.

**Sections**:
1. **Hero** - Animated headline, subheadline, CTAs
2. **Trusted By** - Company logos marquee
3. **Services** - Tabbed service categories overview
4. **Industries** - Industry showcase with tabs
5. **Why Us** - Value proposition with alternating layout
6. **Portfolio** - Featured projects grid
7. **Process** - 4-step development pipeline
8. **Stats** - Animated statistics counters
9. **Testimonials** - Client testimonials carousel
10. **FAQ** - Expandable FAQ accordion
11. **Final CTA** - Final call-to-action

**Key Features**:
- Splash screen on first visit
- Smooth scroll animations
- Interactive tabs with layout transitions
- Animated counters on scroll

**Navigation Links**:
- Services → `/services`
- Industries → `/industries`
- Portfolio → `/portfolio`
- Contact → `/contact`

---

## Services Page (`/services`)

**Location**: `src/app/services/page.tsx`

**Purpose**: Detailed breakdown of all services offered.

**Sections**:
1. **Hero** - Breadcrumb, headline, subheadline
2. **Service Categories** (4 sections):
   - Digital & Product (Websites, SaaS, E-commerce)
   - AI & Automation (Workflow, AI Agents, WhatsApp)
   - Trading Systems (Pine Script, Webhook Execution)
   - Growth & Marketing (Ads, CRO)
3. **Process Snippet** - Condensed 4-step process
4. **Bottom CTA** - Book scoping call

**Service Card Details**:
- Icon and title
- 2-3 line description
- "What's Included" checklist (3-4 items)
- Pricing indicator ("Starting from ₹X" or "Get a quote")
- Link to contact page

**Layout**:
- Alternating background tints (F8FAFC vs FFFFFF)
- Grid of service cards per category
- Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop

---

## Solutions Page (`/solutions`)

**Location**: `src/app/solutions/page.tsx`

**Purpose**: Outcome-based navigation (problem → solution).

**Sections**:
1. **Hero** - Headline, subheadline
2. **Solution Cards** (6 items):
   - Slow lead follow-up → AI Chatbots + WhatsApp
   - Manual data entry → Workflow Automation
   - Poor website conversion → Redesign + CRO
   - Manual trading execution → Trading Bots
   - Low qualified traffic → Ads + Lead Gen
   - Disconnected systems → CRM Integration
3. **Bottom CTA** - "Don't see your problem listed?"

**Card Structure**:
- Left: Problem statement (quoted, italic)
- Right: Solution with linked service tags
- "See how this works" link to portfolio

**Layout**:
- Full-width row cards
- Alternating left/right layout
- Mobile: stacked vertically

---

## Industries Page (`/industries`)

**Location**: `src/app/industries/page.tsx`

**Purpose**: Industry-specific solutions showcase.

**Sections**:
1. **Hero** - Headline, subheadline
2. **Industry Deep-Dives** (8 industries):
   - Startups
   - Healthcare
   - Education
   - Finance
   - Real Estate
   - Ecommerce
   - Hospitality
   - Logistics
3. **Bottom CTA** - "Industry not listed?"

**Industry Section Structure**:
- Left column:
  - "The Challenge" - 2-3 sentences
  - "What We Build" - 4-5 capability bullets
- Right column:
  - Custom mockup visual (industry-specific)
  - Portfolio case study link (if available)

**Mockup Visuals**:
- Each industry has unique mockup component
- Abstract UI fragments relevant to industry
- Hover scale effect

**Layout**:
- Alternating left/right per industry
- Mobile: stacked vertically

---

## Portfolio Page (`/portfolio`)

**Location**: `src/app/portfolio/page.tsx`

**Purpose**: Showcase all projects with filtering.

**Sections**:
1. **Hero** - Headline, subheadline
2. **Filter Bar** - Horizontal filter pills
3. **Project Grid** - Filterable project cards
4. **Bottom CTA** - "Want results like these?"

**Filter Categories**:
- All
- Websites
- Apps
- AI & Automation
- Trading Systems
- Marketing

**Project Card**:
- Visual area with gradient background
- Category tag
- Project name
- Hover: Metric overlay (e.g., "12ms latency")
- Blurb description
- "View Case Study" link

**Animations**:
- Filter pills with layoutId transition
- Grid reflow with AnimatePresence
- Cards fade/scale on filter change

**Layout**:
- Grid: 2 columns desktop, 1 column mobile

---

## Portfolio Case Study (`/portfolio/[slug]`)

**Location**: `src/app/portfolio/[slug]/page.tsx`

**Purpose**: Detailed project case study.

**Sections**:
1. **Breadcrumb** - Home / Portfolio / Project Name
2. **Hero** - Category tag, project name, blurb, hero visual
3. **The Brief** - What the client needed (2-3 paragraphs)
4. **The Approach** - What was built (technical details)
5. **Tech Stack** - Technologies used (tags)
6. **The Result** - Metrics grid + testimonial
7. **Next Project** - Navigation to next case study

**Metrics Grid**:
- 4 metric cards with icons
- Values (e.g., "12ms", "99.7%", "67%")
- Labels (e.g., "Average Latency", "Success Rate")

**Testimonial** (if available):
- Quote
- Client name and role
- Avatar

**Projects Available**:
- signal-engine
- luxora-funnel
- healpath-portal
- meridian-sync
- holloway-creative
- nifty-bot

---

## Pricing Page (`/pricing`)

**Location**: `src/app/pricing/page.tsx`

**Purpose**: Transparent pricing information.

**Sections**:
1. **Hero** - Headline, subheadline
2. **Pricing Cards** (4 tiers)
3. **FAQ** - Pricing-specific questions
4. **Bottom CTA** - "Still not sure what fits?"

**Pricing Tiers**:
1. **Project-Based**
   - Starting from ₹45,000
   - Fixed quote, defined timeline
   - 2-3 revisions, 30-day support
   - Source code delivery

2. **Retainer** (Recommended)
   - Starting from ₹35,000/mo
   - 40h baseline, 24h response
   - Monthly strategy calls
   - Flexible scope

3. **Trading Systems**
   - Custom scope quote
   - Pine Script, bot builds
   - Source protection
   - Backtesting

4. **Enterprise / Multi-System**
   - Let's talk
   - Dedicated project lead
   - Custom SLA
   - Integrated roadmap

**FAQ Topics**:
- Upfront payment
- Scope changes
- Payment plans
- Retainer minimums
- Post-launch support

**Layout**:
- 2-column grid for pricing cards
- Recommended tier highlighted with badge
- Mobile: single column stack

---

## About Page (`/about`)

**Location**: `src/app/about/page.tsx`

**Purpose**: Company story, values, and team.

**Sections**:
1. **Hero** - Headline, subheadline
2. **Story** - Origin narrative (2-3 paragraphs)
3. **Principles** - 4 core values
4. **Team** - Founder profile
5. **Bottom CTA** - "Want to work together?"

**Story Section**:
- Founder-voice narrative (first-person plural "we")
- Not corporate-speak
- Max-width 640px
- Generous line-height

**Principles**:
1. Systems Over Hacks
2. Honest Timelines Over Inflated Promises
3. Long-Term Thinking Over One-Off Deliverables
4. Real Testing Over "It Should Work"

**Team Section**:
- Founder avatar (initial)
- Name and role
- Bio (2-3 sentences)
- Social links (Globe, Mail)

**Layout**:
- Story: centered text block
- Principles: 2-column grid
- Team: single card with avatar

---

## Contact Page (`/contact`)

**Location**: `src/app/contact/page.tsx`

**Purpose**: Contact form and alternative contact methods.

**Sections**:
1. **Hero** - Headline, subheadline
2. **Split Screen**:
   - Left: Contact form
   - Right: Alternative contact + booking
3. **Bottom Note** - "No spam, no aggressive sales"

**Contact Form Fields**:
- Name * (required)
- Email * (required)
- Company (optional)
- Project Type (dropdown)
- Budget Range (dropdown, optional)
- Message * (required)

**Form Features**:
- Real-time validation on blur
- Inline error messages
- Red border on invalid fields
- Loading state on submit
- Success state with checkmark

**Alternative Contact**:
- "Prefer to talk directly?" heading
- Calendly booking button
- Direct email (mailto)
- Phone number
- Response time note

**Mini FAQ**:
- What happens after I submit?
- Is there a commitment?

**Success State**:
- Checkmark animation
- "Message Sent!" headline
- Links to portfolio/services
- Replaces form after submission

**Layout**:
- Desktop: 2-column split
- Mobile: stacked (form first)

---

## Shared Patterns

### Breadcrumb
All sub-pages include:
```
Home / [Page Name]
```
- 13px font size
- Ink/40% color
- Margin-top: 120px
- Links to Home and current page

### Page Hero
- Headline: 56px desktop / 36px mobile
- Subhead: 18px, Ink/60%, max-width 600px
- Motion entrance (stagger)
- No splash screen (only on homepage)

### Bottom CTA
Every page ends with relevant CTA:
- Context-specific headline
- Supporting text
- Primary CTA button
- Sometimes secondary CTA

### Page Transitions
- Crossfade via AnimatePresence
- Opacity 0→1
- Duration 0.3s
- Smooth navigation feel

---

## Responsive Breakpoints

**Mobile** (< 768px):
- Single column grids
- Stacked layouts
- Smaller typography
- Touch-friendly targets

**Tablet** (768px - 1024px):
- 2-column grids
- Medium typography
- Some side-by-side layouts

**Desktop** (> 1024px):
- 3-column grids where appropriate
- Full typography
- Side-by-side layouts
- Hover effects

---

## Navigation Structure

```
Home (/)
├── Services (/services)
├── Solutions (/solutions)
├── Industries (/industries)
├── Portfolio (/portfolio)
│   └── [slug] (/portfolio/signal-engine)
├── Pricing (/pricing)
├── About (/about)
└── Contact (/contact)
```

---

## SEO Considerations

Each page has:
- Semantic HTML structure
- Proper heading hierarchy (H1 → H2 → H3)
- Meta descriptions (in layout.tsx)
- Descriptive URLs
- Alt text for images (when added)

---

## Performance

- Client-side navigation (no page reloads)
- Code splitting per page
- Lazy loading for images
- Optimized animations
- Minimal JavaScript bundle
