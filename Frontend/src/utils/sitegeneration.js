// Sitemap Generator
export const generateSitemap = () => {
  const baseUrl = "https://dvmhighschool.com"
  
  const pages = [
    { url: "/", priority: 1.0, changefreq: "weekly" },
    { url: "/about", priority: 0.8, changefreq: "monthly" },
    { url: "/courses", priority: 0.9, changefreq: "monthly" },
    { url: "/admission", priority: 0.9, changefreq: "weekly" },
    { url: "/contact", priority: 0.7, changefreq: "monthly" },
  ]

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  pages.forEach(page => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`
    sitemap += `    <priority>${page.priority}</priority>\n`
    sitemap += '  </url>\n'
  })

  sitemap += '</urlset>'

  return sitemap
}

// Robots.txt Generator
export const generateRobotsTxt = () => {
  return `
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://dvmhighschool.com/sitemap.xml

# Allow search engines to crawl your site
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
`
}

export default {
  generateSitemap,
  generateRobotsTxt
}
