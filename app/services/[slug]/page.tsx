import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { GlowCard } from "@/components/ui/glow-card";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { servicePageContent, servicePages } from "@/lib/data";
import { productSchema, breadcrumbSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageContent[slug as keyof typeof servicePageContent];
  if (!page) return { title: "Service Not Found | Nulfinity" };
  return {
    title: `${page.title} | Nulfinity`,
    description: page.summary,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = servicePageContent[slug as keyof typeof servicePageContent];
  if (!page) notFound();

  const schema = productSchema({
    name: page.title,
    description: page.summary,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: page.title, url: `/services/${slug}` },
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
        eyebrow="Service Solution"
        title={page.title}
        description={page.summary}
        actions={<CalendlyButton className="rounded-full bg-[var(--primary)] px-5 py-3 text-white">Book Consultation</CalendlyButton>}
      />
      <section className="mx-auto grid w-[min(1180px,92%)] gap-4 pb-16 md:grid-cols-2">
        <GlowCard>
          <h2 className="text-xl font-semibold">Problem Statement</h2>
          <p className="mt-3 text-[var(--muted)]">{page.problem}</p>
        </GlowCard>
        <GlowCard>
          <h2 className="text-xl font-semibold">Solution Approach</h2>
          <p className="mt-3 text-[var(--muted)]">{page.solution}</p>
        </GlowCard>
      </section>
      <section className="mx-auto w-[min(1180px,92%)] pb-16">
        <h2 className="text-2xl font-semibold">Workflow Diagram</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-5">
          {["Ingest", "Classify", "Extract", "Validate", "Route"].map((s) => (
            <GlowCard key={s}><p className="text-center text-sm font-medium">{s}</p></GlowCard>
          ))}
        </div>
      </section>
      <section className="mx-auto w-[min(1180px,92%)] pb-16">
        <h2 className="text-2xl font-semibold">Benefits</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {page.benefits.map((b) => (
            <GlowCard key={b}><p className="text-sm">{b}</p></GlowCard>
          ))}
        </div>
      </section>
      <section className="mx-auto w-[min(1180px,92%)] pb-16">
        <h2 className="text-2xl font-semibold">Stats</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {page.stats.map((s) => (
            <GlowCard key={s.label}>
              <p className="text-2xl font-semibold">{s.value}</p>
              <p className="text-sm text-[var(--muted)]">{s.label}</p>
            </GlowCard>
          ))}
        </div>
      </section>
      <section className="mx-auto w-[min(1180px,92%)] pb-16">
        <h2 className="text-2xl font-semibold">Industries Using This</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {page.industries.map((industry) => (
            <span key={industry} className="glass rounded-full px-4 py-2 text-sm">{industry}</span>
          ))}
        </div>
      </section>
      <section className="mx-auto w-[min(1180px,92%)] pb-16">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {page.faqs.map((faq) => (
            <GlowCard key={faq.q}>
              <p className="font-medium">{faq.q}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{faq.a}</p>
            </GlowCard>
          ))}
        </div>
      </section>
      <section className="mx-auto w-[min(1180px,92%)] pb-20">
        <GlowCard className="text-center">
          <h2 className="text-2xl font-semibold">Build your automation roadmap with Nulfinity.</h2>
          <CalendlyButton className="mt-5 rounded-full bg-[var(--primary)] px-5 py-3 text-white">Talk to an Expert</CalendlyButton>
        </GlowCard>
      </section>
    </div>
  );
}
