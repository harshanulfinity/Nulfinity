import Link from "next/link";
import { makeMetadata } from "@/lib/seo";
import { ArrowRight, Building2, Heart, Truck } from "lucide-react";
import { CalendlyButton } from "@/components/ui/calendly-button";

export const metadata = makeMetadata({
  title: "Case Studies & Use Cases | Nulfinity",
  description: "See how Nulfinity's AI document processing applies to Finance, Healthcare, and Logistics workflows. Real use cases, real outcomes.",
  path: "/case-studies",
});

const useCases = [
  {
    Icon: Building2,
    industry: "Finance & Accounting",
    docType: "Vendor Invoices, Purchase Orders, Bank Statements",
    problem:
      "AP teams processing hundreds of invoices manually every week face data entry bottlenecks, approval delays, and costly errors that compound at month-end.",
    howNulfinity:
      "Nulfinity extracts every invoice field — vendor, amounts, line items, due dates — matches against POs, and routes to your ERP automatically. Your AP team only handles exceptions.",
    outcomes: [
      "Reduce invoice processing time from days to hours",
      "Near-zero manual data entry across the AP function",
      "Direct integration with SAP, Tally, QuickBooks, or Oracle",
      "Duplicate invoice detection on every submission",
    ],
    link: "/invoice-processing-automation",
  },
  {
    Icon: Heart,
    industry: "Healthcare",
    docType: "Insurance Claims, Patient Records, Discharge Summaries",
    problem:
      "Claims teams deal with high document volumes, strict accuracy requirements, and significant revenue loss from rejection due to manual data entry errors.",
    howNulfinity:
      "Nulfinity captures all claim fields, validates against your business rules, and routes exceptions for human review — on a HIPAA-aligned private deployment with no data leaving your environment.",
    outcomes: [
      "Faster claims turnaround and lower rejection rates",
      "Secure, private cloud deployment for sensitive patient data",
      "Automated routing to claims reviewers for exception handling",
      "Full audit trail for every processed document",
    ],
    link: "/automated-document-processing",
  },
  {
    Icon: Truck,
    industry: "Logistics & Supply Chain",
    docType: "Shipping Documents, Customs Declarations, Delivery Notes",
    problem:
      "High-volume, multi-language shipping documents create customs delays, compliance risk, and manual handoff bottlenecks between Ops, Compliance, and Finance teams.",
    howNulfinity:
      "Multi-language OCR and extraction pipelines process documents across origin languages automatically, with routing to the right team and real-time exception alerts.",
    outcomes: [
      "Process shipping documents in any language without specialist staff",
      "Reduce customs errors and shipment hold incidents",
      "Automated routing between Ops, Compliance, and Finance",
      "End-to-end audit trail for customs and compliance reporting",
    ],
    link: "/automated-document-processing",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-gray-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Use Cases
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Nulfinity Can Do for Your Industry
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are currently onboarding our first enterprise partners. These use cases illustrate how Nulfinity applies to document-heavy workflows across Finance, Healthcare, and Logistics.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {useCases.map((uc, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <uc.Icon className="text-blue-600" size={20} />
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {uc.industry}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-3 mb-5">
                Documents: {uc.docType}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">The Problem</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{uc.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">How Nulfinity Helps</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{uc.howNulfinity}</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 border-t border-gray-100 pt-5 mb-5">
                {uc.outcomes.map((o, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold mt-0.5">✓</span> {o}
                  </li>
                ))}
              </ul>
              <Link
                href={uc.link}
                className="inline-flex items-center gap-1 text-sm text-blue-600 font-semibold hover:underline"
              >
                Learn more about this use case <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Early Partner CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Become One of Our First Case Studies
          </h2>
          <p className="text-blue-100 mb-8">
            We are actively onboarding early enterprise partners. Book a demo and we will process a sample of your actual documents — showing you exactly what automated extraction looks like before any commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CalendlyButton className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Book a Free Demo <ArrowRight size={16} />
            </CalendlyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
