# DVM High School Website

## Project Overview
A modern, SEO-optimized website for DVM High School located in Kandivali, Poisar, Mumbai. Built with React.js with a focus on responsive design, image optimization, and search engine optimization.

## Features

### 🎨 Frontend Components
- **Responsive Navigation Bar** - Sticky header with mobile menu
- **Hero Slider** - Animated carousel with auto-play and manual controls
- **About Section** - School information with achievement statistics
- **Features Section** - Key differentiators and offerings
- **Courses Section** - Subject-wise course offerings (Math, English, Science, Social Studies)
- **Why Choose Us Section** - Unique selling points
- **Testimonials Section** - Student and parent reviews
- **Footer** - Contact information, quick links, and newsletter signup

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation

### 🔍 SEO Optimization
- Schema.org structured data (Organization, LocalBusiness, EducationalOrganization)
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card integration
- Canonical URLs
- Sitemap and robots.txt generation
- Optimized meta descriptions and keywords

### 🖼️ Image Optimization
- WebP format support
- Responsive image sizing
- LazyLoading implementation
- Placeholder generation
- Srcset for different device sizes

### ⚡ Performance
- Vite for fast build and dev server
- Tailwind CSS for optimized styling
- Code splitting ready
- Optimized animations and transitions

## Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── HeroSlider.jsx
│   │   ├── HeroSlider.css
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Courses.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   ├── imageOptimization.js
│   │   ├── seoConfig.js
│   │   └── sitegeneration.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. Navigate to the Frontend folder:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Configuration

### SEO Configuration
Edit `src/utils/seoConfig.js` to customize:
- Site metadata (title, description, keywords)
- Contact information
- Social media links
- Structured data settings

### Tailwind Customization
Modify `tailwind.config.js` to customize:
- Colors (Primary: Blue #1e3a8a, Secondary: Orange #f97316)
- Typography
- Breakpoints
- Custom animations

## Key Technologies

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing (ready for integration)

## Color Scheme

- **Primary**: Deep Blue (#1e3a8a)
- **Secondary**: Vibrant Orange (#f97316)
- **Accent**: Cyan (#06b6d4)
- **Neutral**: Gray scale

## SEO Best Practices Applied

✅ Semantic HTML structure
✅ Meta tags optimization
✅ Open Graph implementation
✅ Schema.org structured data
✅ Mobile-responsive design
✅ Fast page load times
✅ Optimized images with srcset
✅ Sitemap and robots.txt
✅ Canonical URLs
✅ Local business schema for location

## Performance Metrics

Target scores:
- Lighthouse Performance: 90+
- Lighthouse SEO: 100
- Lighthouse Accessibility: 90+
- Lighthouse Best Practices: 90+

## Future Enhancements

- [ ] Dynamic content management system
- [ ] Admission form with validation
- [ ] Student portal dashboard
- [ ] Blog/News section with SEO
- [ ] Online class booking system
- [ ] Photo gallery with optimization
- [ ] Contact form with backend integration
- [ ] Multi-language support

## Contact Information

**DVM High School**
- Phone: +91 123 456 789
- Email: info@dvmhighschool.com
- Location: Kandivali, Poisar, Mumbai - 400067
- Hours: Monday-Friday, 8:00 AM - 4:00 PM

## License

All rights reserved © 2024 DVM High School

---

**Created with ❤️ for excellent education in Kandivali, Poisar**
