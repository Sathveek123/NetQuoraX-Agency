# Deployment Guide

This guide covers deploying the NetQuoraX website to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository initialized
- Environment variables configured (if needed)

## Build Process

### Local Build
```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Production Start
```bash
npm start
```

Starts the production server on port 3000.

---

## Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

### Automatic Deployment

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js configuration
6. Click "Deploy"

### Manual Deployment with CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables (Vercel)

In Vercel dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add variables:
   - `NEXT_PUBLIC_GA_ID` (optional)
   - `NEXT_PUBLIC_CALENDLY_URL` (optional)

### Custom Domain

1. In Vercel dashboard, go to Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## Netlify

### Deployment

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Install command**: `npm install`

### Netlify Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Environment Variables (Netlify)

In Netlify dashboard:
1. Site settings → Environment variables
2. Add required variables

---

## AWS Amplify

### Deployment

1. Push code to GitHub
2. Go to [console.aws.amazon.com/amplify](https://console.aws.amazon.com/amplify)
3. Click "New app" → "Host web app"
4. Connect to GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Base directory**: `/`
   - **Start command**: `npm start`

### Amplify Configuration

Create `amplify.yml` in project root:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## Railway

### Deployment

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway auto-detects Next.js
6. Click "Deploy"

### Environment Variables (Railway)

In Railway dashboard:
1. Go to Variables tab
2. Add required environment variables

---

## Digital Ocean App Platform

### Deployment

1. Go to [digitalocean.com](https://digitalocean.com)
2. Navigate to Apps
3. Click "Create App"
4. Connect to GitHub repository
5. Configure:
   - **Build command**: `npm run build`
   - **Run command**: `npm start`
   - **HTTP Port**: 3000

### Environment Variables (Digital Ocean)

In App settings:
1. Go to Components → Your component
2. Add environment variables

---

## Docker Deployment

### Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t netquorax-website .

# Run container
docker run -p 3000:3000 netquorax-website
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Run with:
```bash
docker-compose up -d
```

---

## Traditional VPS Deployment

### Server Setup

1. Install Node.js on server
2. Clone repository:
   ```bash
   git clone https://github.com/Sathveek123/NetQuoraX-Agency.git
   cd NetQuoraX-Agency
   ```
3. Install dependencies:
   ```bash
   npm install --production
   ```
4. Build application:
   ```bash
   npm run build
   ```
5. Start application:
   ```bash
   npm start
   ```

### PM2 Process Manager

```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start npm --name "netquorax" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### Nginx Configuration

Create `/etc/nginx/sites-available/netquorax`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/netquorax /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## Environment Variables

### Required Variables

Currently no required environment variables for basic functionality.

### Optional Variables

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Calendly Booking URL
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link

# Contact Form Endpoint (if using external service)
CONTACT_FORM_ENDPOINT=https://api.example.com/submit
```

---

## Performance Optimization

### Image Optimization

Next.js automatically optimizes images. Ensure:
- Use `next/image` component
- Provide width/height or `fill` prop
- Use appropriate image formats (WebP, AVIF)

### Code Splitting

Next.js App Router automatically code-splits by:
- Route segments
- Dynamic imports
- Lazy-loaded components

### Caching

- Vercel: Automatic edge caching
- Netlify: CDN caching enabled
- Custom: Configure CDN headers

---

## Monitoring

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics

Add to `layout.tsx`:
```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
```

---

## Troubleshooting

### Build Errors

**Error**: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Error**: TypeScript errors
```bash
# Check TypeScript version
npm list typescript

# Reinstall dependencies rm -rf node_modules package-lock.json
npm install
```

### Runtime Errors

**Error**: Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm start
```

**Error**: Hydration mismatch
- Check for browser extensions modifying HTML
- Ensure `suppressHydrationWarning` is on `<html>` tag
- Avoid `Date.now()` or `Math.random()` in render

---

## Security

### HTTPS

- Vercel: Automatic HTTPS with Let's Encrypt
- Netlify: Automatic HTTPS
- Custom: Use Certbot for Let's Encrypt

### Headers

Add security headers in `next.config.ts`:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

---

## Backup and Recovery

### Database Backups

If using a database:
- Set up automated backups
- Export regularly: `pg_dump` for PostgreSQL
- Store backups securely

### Code Backups

- Git provides version control
- Tag releases: `git tag -a v1.0.0 -m "Release v1.0.0"`
- Push tags: `git push origin --tags`

---

## Scaling

### Horizontal Scaling

- Use load balancer (Nginx, AWS ELB)
- Run multiple instances
- Use PM2 cluster mode:
  ```bash
  pm2 start npm --name "netquorax" -i max -- start
  ```

### Vertical Scaling

- Increase server resources (CPU, RAM)
- Optimize database queries
- Implement caching (Redis)

---

## Cost Optimization

### Vercel

- Free tier: 100GB bandwidth/month
- Pro tier: $20/month for more resources

### Netlify

- Free tier: 100GB bandwidth/month
- Pro tier: $19/month

### AWS

- Use reserved instances for long-term
- Monitor costs with AWS Cost Explorer
- Set up billing alerts

---

## Checklist Before Deployment

- [ ] Test build locally: `npm run build`
- [ ] Test production build: `npm start`
- [ ] Check all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Verify all links work
- [ ] Test form submissions
- [ ] Check console for errors
- [ ] Set up environment variables
- [ ] Configure custom domain
- [ ] Set up SSL/HTTPS
- [ ] Configure analytics
- [ ] Set up monitoring
- [ ] Test on staging environment first
