import { blogContent } from "@/lib/data";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://www.nulfinity.com";
  const currentDate = new Date().toISOString();

  const items = Object.entries(blogContent).map(([slug, blog]) => ({
    title: blog.title,
    description: blog.summary,
    link: `${baseUrl}/blog/${slug}`,
    pubDate: "2026-05-01T00:00:00Z",
    category: blog.category,
  }));

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nulfinity Blog</title>
    <description>Insights on intelligent document processing, OCR automation, and enterprise AI workflows.</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    ${items
      .map(
        (item) => `
    <item>
      <title>${item.title}</title>
      <description>${item.description}</description>
      <link>${item.link}</link>
      <category>${item.category}</category>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${item.link}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
