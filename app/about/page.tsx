import Link from "next/link";
import { GlowCard } from "@/components/ui/glow-card";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "About Nulfinity | Enterprise AI Consulting",
  description: "Learn how Nulfinity was built to deliver trusted AI automation for enterprise document workflows.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="About Nulfinity"
        title="We build enterprise AI systems that make critical operations faster, safer, and smarter."
        description="Nulfinity was founded to bridge the gap between AI potential and enterprise-grade execution."
        actions={<CalendlyButton>Talk to Our Team</CalendlyButton>}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <SectionHeading eyebrow="Who We Are" title="Built for enterprise document intelligence" description="Nulfinity was founded to bridge the gap between AI potential and enterprise-grade execution." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["Mission", "Enable high-impact AI automation with governance, reliability, and measurable business outcomes."],
              ["Vision", "Become the trusted operating partner for enterprise document intelligence and workflow automation."],
              ["Why We Built Nulfinity", "Most AI initiatives stalled between proof-of-concept and production. We solved that gap."],
              ["AI-First Approach", "Model strategy, control layers, and workflow design are engineered as one production system."],
            ].map(([title, desc]) => (
              <GlowCard key={title}>
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{desc}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        <section className="bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your document workflows?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">We are currently onboarding our first enterprise partners across India and Southeast Asia. Get early access and shape the product with us.</p>
          <CalendlyButton className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book a Demo
          </CalendlyButton>
        </section>
      </div>
    </div>
  );
}
