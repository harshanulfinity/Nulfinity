import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { CheckCircle2, FileSearch, Zap, Shield, Clock, Scale } from "lucide-react";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Intelligent Document Processing | Nulfinity",
  description: "Transform unstructured business documents into structured, actionable data using AI, Machine Learning, OCR, and Generative AI.",
  path: "/services/intelligent-document-processing",
});

export default function IDPPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Intelligent Document Processing (IDP)"
        title="Transform unstructured documents into structured, actionable data."
        description="Powered by AI, Machine Learning, OCR, and Generative AI. Nulfinity's IDP platform processes 50+ document types at enterprise scale."
        actions={<Link href="https://idp.nulfinity.com/IDP/workspace" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Get Started</Link>}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* What is IDP */}
      <section>
        <SectionHeading eyebrow="What is IDP?" title="Beyond OCR: True Document Intelligence" description="Nulfinity IDP understands context, meaning, and relationships within documents. Not just text." />
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <GlowCard>
            <p className="text-gray-700 leading-relaxed">
              Unlike traditional OCR systems that only read text, Nulfinity's IDP platform understands the context, meaning, and relationships within documents. This enables enterprises to automate workflows, reduce manual effort, and make faster business decisions.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              From invoices and contracts to insurance claims, KYC documents, medical records, and logistics paperwork, Nulfinity helps businesses process documents intelligently at scale.
            </p>
          </GlowCard>
          <div className="rounded-lg overflow-hidden">
            <Image src="/data.png" alt="IDP Data Flow" width={600} height={400} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Nulfinity IDP */}
      <section>
        <SectionHeading eyebrow="Why Businesses Choose Nulfinity IDP" title="Key benefits of choosing Nulfinity IDP" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <Zap className="text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Eliminate Operational Bottlenecks</h3>
            <p className="mt-2 text-sm text-gray-600">
              Automate repetitive document-heavy workflows and remove delays caused by manual data entry, verification, and approvals.
            </p>
          </GlowCard>
          <GlowCard>
            <CheckCircle2 className="text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Improve Decision Accuracy</h3>
            <p className="mt-2 text-sm text-gray-600">
              Deliver validated and structured data directly into enterprise systems so teams can make faster and more confident decisions.
            </p>
          </GlowCard>
          <GlowCard>
            <Shield className="text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Enterprise-Grade Compliance & Security</h3>
            <p className="mt-2 text-sm text-gray-600">
              Maintain audit trails, reduce human errors, and protect sensitive business data with secure AI-powered processing.
            </p>
          </GlowCard>
          <GlowCard>
            <Clock className="text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Faster Deployment with Generative AI</h3>
            <p className="mt-2 text-sm text-gray-600">
              Leverage GenAI-powered extraction models to reduce setup complexity and accelerate implementation timelines.
            </p>
          </GlowCard>
          <GlowCard className="md:col-span-2">
            <Scale className="text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Scale Without Limits</h3>
            <p className="mt-2 text-sm text-gray-600">
              Process thousands to millions of documents across multiple formats, languages, and business workflows with consistent accuracy.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* How Nulfinity IDP Works */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <SectionHeading eyebrow="How Nulfinity Intelligent Document Processing Works" title="8-step process for intelligent document processing" />
        <div className="mt-8 space-y-4">
          <GlowCard>
            <h3 className="text-lg font-semibold">1. Email Upload</h3>
            <p className="mt-2 text-sm text-gray-600">
              Upload documents by attaching them to an email.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">2. Integrations</h3>
            <p className="mt-2 text-sm text-gray-600">
              Upload documents via API or other services.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">3. Pre-processing</h3>
            <p className="mt-2 text-sm text-gray-600">
              OCR will be applied when needed.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">4. Splitting</h3>
            <p className="mt-2 text-sm text-gray-600">
              Automatic document splitting is disabled.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">5. Classification</h3>
            <p className="mt-2 text-sm text-gray-600">
              Documents will be automatically classified into document types.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">6. Extraction</h3>
            <p className="mt-2 text-sm text-gray-600">
              Data will be extracted for 1 document type.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">7. Validation</h3>
            <p className="mt-2 text-sm text-gray-600">
              Documents require manual validation.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">8. Data Export</h3>
            <p className="mt-2 text-sm text-gray-600">
              Integrate with your downstream system using our Integrations Agent or our API.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section>
        <SectionHeading eyebrow="Industry Use Cases" title="Industries we serve with IDP solutions" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <h3 className="text-lg font-semibold">Banking & Financial Services</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• KYC automation</li>
              <li>• Loan processing</li>
              <li>• Financial statement extraction</li>
              <li>• Account onboarding</li>
            </ul>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Healthcare</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Patient record digitization</li>
              <li>• Insurance claim processing</li>
              <li>• Medical form extraction</li>
            </ul>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Insurance</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Claims automation</li>
              <li>• Fraud detection</li>
              <li>• Policy document processing</li>
            </ul>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Logistics & Supply Chain</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Bill of lading extraction</li>
              <li>• Customs documentation</li>
              <li>• Invoice automation</li>
            </ul>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Manufacturing</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Quality control documentation</li>
              <li>• Vendor invoice processing</li>
              <li>• Supply chain paperwork automation</li>
            </ul>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Human Resources</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Resume parsing</li>
              <li>• Employee onboarding</li>
              <li>• HR document management</li>
            </ul>
          </GlowCard>
        </div>
      </section>

      {/* Why Nulfinity Instead of Building In-House */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <SectionHeading eyebrow="Why Nulfinity Instead of Building In-House?" title="Benefits of choosing Nulfinity over in-house development" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <h3 className="text-lg font-semibold">Faster Time to Market</h3>
            <p className="mt-2 text-sm text-gray-600">
              Avoid months of development and deployment with a ready-to-scale enterprise platform.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Lower Infrastructure Costs</h3>
            <p className="mt-2 text-sm text-gray-600">
              No need to build separate OCR, AI, validation, orchestration, and monitoring systems.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Enterprise AI Accuracy</h3>
            <p className="mt-2 text-sm text-gray-600">
              Nulfinity combines OCR, ML, GenAI, and contextual validation to deliver higher extraction reliability.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Built-In Governance & Security</h3>
            <p className="mt-2 text-sm text-gray-600">
              Enterprise-grade compliance, auditability, and secure AI workflows from day one.
            </p>
          </GlowCard>
          <GlowCard className="md:col-span-2">
            <h3 className="text-lg font-semibold">Continuous Learning</h3>
            <p className="mt-2 text-sm text-gray-600">
              Our AI models improve with every document processed and every human correction.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* The Future of Document Automation */}
      <section>
        <SectionHeading eyebrow="The Future of Document Automation" title="The future of enterprise operations with intelligent document automation" />
        <div className="mt-8">
          <GlowCard>
            <p className="text-lg text-gray-600">
              At Nulfinity, we believe the future of enterprise operations lies in intelligent, autonomous systems where documents are no longer operational bottlenecks but real-time decision engines.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              By combining Intelligent Document Processing with Agentic AI Automation, businesses can unlock Faster operations, Reduced costs, Higher accuracy, Better customer experiences, and Scalable enterprise automation.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <SectionHeading eyebrow="Frequently Asked Questions" title="Common questions about Nulfinity IDP" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <h3 className="font-semibold">What makes Nulfinity IDP different from traditional OCR?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Traditional OCR only extracts visible text. Nulfinity IDP understands document context, validates information, and automates downstream workflows using AI and Generative AI.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-semibold">Can Nulfinity process handwritten documents?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Yes. Our platform supports handwritten text recognition using Intelligent Character Recognition (ICR).
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-semibold">How accurate is Nulfinity IDP?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Accuracy depends on document quality and workflow complexity, but AI validation and human-in-the-loop mechanisms continuously improve performance.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-semibold">Does Nulfinity integrate with existing enterprise systems?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Yes. We support API integrations and connectors for ERP, CRM, RPA, and workflow platforms.
            </p>
          </GlowCard>
          <GlowCard className="md:col-span-2">
            <h3 className="font-semibold">Can the platform handle unstructured documents?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Absolutely. Nulfinity is designed to process structured, semi-structured, and completely unstructured documents using LLMs and GenAI models.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 rounded-2xl p-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your document workflows?</h2>
        <p className="text-blue-100 mb-6">Contact us to learn how Nulfinity IDP can accelerate your business.</p>
        <Link href="https://idp.nulfinity.com/IDP/workspace" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Get Started</Link>
      </section>
      </div>
    </div>
  );
}
