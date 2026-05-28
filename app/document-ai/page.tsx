import { SeoLandingPage, type SeoPageData } from "@/components/seo/seo-landing-page";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Document AI: AI-Powered Document Understanding | Nulfinity",
  description: "Document AI uses machine learning to read, classify, and extract data from any business document. See how Nulfinity's Document AI platform works.",
  path: "/document-ai",
});

const data: SeoPageData = {
  hero: {
    badge: "Document AI",
    h1: "Document AI: How Artificial Intelligence Reads and Understands Your Business Documents",
    intro: "Document AI goes beyond OCR. It understands what a document means — not just what it says. Nulfinity's Document AI platform classifies, extracts, validates, and routes data from any document type, automatically and at scale.",
    stats: [
      { value: "50+", label: "Document Types" },
      { value: "95%+", label: "AI Accuracy" },
      { value: "< 30s", label: "End-to-End" },
      { value: "API", label: "First Platform" },
    ],
  },
  problem: {
    heading: "Why Traditional Document Tools Can't Keep Up",
    body: "Business documents are unstructured by nature. Every vendor formats their invoice differently. Every form uses a different layout. Every contract has different clauses in different positions. Traditional software — rule-based parsers, fixed-template OCR, manual data entry — breaks down when document variety is high and volume is growing.",
    bullets: [
      "Rule-based document parsers require a custom template for every document format — maintenance is unsustainable at scale",
      "Simple OCR extracts text but has no understanding of what fields mean or where they belong",
      "Human data entry is accurate but expensive, slow, and impossible to scale",
      "No existing tool handles the full pipeline: ingestion, classification, extraction, validation, and integration",
      "AI models from hyperscalers (AWS, Google, Azure) require significant ML expertise to configure and maintain",
    ],
  },
  what: {
    heading: "What Is Document AI?",
    body: "Document AI refers to the application of machine learning and natural language processing to read, understand, and extract structured data from unstructured business documents. Unlike basic OCR — which simply converts images to text — Document AI understands document context. It knows that '£12,450.00' next to 'Total Due' is a payment amount, not a random number. It can identify whether a document is an invoice or a purchase order without being told. It can extract a table of line items and preserve the row-column relationship of every cell. Nulfinity is a purpose-built Document AI platform for enterprise document workflows — built to handle diverse formats, high volumes, and complex validation requirements without requiring ML expertise from your team.",
    points: [
      { title: "Document Classification", desc: "AI models classify documents into types — invoice, contract, KYC form, claim — with confidence scoring." },
      { title: "Semantic Field Extraction", desc: "Fields are identified by meaning, not position. Works on any layout, any vendor, any format." },
      { title: "Table & Structure Understanding", desc: "Extracts tables with full row/column awareness — not just flattened text." },
      { title: "Multi-modal Processing", desc: "Handles text PDFs, scanned images, photographs, and handwritten documents in a single pipeline." },
      { title: "Continuous Learning", desc: "Every human correction feeds back into the model. Accuracy improves over time on your specific document set." },
      { title: "Configurable Validation", desc: "Business rules validate extracted data before it reaches any downstream system." },
    ],
  },
  howItWorks: {
    heading: "How Nulfinity Document AI Works",
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
    heading: "Nulfinity Document AI Features",
    subheading: "A complete Document AI stack — without the ML engineering overhead.",
    items: [
      { title: "Zero-template Extraction", desc: "AI extracts data from any document layout without requiring a custom template for every format." },
      { title: "Confidence Scoring", desc: "Every extracted field carries a confidence score. Low-confidence extractions are surfaced for review." },
      { title: "Multi-language Support", desc: "Process documents in English, Hindi, Tamil, and other regional and international languages." },
      { title: "Active Learning Pipeline", desc: "Human corrections are fed back into the model. Your AI gets more accurate on your specific documents over time." },
      { title: "Batch & Real-time Modes", desc: "Process documents in real-time as they arrive, or in scheduled batches for high-volume workflows." },
      { title: "Full Audit Trail", desc: "Every extraction, correction, and decision is logged with user, timestamp, and confidence data." },
    ],
  },
  benefits: {
    heading: "Why Enterprises Choose Nulfinity Document AI",
    items: [
      "No ML engineering required — configure and deploy without a data science team",
      "Works on any document layout — no per-vendor templates to maintain",
      "Gets more accurate over time on your specific document set",
      "Handles real-world document quality — scans, photos, handwriting",
      "Full pipeline from ingestion to ERP integration in one platform",
      "Faster implementation than hyperscaler Document AI services",
      "Transparent confidence scoring — no silent errors",
      "On-premise and private cloud deployment available",
    ],
  },
  useCases: {
    heading: "Document AI Use Cases",
    items: [
      { industry: "Finance", challenge: "Processing invoices, POs, and bank statements from hundreds of different formats", outcome: "Layout-agnostic AI extracts all required fields across all vendor formats without template maintenance" },
      { industry: "Legal", challenge: "Reviewing and extracting clauses from contracts at high volume", outcome: "Document AI identifies contract type, extracts key clauses, dates, and parties across diverse legal formats" },
      { industry: "HR", challenge: "Screening and parsing resumes in different formats and layouts", outcome: "AI extracts skills, experience, education, and contact data from any resume format for structured database entry" },
    ],
  },
  faq: {
    heading: "Document AI FAQs",
    items: [
      { q: "What is Document AI and how is it different from OCR?", a: "OCR (Optical Character Recognition) converts document images to machine-readable text. Document AI goes further — it understands the meaning of that text, classifies the document type, extracts specific fields semantically, validates the data, and integrates it into your systems." },
      { q: "Do I need a data science team to use Nulfinity Document AI?", a: "No. Nulfinity is designed for business users and operations teams. You configure extraction requirements through a visual interface, not by writing ML code. The AI is pre-trained on business document types and improves automatically from your team's corrections." },
      { q: "How does Document AI handle documents it has never seen before?", a: "Nulfinity's extraction models are trained on diverse document corpora, so they generalise well to new layouts. For genuinely novel document types, you can configure a custom extraction profile. Low-confidence extractions on new documents are automatically flagged for human review." },
      { q: "Can Document AI handle handwritten documents?", a: "Yes. Nulfinity includes handwriting recognition capabilities for common business scenarios: handwritten form fills, signed documents, and mixed print/handwrite documents. Accuracy depends on handwriting quality but is significantly higher than legacy OCR tools." },
      { q: "Is Nulfinity Document AI available as an API?", a: "Yes. The full Document AI pipeline is available via a clean REST API. You can submit documents, receive structured extraction results, and trigger webhooks on completion. Full API documentation is available." },
    ],
  },
  cta: {
    heading: "See Document AI Extract Data From Your Documents",
    body: "Upload a document to our live tool and see Nulfinity's Document AI extract structured fields in real time. No account needed.",
  },
};

export default function Page() {
  return <SeoLandingPage data={data} />;
}
