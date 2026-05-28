import { SeoLandingPage, type SeoPageData } from "@/components/seo/seo-landing-page";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Business Document Automation Platform | Nulfinity",
  description: "Automate business document workflows across Finance, HR, Legal, and Operations. AI extraction, validation, routing, and ERP integration in one platform.",
  path: "/business-document-automation",
});

const data: SeoPageData = {
  hero: {
    badge: "Business Document Automation",
    h1: "Business Document Automation: One Platform for Every Document Across Every Department",
    intro: "Invoices in Finance. Contracts in Legal. Onboarding forms in HR. Shipping documents in Operations. Nulfinity automates document workflows across your entire organisation — with one platform, one API, and one audit trail.",
    stats: [
      { value: "50+", label: "Document Types" },
      { value: "All", label: "Departments Covered" },
      { value: "1 API", label: "For All Workflows" },
      { value: "1-2wk", label: "Go Live" },
    ],
  },
  problem: {
    heading: "Document Chaos Is a Business-Wide Problem",
    body: "Most organisations handle documents differently in every department. Finance has one tool. HR has another. Legal uses email folders. Operations uses spreadsheets. There is no unified way to process, track, or integrate document data — and the cost of this fragmentation is enormous.",
    bullets: [
      "Siloed document workflows mean no cross-departmental visibility into document status",
      "Multiple point solutions for different document types multiply cost and maintenance burden",
      "Manual handoffs between departments introduce delays, errors, and compliance gaps",
      "No single system of record for document data across the organisation",
      "Audit and compliance requirements are harder to meet with fragmented, inconsistent processes",
    ],
  },
  what: {
    heading: "What Is Business Document Automation?",
    body: "Business document automation is the use of AI, OCR, and workflow technology to automate the processing of all document types across every business function — not just one department. A unified platform handles documents from ingest to integration, applying the right extraction model and validation rules for each document type, and routing the output to the right system. Nulfinity is designed as a business-wide document automation platform: one system that Finance uses for invoices, HR uses for onboarding documents, Legal uses for contracts, and Operations uses for shipping documents — with unified reporting, a single API, and one audit trail across all workflows.",
    points: [
      { title: "Finance & AP", desc: "Invoices, purchase orders, expense claims, bank statements — all processed automatically." },
      { title: "HR & Recruitment", desc: "Onboarding forms, offer letters, resumes, ID documents — extracted and loaded to your HRMS." },
      { title: "Legal & Compliance", desc: "Contracts, NDAs, regulatory filings — classified, extracted, and tracked in structured form." },
      { title: "Operations & Logistics", desc: "Shipping documents, customs declarations, delivery notes — processed multi-language at volume." },
      { title: "Customer-facing Documents", desc: "KYC forms, applications, onboarding documents — processed fast for better customer experience." },
      { title: "Finance & Audit", desc: "Unified document repository with complete audit trails for all processed documents." },
    ],
  },
  howItWorks: {
    heading: "How Business Document Automation Works in Nulfinity",
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
    heading: "Business Document Automation Platform Features",
    items: [
      { title: "Multi-department Document Support", desc: "One platform handles invoices, contracts, HR forms, KYC documents, and shipping documents." },
      { title: "Configurable Extraction Profiles", desc: "Define what fields to extract for each document type — no code required." },
      { title: "Department-level Workflows", desc: "Configure separate approval and routing workflows for each department's document types." },
      { title: "Unified API", desc: "Single REST API for all document types. One integration for all your downstream systems." },
      { title: "Cross-department Analytics", desc: "Unified reporting on document volumes, costs, processing times, and exception rates." },
      { title: "Scalable Architecture", desc: "Handles volume spikes without configuration changes. Grows with your business." },
    ],
  },
  benefits: {
    heading: "Why Business-Wide Document Automation Pays",
    items: [
      "Eliminate manual document processing across all departments — not just one",
      "Reduce the cost and complexity of maintaining multiple point solutions",
      "Achieve consistent data quality and audit trail across all document types",
      "Give leadership a single view of document processing performance across the business",
      "Accelerate digital transformation with one platform, not ten integrations",
      "Reduce compliance risk with unified, automated audit logging",
      "Deploy new document types in hours — not weeks of custom development",
      "One vendor, one contract, one support relationship",
    ],
  },
  useCases: {
    heading: "Business Document Automation Across Departments",
    items: [
      { industry: "Finance", challenge: "Invoices processed manually by AP team — high cost and cycle time", outcome: "Automated extraction and ERP posting eliminates AP data entry" },
      { industry: "Human Resources", challenge: "New hire onboarding documents arriving in multiple formats with manual data loading", outcome: "Automated extraction loads structured employee data to HRMS on day one" },
      { industry: "Legal & Compliance", challenge: "Contract data living in PDF files with no searchable, structured database", outcome: "AI extracts key clauses, dates, and parties into a structured contract register" },
    ],
  },
  faq: {
    heading: "Business Document Automation FAQs",
    items: [
      { q: "Can one platform really handle all document types across different departments?", a: "Yes. Nulfinity uses configurable extraction profiles — you define what fields to extract for each document type. The underlying AI and OCR engine handles any document format, and different validation rules and routing workflows can be configured per document type and department." },
      { q: "How is Nulfinity different from department-specific document tools?", a: "Department-specific tools solve one problem well but create integration challenges, data silos, and multiple support relationships. Nulfinity is a horizontal platform — one system that every department configures for their specific document types, with unified reporting and a single API for all downstream integration." },
      { q: "How long does it take to add a new document type?", a: "For standard business document types, configuration typically takes hours — not weeks. You define the fields to extract, the validation rules, and the routing logic through a configuration interface. Novel document types may require a short training period for the AI model." },
      { q: "What integration options are available for different departments?", a: "Nulfinity integrates with ERP systems for Finance (SAP, Oracle, Dynamics), HRMS platforms for HR (Workday, Darwinbox, GreytHR), CRM systems for Sales, and any other system via REST API. Different departments can receive their document data in different systems from the same pipeline." },
      { q: "Is the platform suitable for regulated industries?", a: "Yes. Nulfinity supports private cloud and on-premise deployment for organisations with data residency or regulatory requirements. The platform is designed with GDPR, HIPAA-alignment, and Indian DPDP Act compliance in mind." },
    ],
  },
  cta: {
    heading: "Automate Documents Across Your Entire Organisation",
    body: "Book a demo and we will walk through how Nulfinity handles your specific document mix — across Finance, HR, Legal, and Operations.",
  },
};

export default function Page() {
  return <SeoLandingPage data={data} />;
}
