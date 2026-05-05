# D.V.M High School & Jr. College - Deployment Guide

## Pre-Deployment Checklist

- [ ] All components are built and tested
- [ ] SEO metadata configured correctly
- [ ] Contact information updated
- [ ] Images optimized
- [ ] Environment variables set
- [ ] Build tested locally
- [ ] Performance optimized

## Deployment Options

### 1. **Vercel (Recommended for Vite + React)**

Vercel has native support for Vite projects and provides excellent SEO capabilities.

**Steps:**
1. Push code to GitHub/GitLab
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Framework: Auto-detect (Vite)
6. Build command: `npm run build`
7. Install command: `npm install`
8. Click Deploy

**Domain Setup:**
1. Go to Project Settings → Domains
2. Add custom domain: `dvmhighschool.com`
3. Point DNS records to Vercel nameservers

### 2. **Netlify**

Easy deployment with excellent performance.

**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

**Build Settings:**
```
Build command: npm run build
Publish directory: dist
Node version: 18
```

### 3. **AWS S3 + CloudFront**

For maximum control and scalability.

**Steps:**
1. Create S3 bucket: `dvmhighschool.com`
2. Enable static website hosting
3. Build project: `npm run build`
4. Upload `dist/` folder to S3
5. Create CloudFront distribution
6. Point domain to CloudFront

### 4. **Traditional Web Host (cPanel/Hosting)**

For traditional shared hosting.

**Steps:**
1. Build project: `npm run build`
2. Compress `dist` folder
3. Upload via FTP to `public_html`
4. Extract files
5. Check `.htaccess` for SPA routing

**.htaccess Configuration:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 5. **Docker Deployment**

For containerized deployment.

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build & Run:**
```bash
docker build -t dvm-high-school .
docker run -p 80:80 dvm-high-school
```

## Post-Deployment

### 1. **SEO Verification**

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Test structured data at [schema.org validator](https://validator.schema.org/)
- [ ] Check Open Graph meta tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### 2. **Performance Testing**

- [ ] Run Lighthouse audit (target 90+ all metrics)
- [ ] Test on [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check Core Web Vitals
- [ ] Test on mobile devices

### 3. **Security**

- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Set security headers
- [ ] Enable firewall
- [ ] Set up monitoring

### 4. **Analytics Setup**

Add Google Analytics:
```javascript
// Add to Head in index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Performance Optimization Tips

1. **Image Optimization**
   - Use WebP format
   - Implement responsive images
   - Use image CDN (Cloudinary, ImageKit)

2. **Caching**
   - Set cache headers
   - Use service workers
   - Enable gzip compression

3. **Code Splitting**
   - Lazy load components
   - Dynamic imports
   - Tree shaking

4. **Monitoring**
   - Set up error tracking (Sentry)
   - Monitor performance
   - Track uptime

## Domain Configuration

### DNS Records Needed:

For **Vercel/Netlify:**
```
A Record: @ → IP provided
CNAME: www → alias provided
```

For **AWS:**
```
CNAME: @ → CloudFront domain
CNAME: www → www.dvmhighschool.com
```

### Email Configuration:

Add MX records for school email (e.g., contact@dvmhighschool.com):
```
MX Record: 10 mail.dvmhighschool.com
```

## Backup & Maintenance

1. **Regular Backups**
   - Code on GitHub
   - Database backups (if applicable)
   - Configuration backups

2. **Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Test updates in staging

3. **Monitoring**
   - Set up uptime monitoring
   - Email alerts for issues
   - Regular performance reviews

## Troubleshooting

**White screen after deployment?**
- Clear browser cache
- Check browser console for errors
- Verify build output includes all files

**Styles not loading?**
- Check CSS file references
- Verify CSS files in dist folder
- Check for path issues

**Page not found (404)?**
- Verify SPA routing configuration
- Check .htaccess (if using traditional host)
- Ensure index.html fallback

## Support & Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Best Practices](https://react.dev/learn)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

---

Deployment Date: _______________
Environment: Production / Staging
Status: ✅ Live / 🔄 In Progress
