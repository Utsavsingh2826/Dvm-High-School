// SEO Metadata Configuration

export const SEO_CONFIG = {
  siteName: "D.V.M. High School & Jr. College",
  siteUrl: "https://dvmhighschool.com",
  logo: "https://dvmhighschool.com/logo.png",
  description: "D.V.M. High School & Jr. College - Quality Education with Experienced Teachers in Kandivali, Poisar, Mumbai",
  keywords: [
    "high school in Kandivali",
    "school in Poisar",
    "quality education Mumbai",
    "CBSE school",
    "D.V.M. High School & Jr. College",
    "experienced teachers"
  ],
  defaultImage: "https://dvmhighschool.com/og-image.png",
  
  // Contact Information
  contact: {
    phone: "+91 9022081772",
    email: "dvmhighschool2021@gmail.com",
    address: "Poisar, Kandivali (East), Mumbai - 400101",
    latitude: "19.2045",
    longitude: "72.8522"
  },

  // Social Media
  social: {
    instagram: "https://www.instagram.com/dvm.highschoolofficials?igsh=NHE0cXg5N2RmdGh1",
    youtube: "https://youtube.com/@dvmhighschooljrcollegeofficial?si=INm1qBpSDA3MmRw7"
  }
}

// Generate Meta Tags for specific page
export const generateMetaTags = (pageData) => {
  return {
    title: pageData.title || SEO_CONFIG.siteName,
    description: pageData.description || SEO_CONFIG.description,
    keywords: pageData.keywords || SEO_CONFIG.keywords.join(", "),
    ogTitle: pageData.ogTitle || pageData.title,
    ogDescription: pageData.ogDescription || pageData.description,
    ogImage: pageData.ogImage || SEO_CONFIG.defaultImage,
    ogUrl: pageData.url,
    canonical: pageData.url,
    robotsIndex: pageData.index !== false ? "index" : "noindex",
    robotsFollow: pageData.follow !== false ? "follow" : "nofollow"
  }
}

// Structured Data (Schema.org JSON-LD)
export const getStructuredData = (type = "Organization") => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type
  }

  if (type === "Organization") {
    return {
      ...baseSchema,
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      logo: SEO_CONFIG.logo,
      description: SEO_CONFIG.description,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SEO_CONFIG.contact.phone,
        contactType: "Customer Service"
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kandivali, Poisar",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400067",
        addressCountry: "IN"
      },
      sameAs: Object.values(SEO_CONFIG.social)
    }
  } else if (type === "LocalBusiness") {
    return {
      ...baseSchema,
      name: SEO_CONFIG.siteName,
      image: SEO_CONFIG.logo,
      description: SEO_CONFIG.description,
      url: SEO_CONFIG.siteUrl,
      telephone: SEO_CONFIG.contact.phone,
      email: SEO_CONFIG.contact.email,
      geo: {
        "@type": "GeoCoordinates",
        latitude: SEO_CONFIG.contact.latitude,
        longitude: SEO_CONFIG.contact.longitude
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kandivali, Poisar",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400067",
        addressCountry: "IN"
      }
    }
  } else if (type === "EducationalOrganization") {
    return {
      ...baseSchema,
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      logo: SEO_CONFIG.logo,
      description: SEO_CONFIG.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kandivali, Poisar",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400067",
        addressCountry: "IN"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SEO_CONFIG.contact.phone,
        contactType: "Admissions"
      }
    }
  }

  return baseSchema
}

export const updatePageMetadata = (title, description, url, image) => {
  // Update document title
  document.title = title

  // Update or create meta tags
  updateMetaTag("description", description)
  updateMetaTag("og:title", title)
  updateMetaTag("og:description", description)
  updateMetaTag("og:url", url)
  updateMetaTag("og:image", image)
  updateMetaTag("twitter:title", title)
  updateMetaTag("twitter:description", description)
  updateMetaTag("twitter:image", image)

  // Update canonical link
  updateCanonical(url)
}

const updateMetaTag = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
  
  if (!element) {
    element = document.createElement("meta")
    const attr = name.startsWith("og:") ? "property" : "name"
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  
  element.setAttribute("content", content)
}

const updateCanonical = (url) => {
  let link = document.querySelector("link[rel='canonical']")
  
  if (!link) {
    link = document.createElement("link")
    link.rel = "canonical"
    document.head.appendChild(link)
  }
  
  link.href = url
}

export default SEO_CONFIG
