import { SeoLandingPage, type SeoPageData } from "@/components/seo/seo-landing-page";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "OCR Software for Enterprise Documents | Nulfinity",
  description: "Enterprise OCR software that extracts structured data from PDFs, scanned images, and handwritten documents. AI-powered, 95%+ accuracy, API-first.",
  path: "/ocr-software",
});

const data: SeoPageData = {
  hero: {
    badge: "OCR Software",
    h1: "Enterprise OCR Software That Goes Beyond Text Recognition",
    intro: "Most OCR tools convert documents to text and stop there. Nulfinity's OCR engine reads documents, understands their structure, and extracts the specific fields your business needs — with 95%+ accuracy and direct ERP integration.",
    stats: [
      { value: "95%+", label: "OCR Accuracy" },
      { value: "50+", label: "Document Types" },
      { value: "30s", label: "Per Document" },
      { value: "API", label: "First Architecture" },
    ],
  },
  problem: {
    heading: "Why Basic OCR Software Falls Short for Business Use",
    body: "Optical Character Recognition has been around for decades, but most OCR tools were built for simple text extraction — not for the complex, variable, high-volume document workflows that enterprises actually run.",
    bullets: [
      "Basic OCR converts documents to text but does not understand what that text means",
      "Fixed-template OCR breaks when vendor layouts change or new document formats arrive",
      "No built-in validation means OCR errors flow silently into your systems",
      "Legacy OCR tools lack API access, making integration with modern systems difficult",
      "Poor performance on low-quality scans, handwritten text, and multi-language documents",
      "No audit trail or confidence scoring — you never know when the OCR got something wrong",
    ],
  },
  what: {
    heading: "What Is AI-Powered OCR Software?",
    body: "Modern OCR software combines traditional optical character recognition with AI and machine learning to do more than just read text. It understands document structure, identifies field types, and extracts specific data points — not just a wall of text. Nulfinity's OCR engine handles documents that traditional tools struggle with: low-resolution scans, rotated pages, mixed fonts, tables, handwriting, and multi-language content. The extracted data is structured, validated, and integration-ready.",
    points: [
      { title: "Multi-engine OCR", desc: "Combines multiple OCR engines to maximise accuracy across document quality levels and types." },
      { title: "Intelligent Field Extraction", desc: "Understands document context to extract specific fields — not just raw text output." },
      { title: "Handwriting Recognition", desc: "Processes handwritten form fills common in healthcare, legal, and logistics documents." },
      { title: "Multi-language Support", desc: "Reads documents in English, Hindi, Tamil, and other regional languages." },
      { title: "Table & Line Item Extraction", desc: "Captures structured tables with row/column relationships intact — critical for invoices and financial documents." },
      { title: "Confidence Scoring", desc: "Every extracted field carries a confidence score. Low-confidence fields are flagged for review rather than silently passed through." },
    ],
  },
  howItWorks: {
    heading: "How Nulfinity OCR Works",
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
    heading: "Nulfinity OCR Software Capabilities",
    items: [
      { title: "PDF & Image Processing", desc: "Handles text-based PDFs, scanned PDFs, JPG, PNG, TIFF, and multi-page documents." },
      { title: "Handwriting Recognition", desc: "Reads printed and handwritten text from forms, applications, and mixed-format documents." },
      { title: "Table Extraction", desc: "Captures tables with row and column structure preserved — essential for invoice line items and financial data." },
      { title: "Batch Processing", desc: "Process thousands of documents per hour through the same pipeline — at any scale." },
      { title: "REST API Access", desc: "Developer-friendly API to integrate OCR capabilities into any application or workflow." },
      { title: "Audit & Confidence Logs", desc: "Full processing logs with confidence scores, field-level accuracy, and exception tracking." },
    ],
  },
  benefits: {
    heading: "Why Choose Nulfinity Over Traditional OCR Software",
    items: [
      "Higher accuracy on real-world documents — not just clean, formatted PDFs",
      "Understands document context, not just character shapes",
      "Built-in validation catches OCR errors before they enter your systems",
      "Scales from 100 to 100,000+ documents per month without reconfiguration",
      "API-first design for easy integration with any existing system",
      "Supports multiple languages including regional Indian languages",
      "Faster implementation than legacy enterprise OCR platforms",
      "No per-page pricing — predictable costs that scale with your business",
    ],
  },
  comparison: {
    heading: "Nulfinity vs. Traditional OCR Software",
    rows: [
      { label: "Accuracy on Real Documents", manual: "70–85% (variable)", nulfinity: "95%+ with AI validation" },
      { label: "Handles Handwriting", manual: "Limited or none", nulfinity: "Yes, across form types" },
      { label: "Table Extraction", manual: "Basic, often broken", nulfinity: "Structured, row/col aware" },
      { label: "Validation Layer", manual: "Not included", nulfinity: "Built-in with rules engine" },
      { label: "API Access", manual: "Legacy SOAP or none", nulfinity: "Modern REST API" },
      { label: "Implementation Time", manual: "Months", nulfinity: "Days to weeks" },
    ],
  },
  faq: {
    heading: "OCR Software FAQs",
    items: [
      { q: "What is OCR software used for in business?", a: "OCR software is used to convert document images and scanned PDFs into machine-readable text and structured data. In business, it automates data entry from invoices, contracts, forms, receipts, and any other document type — eliminating the need for manual typing." },
      { q: "What is the difference between OCR and AI document processing?", a: "OCR (Optical Character Recognition) converts images of text into machine-readable text. AI document processing goes further — it understands what that text means, extracts specific fields, validates the data, and integrates it into downstream systems. Nulfinity combines both." },
      { q: "Can OCR software handle poor quality scans?", a: "Nulfinity's pre-processing pipeline specifically addresses poor quality inputs: it corrects document orientation, enhances contrast, sharpens blurry text, and normalises resolution before OCR is applied. This significantly improves accuracy on real-world document quality." },
      { q: "Does Nulfinity support documents in Indian languages?", a: "Yes. Nulfinity supports OCR and extraction for documents in English, Hindi, Tamil, Telugu, and other regional languages — critical for processing government documents, KYC forms, and supplier invoices in India." },
      { q: "Is Nulfinity OCR an API-only product?", a: "No. Nulfinity offers both an API for developers and a full web platform for business users. Your team can review and manage documents through the platform, while developers can integrate the OCR capabilities into any application via REST API." },
    ],
  },
  cta: {
    heading: "See Nulfinity OCR Process Your Documents Live",
    body: "Upload a document to our live tool and see structured extraction output in under 30 seconds. No sign-up required.",
  },
};

export default function Page() {
  return <SeoLandingPage data={data} />;
}
