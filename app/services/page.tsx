import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { coreServices, servicePages } from "@/lib/data";
import { makeMetadata, productSchema, breadcrumbSchema } from "@/lib/seo";
import { CalendlyButton } from "@/components/ui/calendly-button";

export const metadata = makeMetadata({
  title: "Services | Nulfinity AI Automation",
  description: "Explore Nulfinity services across IDP, OCR, cloud, product engineering, and AI workflow automation.",
  path: "/services",
});

export default function ServicesPage() {
  const schema = productSchema({
    name: "Nulfinity Platform",
    description: "Enterprise AI-powered document processing platform for automating invoice processing, document extraction, and workflow automation.",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHero
        eyebrow="Platform & Services"
        title="Automation capabilities designed for enterprise document workflows."
        description="From OCR and IDP to cloud-native AI orchestration, each service is designed for speed, compliance, and scale."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <SectionHeading eyebrow="Core Platform" title="End-to-end document intelligence" description="Purpose-built modules that work together to automate your entire document lifecycle." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {coreServices.map((service) => (
              <GlowCard key={service.slug}>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-blue-600" size={20} />
                </div>
                <h2 className="text-lg font-bold text-gray-900">{service.title}</h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Learn more →
                </Link>
              </GlowCard>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8">
          <SectionHeading eyebrow="Specialized Solutions" title="Tailored for your industry" description="Pre-built workflow templates and extraction models for domain-specific document types." />
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {servicePages.map((slug) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors group"
              >
                <span className="capitalize">{slug.replaceAll("-", " ")}</span>
                <span className="text-gray-400 group-hover:text-blue-500">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to automate your document workflows?</h2>
          <p className="text-blue-100 mb-6">Get a personalized demo and see how Nulfinity fits your specific use case.</p>
          <CalendlyButton className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book a Demo
          </CalendlyButton>
        </section>
      </div>
    </div>
  );
}
