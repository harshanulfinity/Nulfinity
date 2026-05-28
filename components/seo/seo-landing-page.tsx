"use client";

import Link from "next/link";
import { Check, ArrowRight, Mail, Zap, Scissors, FileText, Brain, Download, ArrowDown } from "lucide-react";
import { FAQAccordion, type FAQItem } from "./faq-accordion";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { track } from "@/lib/analytics";
import { productSchema } from "@/lib/seo";

export interface SeoPageData {
  hero: {
    badge: string;
    h1: string;
    intro: string;
    stats?: { value: string; label: string }[];
  };
  problem: {
    heading: string;
    body: string;
    bullets: string[];
  };
  what: {
    heading: string;
    body: string;
    points?: { title: string; desc: string }[];
  };
  howItWorks: {
    heading: string;
    steps: { title: string; desc: string }[];
  };
  features: {
    heading: string;
    subheading?: string;
    items: { title: string; desc: string }[];
  };
  benefits: {
    heading: string;
    body?: string;
    items: string[];
  };
  useCases?: {
    heading: string;
    items: { industry: string; challenge: string; outcome: string }[];
  };
  comparison?: {
    heading: string;
    rows: { label: string; manual: string; nulfinity: string }[];
  };
  faq: {
    heading: string;
    items: FAQItem[];
  };
  cta: {
    heading: string;
    body: string;
  };
}

function buildSchema(data: SeoPageData) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.hero.h1,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: data.hero.intro,
    url: "https://www.nulfinity.com",
    offers: {
      "@type": "Offer",
      url: "https://www.nulfinity.com/#pricing",
    },
  };

  return [faqSchema, softwareSchema];
}

export function SeoLandingPage({ data }: { data: SeoPageData }) {
  const schemas = buildSchema(data);
  return (
    <div className="bg-white">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-gray-100 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            {data.hero.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            {data.hero.h1}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {data.hero.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CalendlyButton source="seo_hero" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Book a Free Demo <ArrowRight size={16} />
            </CalendlyButton>
          </div>
          {data.hero.stats && (
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-gray-200 pt-8">
              {data.hero.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{data.problem.heading}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{data.problem.body}</p>
          <ul className="space-y-3">
            {data.problem.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{data.what.heading}</h2>
          <p className="text-gray-600 leading-relaxed mb-8">{data.what.body}</p>
          {data.what.points && (
            <div className="grid md:grid-cols-2 gap-4">
              {data.what.points.map((p, i) => (
                <div key={i} className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">{data.howItWorks.heading}</h2>
          <div className="space-y-4">
            {data.howItWorks.steps.map((step, i) => {
              const icons = [Mail, Zap, Scissors, FileText, Brain, Download, ArrowDown];
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{data.features.heading}</h2>
            {data.features.subheading && <p className="text-gray-600 max-w-2xl mx-auto">{data.features.subheading}</p>}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.items.map((f, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{data.benefits.heading}</h2>
          {data.benefits.body && <p className="text-gray-600 leading-relaxed mb-6">{data.benefits.body}</p>}
          <ul className="grid md:grid-cols-2 gap-3">
            {data.benefits.items.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* USE CASES */}
      {data.useCases && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{data.useCases.heading}</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {data.useCases.items.map((uc, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{uc.industry}</p>
                  <p className="text-sm text-gray-600 mb-3"><strong className="text-gray-800">Challenge:</strong> {uc.challenge}</p>
                  <p className="text-sm text-green-700 font-medium">✓ {uc.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMPARISON TABLE */}
      {data.comparison && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{data.comparison.heading}</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-6 py-4 font-semibold text-gray-700 w-1/3"></th>
                    <th className="text-center px-6 py-4 font-semibold text-gray-500">Manual Processing</th>
                    <th className="text-center px-6 py-4 font-semibold text-blue-700 bg-blue-50">Nulfinity AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.comparison.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                      <td className="px-6 py-4 text-center text-gray-500">{row.manual}</td>
                      <td className="px-6 py-4 text-center text-blue-700 font-semibold bg-blue-50/40">{row.nulfinity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{data.faq.heading}</h2>
          <FAQAccordion items={data.faq.items} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{data.cta.heading}</h2>
          <p className="text-blue-100 mb-8 leading-relaxed">{data.cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CalendlyButton source="seo_cta" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Book a Free Demo <ArrowRight size={16} />
            </CalendlyButton>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            Also explore: <Link href="/services" onClick={() => track.clickCTA("Platform", "seo_landing_footer")} className="underline hover:text-white">Platform</Link>
          </p>
        </div>
      </section>

    </div>
  );
}

