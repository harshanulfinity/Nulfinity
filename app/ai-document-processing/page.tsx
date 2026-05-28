import { SeoLandingPage, type SeoPageData } from "@/components/seo/seo-landing-page";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "AI Document Processing Platform | Nulfinity",
  description: "AI document processing that extracts, validates, and routes data from any business document. API-first, human-in-the-loop, enterprise-ready.",
  path: "/ai-document-processing",
});

const data: SeoPageData = {
  hero: {
    badge: "AI Document Processing",
    h1: "AI Document Processing: The Smarter Way to Handle Business Documents at Scale",
    intro: "Nulfinity's AI document processing platform reads every document your business receives — invoices, contracts, forms, claims — extracts the data you need, validates it, and delivers it to your systems. Automatically. Accurately. At any volume.",
    stats: [
      { value: "95%+", label: "Accuracy" },
      { value: "10x", label: "Faster Than Manual" },
      { value: "50+", label: "Document Types" },
      { value: "1-2wk", label: "Deployment" },
    ],
  },
  problem: {
    heading: "The Document Problem Every Business Faces",
    body: "Every business runs on documents. Invoices, purchase orders, contracts, applications, claims, forms. And most businesses still process them the same way they did 20 years ago — with people reading and typing. The volume grows. The team grows. The errors accumulate. And the backlog never clears.",
    bullets: [
      "Document volumes grow every year but team capacity does not scale proportionally",
      "Manual processing introduces errors that are expensive to find and fix downstream",
      "Siloed document handling creates bottlenecks across AP, HR, Legal, and Operations",
      "No standardised data means inconsistent records and poor analytical visibility",
      "Compliance and audit requirements demand accuracy and traceability that manual processes cannot provide",
    ],
  },
  what: {
    heading: "What Is AI Document Processing?",
    body: "AI document processing is the use of artificial intelligence — including OCR, machine learning, and natural language processing — to automatically read, classify, extract, and validate data from business documents. It replaces manual data entry with an intelligent pipeline that handles documents from the moment they arrive to the moment the data is in your systems. Nulfinity is a complete AI document processing platform: it ingests documents from any source, classifies them, extracts specific fields with AI, validates the output against your business rules, routes exceptions to your team, and delivers structured data to your ERP, CRM, or any downstream system.",
    points: [
      { title: "AI-Powered Extraction", desc: "Extracts fields by semantic understanding — vendor, amount, date, clause — not by fixed position." },
      { title: "Automated Classification", desc: "Identifies document types automatically — no manual sorting or routing needed." },
      { title: "Rules-Based Validation", desc: "Configurable validation catches errors, anomalies, and missing fields before data enters your systems." },
      { title: "Human-in-the-Loop", desc: "Exception-based review keeps humans in control of edge cases without bottlenecking routine processing." },
      { title: "System Integration", desc: "Push structured data to any ERP, CRM, or database via REST API, webhook, or native connector." },
      { title: "Continuous Improvement", desc: "The AI learns from every human correction — improving accuracy on your specific document set over time." },
    ],
  },
  howItWorks: {
    heading: "How AI Document Processing Works End-to-End",
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
    heading: "Complete AI Document Processing in One Platform",
    items: [
      { title: "Universal Document Ingestion", desc: "Email, API, shared drive, scanner — every document source in a single pipeline." },
      { title: "Multi-model OCR Engine", desc: "Combines multiple OCR engines for maximum accuracy across document quality and type." },
      { title: "AI Classification", desc: "Automatically identifies 50+ document types. Easily extend to custom types." },
      { title: "Semantic Extraction", desc: "Extracts fields by meaning, not position. Works across all vendor layouts and formats." },
      { title: "Configurable Validation", desc: "Build validation rules in minutes. Cross-field checks, duplicate detection, threshold alerts." },
      { title: "Developer-Friendly API", desc: "Submit documents, retrieve results, subscribe to webhooks. Full REST API with documentation." },
    ],
  },
  benefits: {
    heading: "What AI Document Processing Delivers",
    body: "Organisations that automate document processing with AI see measurable improvements across speed, cost, accuracy, and compliance.",
    items: [
      "Process documents in seconds instead of minutes",
      "Reduce per-document processing cost by up to 70%",
      "Achieve consistent data quality across all document types",
      "Scale without proportional headcount growth",
      "Improve compliance through automated audit trails",
      "Free staff for high-value work — not data entry",
      "Get real-time visibility across your entire document pipeline",
      "Go live in days, not months",
    ],
  },
  useCases: {
    heading: "AI Document Processing Across Functions",
    items: [
      { industry: "Finance & AP", challenge: "High-volume invoices consuming team capacity with manual entry", outcome: "Automated extraction and ERP posting reduces processing time by 10x" },
      { industry: "HR & Recruitment", challenge: "Resume screening bottlenecked by manual document review", outcome: "AI extracts and structures candidate data for instant database entry and matching" },
      { industry: "Operations & Logistics", challenge: "Shipping and customs documents in multiple languages and formats", outcome: "Multi-language OCR processes all formats in a single automated pipeline" },
    ],
  },
  faq: {
    heading: "AI Document Processing FAQs",
    items: [
      { q: "What types of documents can AI document processing handle?", a: "Nulfinity handles invoices, purchase orders, contracts, KYC forms, insurance claims, resumes, bank statements, receipts, tax forms, shipping documents, and more — 50+ document types out of the box, with support for custom types." },
      { q: "How accurate is AI document processing?", a: "Nulfinity achieves 95%+ extraction accuracy across standard business document types. Accuracy improves over time as the AI learns from your team's corrections on your specific documents." },
      { q: "What happens when the AI makes a mistake?", a: "Every extraction carries a confidence score. Low-confidence fields are flagged and routed for human review before the data is delivered to any downstream system. This human-in-the-loop approach ensures errors are caught before they cause problems." },
      { q: "How long does it take to implement AI document processing?", a: "Nulfinity is designed for rapid deployment. Most document types are live within 1–2 weeks. Complex enterprise deployments with custom ERP integrations typically take 3–6 weeks." },
      { q: "Is on-premise deployment available?", a: "Yes. Nulfinity can be deployed on your private cloud or on-premise infrastructure for organisations with data residency or regulatory requirements." },
    ],
  },
  cta: {
    heading: "Start Processing Documents Intelligently",
    body: "Try Nulfinity's live tools with no sign-up, or book a demo to see the full platform process your document types end-to-end.",
  },
};

export default function Page() {
  return <SeoLandingPage data={data} />;
}
