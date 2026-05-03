// Image Optimization Utility
// Convert images to WebP, resize, and optimize

export const optimizeImage = (imagePath, width, height, quality = 80) => {
  // In a real implementation, this would use a service like Cloudinary or ImageKit
  // For now, it returns a placeholder with optimization parameters
  return {
    src: imagePath,
    srcset: `
      ${imagePath}?w=${width}&h=${height}&q=${quality} 1x,
      ${imagePath}?w=${width * 2}&h=${height * 2}&q=${quality - 10} 2x
    `,
    sizes: `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${width}px`,
    loading: 'lazy',
    decoding: 'async'
  }
}

// Generate responsive image set
export const getResponsiveImageSet = (imagePath, baseName) => {
  return {
    mobile: `${imagePath}?w=600&h=400&q=80`,
    tablet: `${imagePath}?w=1000&h=600&q=85`,
    desktop: `${imagePath}?w=1600&h=800&q=90`,
    webp: {
      mobile: `${imagePath}?w=600&h=400&q=80&fm=webp`,
      tablet: `${imagePath}?w=1000&h=600&q=85&fm=webp`,
      desktop: `${imagePath}?w=1600&h=800&q=90&fm=webp`
    }
  }
}

// Generate placeholder images (as SVG)
export const generatePlaceholder = (width, height, bgColor = '#e5e7eb', text = '') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-size="16" font-family="Arial">
        ${text || `${width}x${height}`}
      </text>
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

export default {
  optimizeImage,
  getResponsiveImageSet,
  generatePlaceholder
}
