# Deployment Guide

## Quick Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Navigate to project directory:**
   ```bash
   cd maps-amin-demo
   ```

3. **Run deploy command:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Log in to your Vercel account
   - Link to existing project or create new one
   - Accept default settings (Next.js is auto-detected)
   - Wait for deployment to complete

5. **Get your live URL:**
   - Production URL will be displayed after deployment
   - Example: `https://maps-amin-demo.vercel.app`

### Method 2: Vercel Dashboard (GitHub Integration)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - MAPS x AMIN demo"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure (auto-detected):**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Access your live site

### Method 3: One-Click Deploy

Click the button below to deploy directly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/maps-amin-demo)

Replace `YOUR_USERNAME` with your GitHub username.

## Environment Variables

This demo doesn't require any environment variables, but for future features you might add:

```env
# Example for future database integration
DATABASE_URL=your_database_url

# Example for future email integration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
```

Add these in Vercel Dashboard → Settings → Environment Variables

## Custom Domain

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning

## Production Optimization

The site is already optimized with:
- ✅ Static page generation
- ✅ Automatic image optimization
- ✅ CSS minification
- ✅ JavaScript bundling
- ✅ Turbopack for faster builds

## Monitoring

After deployment, monitor your site at:
- **Analytics**: Vercel Dashboard → Analytics
- **Logs**: Vercel Dashboard → Deployments → View Logs
- **Performance**: Vercel Speed Insights (enable in settings)

## Automatic Deployments

With GitHub integration:
- Every `git push` to `main` triggers a production deployment
- Pull requests get preview deployments automatically
- Each commit has a unique preview URL

## Rollback

To rollback to a previous deployment:
1. Go to Vercel Dashboard → Deployments
2. Find the working deployment
3. Click "⋯" → "Promote to Production"

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
