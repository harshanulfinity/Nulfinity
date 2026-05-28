import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { blogContent } from "@/lib/data";
import { makeMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = blogContent[slug as keyof typeof blogContent];
  if (!blog) return { title: "Blog Not Found | Nulfinity" };
  return {
    title: `${blog.title} | Nulfinity`,
    description: blog.summary,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = blogContent[slug as keyof typeof blogContent];
  if (!blog) notFound();

  const schema = articleSchema({
    title: blog.title,
    description: blog.summary,
    publishedDate: "2026-05-01",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: blog.title, url: `/blog/${slug}` },
  ]);

  return (
    <div className="grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHero
        eyebrow={blog.category}
        title={blog.title}
        description={blog.summary}
      />

      <article className="mx-auto w-[min(800px,92%)] py-16">
        <div className="mb-8 flex items-center justify-between border-b border-[var(--border)] pb-8">
          <span className="text-sm text-[var(--muted)]">{blog.readTime}</span>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-[var(--text)]">
          {blog.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={index} className="mt-8 text-2xl font-semibold">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith(">")) {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-[var(--secondary)] pl-4 italic text-[var(--muted)]"
                >
                  {paragraph.replace("> ", "")}
                </blockquote>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <li key={index} className="ml-4 list-disc text-[var(--muted)]">
                  {paragraph.replace("- ", "")}
                </li>
              );
            }
            if (paragraph.match(/^\d+\./)) {
              return (
                <li key={index} className="ml-4 list-decimal text-[var(--muted)]">
                  {paragraph.replace(/^\d+\.\s/, "")}
                </li>
              );
            }
            return (
              <p key={index} className="leading-relaxed text-[var(--muted)]">
                {paragraph}
              </p>
            );
          })}
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--secondary)]"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
