# MAPS × AMIN Volunteer Management Platform

A modern demo website showcasing the collaboration between MAPS (Muslim American Philanthropy Society) and AMIN (Advancing Muslims In kNowledge) for managing volunteers across tutoring sites.

## About

**MAPS** visits schools to teach students various subjects, providing quality education and mentorship to communities.

**AMIN** helps Muslims advance in technology, creating platforms and solutions for community growth.

Together, we're building a platform to streamline volunteer management for tutoring sites.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-friendly interface
- 🎯 Volunteer management sections
- 🚀 Built with Next.js 15 and TypeScript
- ⚡ Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via GitHub

1. Push this repository to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## Project Structure

```
maps-amin-demo/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage with all sections
│   └── globals.css     # Global styles
├── public/             # Static assets
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies
```

## Sections

- **Hero Section**: Introduction to MAPS × AMIN partnership
- **Stats**: Key metrics (volunteers, sites, students)
- **About**: Information about both organizations
- **Volunteer Management**: Platform features showcase
- **Platform Features**: Technology highlights
- **CTA**: Call-to-action for volunteers
- **Footer**: Navigation and contact info

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Icons**: SVG icons and emoji

## Customization

Edit `app/page.tsx` to customize:
- Hero messaging
- Statistics
- Feature cards
- Color schemes (blue/purple theme)
- Content and copy

## Learn More

To learn more about Next.js:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js)

## License

© 2025 MAPS × AMIN. All rights reserved.

## Contact

For questions about this demo, contact: info@mapsxamin.org
