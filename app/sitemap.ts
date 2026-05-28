import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/data";
import { blogContent } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nulfinity.com";
  const now = new Date();

  const routes = [
    { path: "", priority: 1, changeFreq: "daily" as const },
    { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/services", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/careers", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/case-studies", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/what-is-intelligent-document-processing", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/ocr-software", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/invoice-processing-automation", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/document-ai", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/receipt-data-extraction", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/ai-document-processing", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/invoice-data-extraction", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/automated-document-processing", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/accounts-payable-automation", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/business-document-automation", priority: 0.7, changeFreq: "monthly" as const },
  ];

  const staticUrls = routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));

  const serviceUrls = servicePages.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogUrls = Object.keys(blogContent).map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...serviceUrls, ...blogUrls];
}
