# D.V.M High School & Jr. College - Development Guide

## Getting Started

This is a professional, SEO-optimized website for D.V.M High School & Jr. College built with React.js.

### Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open in browser:**
```
http://localhost:3000
```

### Development Notes

#### File Structure
- `src/components/` - All React components
- `src/utils/` - Utilities for image optimization and SEO
- `src/index.css` - Global styles and animations
- `public/` - Static assets

#### Key Components
1. **Navbar** - Navigation with info bar and sticky header
2. **HeroSlider** - Animated slide carousel with auto-play
3. **About** - School overview with statistics
4. **Features** - Four key offerings
5. **Courses** - Subject-specific course cards
6. **WhyChooseUs** - Reasons to choose D.V.M.
7. **Testimonials** - Student/parent reviews
8. **Footer** - Contact and newsletter signup

### SEO Implementation

The website includes:
- Structured data in `src/utils/seoConfig.js`
- Meta tags for all pages
- Schema.org JSON-LD for local business
- Open Graph tags
- Optimized images with responsive sizing

### Customization Points

**Location Information:**
Edit `src/utils/seoConfig.js`:
```javascript
address: "Kandivali, Poisar, Mumbai - 400067",
latitude: "19.1136",
longitude: "72.8697"
```

**Contact Details:**
```javascript
contact: {
  phone: "+91 123 456 789",
  email: "info@dvmhighschool.com",
}
```

**Colors:**
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#1e3a8a",    // Blue
  secondary: "#f97316",  // Orange
  accent: "#06b6d4",     // Cyan
}
```

### Image Optimization

Use the imageOptimization utility for responsive images:
```javascript
import { optimizeImage, getResponsiveImageSet } from './utils/imageOptimization'

const imageData = getResponsiveImageSet('/image.jpg', 'hero')
// Returns: { mobile, tablet, desktop, webp }
```

### Building for Production

```bash
npm run build
```

Output will be in `dist/` folder, ready to deploy.

### Performance Tips

✨ Current optimizations:
- Lazy loading images
- Tailwind CSS purging
- Code splitting ready
- Optimized animations

### Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest 2 versions

### Deployment

Ready for deployment to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Traditional web servers

### Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Styles not updating?**
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Next Steps

1. ✅ Project structure created
2. ✅ Components built
3. ✅ SEO optimized
4. ⏳ Connect to backend API
5. ⏳ Add form submissions
6. ⏳ Implement images
7. ⏳ Deploy to production

---

Happy coding! 🎉
