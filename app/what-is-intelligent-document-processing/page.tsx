import { SeoLandingPage, type SeoPageData } from "@/components/seo/seo-landing-page";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "What Is Intelligent Document Processing?",
  description: "Intelligent Document Processing (IDP) uses AI and OCR to automatically extract, classify, and validate data from business documents. Learn how it works.",
  path: "/what-is-intelligent-document-processing",
});

const data: SeoPageData = {
  hero: {
    badge: "Intelligent Document Processing",
    h1: "What Is Intelligent Document Processing (IDP)?",
    intro: "Intelligent Document Processing is the AI-powered technology that reads, understands, and extracts structured data from any business document — invoices, contracts, forms, receipts — automatically and at scale. It replaces manual data entry with a pipeline that is faster, more accurate, and infinitely scalable.",
    stats: [
      { value: "95%+", label: "Extraction Accuracy" },
      { value: "10x", label: "Faster Than Manual" },
      { value: "70%", label: "Cost Reduction" },
      { value: "50+", label: "Document Types Supported" },
    ],
  },
  problem: {
    heading: "Why Manual Document Processing Is a Business Problem",
    body: "Every organisation processes hundreds or thousands of documents every week — invoices, purchase orders, claims, onboarding forms, contracts. The traditional approach is to have employees manually read each document and type the data into a system. This is expensive, slow, and error-prone.",
    bullets: [
      "An average employee takes 4–8 minutes to manually process a single invoice",
      "Manual data entry has an error rate of 1–4%, leading to payment delays, compliance failures, and reconciliation costs",
      "Document backlogs build up fast — 1,000 invoices per month requires significant headcount just for data entry",
      "Scaling document volume means hiring more people, not automating smarter",
      "No real-time visibility into document status, exceptions, or processing bottlenecks",
    ],
  },
  what: {
    heading: "What Is Intelligent Document Processing?",
    body: "Intelligent Document Processing (IDP) is a category of enterprise software that combines Optical Character Recognition (OCR), Artificial Intelligence (AI), and Machine Learning (ML) to automate the extraction, classification, and validation of data from unstructured documents. Unlike simple OCR tools that only convert images to text, IDP understands document context — it knows that a number next to 'Total Amount Due' is an invoice total, not a phone number. IDP platforms like Nulfinity process documents end-to-end: ingesting them from email or API, applying OCR, classifying the document type, extracting key fields with AI, validating the data against business rules, routing exceptions for human review, and exporting structured output to your ERP or downstream system.",
    points: [
      { title: "Document Classification", desc: "AI identifies whether a document is an invoice, contract, KYC form, or receipt — without any manual tagging." },
      { title: "Data Extraction", desc: "Key fields like vendor name, amounts, dates, and line items are captured and structured automatically." },
      { title: "Validation Engine", desc: "Business rules check extracted data for errors, duplicates, and anomalies before it reaches your systems." },
      { title: "Human-in-the-Loop", desc: "Low-confidence extractions are routed to your team for review. Every correction trains the AI model." },
      { title: "Workflow Automation", desc: "Approve, route, and export documents automatically based on content — without manual intervention." },
      { title: "System Integration", desc: "Push structured data directly to SAP, Oracle, Dynamics, or any system via REST API or webhook." },
    ],
  },
  howItWorks: {
    heading: "How Does Intelligent Document Processing Work?",
    steps: [
      { title: "Email Upload", desc: "Upload documents by attaching them to an email." },
      { title: "Integrations", desc: "Upload documents via API or other services." },
      { title: "Pre-processing", desc: "OCR will be applied when needed." },
      { title: "Splitting", desc: "Automatic document splitting is disabled." },
      { title: "Classification", desc: "Documents will be automatically classified into document types." },
      { title: "Extraction", desc: "Data will be extracted for 1 document type." },
      { title: "Validation", desc: "Documents require manual validation." },
      { title: "Data Export", desc: "Integrate with your downstream system using our Integrations Agent or our API." },
    ],
  },
  features: {
    heading: "Nulfinity IDP Platform Capabilities",
    subheading: "Everything needed to automate document workflows at enterprise scale.",
    items: [
      { title: "Multi-engine OCR", desc: "Handles scanned PDFs, images, handwritten text, low-resolution documents, and multi-language content." },
      { title: "AI Document Classification", desc: "Automatically identifies 50+ document types with confidence scoring. No manual tagging required." },
      { title: "Structured Data Extraction", desc: "Captures key-value pairs, tables, line items, and nested fields — not just raw text." },
      { title: "Business Rules Validation", desc: "Configurable validation rules catch errors, duplicates, and anomalies before data enters your systems." },
      { title: "Human-in-the-Loop Review", desc: "Exception-based review workflow. Reviewers see original document and extracted data side by side." },
      { title: "REST API & Webhooks", desc: "Fully documented API for custom integration. Native connectors for SAP, Dynamics, Oracle, and more." },
    ],
  },
  benefits: {
    heading: "Business Benefits of Intelligent Document Processing",
    body: "Organisations that deploy IDP see measurable improvements across operations, finance, and compliance functions.",
    items: [
      "Reduce document processing time from hours to minutes",
      "Cut data entry costs by up to 70% without headcount reduction",
      "Improve data accuracy with AI extraction and rule-based validation",
      "Scale document volume without scaling your team",
      "Achieve real-time visibility into every document in the pipeline",
      "Reduce compliance risk through automated audit trails",
      "Integrate with existing ERP and business systems on day one",
      "Deploy in days, not months — no lengthy implementation required",
    ],
  },
  useCases: {
    heading: "Intelligent Document Processing Across Industries",
    items: [
      { industry: "Finance & Accounting", challenge: "High-volume invoice processing consuming AP team bandwidth", outcome: "Automated extraction routes invoices to the right approver with zero manual data entry" },
      { industry: "Healthcare", challenge: "Insurance claim errors causing rejections and revenue loss", outcome: "Validated claims data reduces rejections and speeds up reimbursement cycles" },
      { industry: "Logistics", challenge: "Customs declarations in multiple languages causing shipment delays", outcome: "Multi-language OCR processes shipping documents automatically across origin countries" },
    ],
  },
  comparison: {
    heading: "IDP vs. Manual Document Processing",
    rows: [
      { label: "Processing Speed", manual: "4–8 mins per document", nulfinity: "Under 30 seconds" },
      { label: "Data Accuracy", manual: "96–99% (human error)", nulfinity: "95%+ with AI validation" },
      { label: "Scalability", manual: "Requires more headcount", nulfinity: "Handles 10,000+ docs/hour" },
      { label: "Cost Per Document", manual: "₹15–₹40 per document", nulfinity: "₹1–₹3 per document" },
      { label: "Audit Trail", manual: "Manual logs, inconsistent", nulfinity: "Automatic, tamper-proof" },
      { label: "Integration", manual: "Manual re-entry into systems", nulfinity: "Direct ERP push via API" },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions About IDP",
    items: [
      { q: "What types of documents can IDP process?", a: "IDP platforms like Nulfinity handle invoices, purchase orders, contracts, KYC documents, insurance claims, resumes, bank statements, receipts, tax forms, shipping documents, and more. Nulfinity supports 50+ document types out of the box, with the ability to add custom types." },
      { q: "How is IDP different from basic OCR?", a: "Basic OCR converts document images to text. IDP goes further — it understands document structure, classifies document types, extracts specific fields (not just text), validates the data against business rules, and integrates the output into downstream systems." },
      { q: "How long does it take to implement an IDP platform?", a: "Nulfinity is designed for rapid deployment. Most document types can be configured and live within 1–2 weeks. Complex enterprise deployments with custom ERP integrations typically take 3–6 weeks." },
      { q: "What is human-in-the-loop in IDP?", a: "Human-in-the-loop (HITL) is an approach where low-confidence extractions are flagged for human review rather than processed automatically. This ensures accuracy for edge cases while keeping manual effort to a minimum. In Nulfinity, reviewers see the original document and extracted fields side by side, and every correction trains the model." },
      { q: "Is IDP suitable for small businesses?", a: "Yes. While IDP is particularly valuable at high document volumes, even businesses processing a few hundred documents per month benefit significantly from automation. Nulfinity offers plans that scale from SMB to enterprise." },
      { q: "Can IDP handle handwritten documents?", a: "Yes. Nulfinity's multi-engine OCR includes handwriting recognition for printed forms with handwritten fills — common in healthcare, legal, and logistics documents." },
    ],
  },
  cta: {
    heading: "See Intelligent Document Processing in Action",
    body: "Book a 30-minute demo and we'll process a sample of your actual documents live — showing you exactly what the extraction output looks like before you commit to anything.",
  },
};

export default function Page() {
  return <SeoLandingPage data={data} />;
}
