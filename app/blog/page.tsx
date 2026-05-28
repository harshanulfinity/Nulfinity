import { PageHero } from "@/components/sections/page-hero";
import { BlogList } from "@/components/sections/blog-list";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Blog | Nulfinity",
  description: "Insights on intelligent document processing, OCR automation, and enterprise AI workflows.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Blog & Resources"
        title="Insights for enterprise teams scaling AI-powered document operations."
        description="Practical guidance on IDP architecture, OCR optimization, workflow automation, and governance."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogList />
      </div>
    </div>
  );
}
