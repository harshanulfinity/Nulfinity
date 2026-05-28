import type { Metadata } from "next";

const baseUrl = "https://www.nulfinity.com";

export function makeMetadata({
  title,
  description,
  path = "/",
  image = "/og-image.png",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: "Nulfinity",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nulfinity",
    url: baseUrl,
    logo: `${baseUrl}/NULFINITY.svg`,
    description: "Intelligent Document Processing for the Modern Enterprise. Extract, classify, validate, and route 50+ document types with AI-powered accuracy.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-774-303-0910",
      contactType: "sales",
      email: "info@nulfinity.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/nulfinity",
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nulfinity",
    url: baseUrl,
    description: "Enterprise AI-powered document processing platform for automating invoice processing, document extraction, and workflow automation.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  publishedDate,
  modifiedDate,
  author = "Nulfinity Team",
}: {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Nulfinity",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/NULFINITY.svg`,
      },
    },
  };
}

export function productSchema({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    image: image || `${baseUrl}/og-image.png`,
    url: baseUrl,
    author: {
      "@type": "Organization",
      name: "Nulfinity",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function reviewSchema({
  name,
  review,
  rating,
  date,
}: {
  name: string;
  review: string;
  rating: number;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Nulfinity",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating,
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: name,
    },
    reviewBody: review,
    datePublished: date,
  };
}
