import { SeoLandingPage, type SeoPageData } from "@/components/seo/seo-landing-page";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Invoice Data Extraction with AI | Nulfinity",
  description: "Extract invoice data automatically — vendor, amounts, line items, dates, PO numbers — from any invoice format using AI and OCR. No templates needed.",
  path: "/invoice-data-extraction",
});

const data: SeoPageData = {
  hero: {
    badge: "Invoice Data Extraction",
    h1: "Invoice Data Extraction: Pull Every Field From Every Invoice Automatically",
    intro: "Vendor name. Invoice number. Line items. Tax amounts. Due dates. Nulfinity extracts every field from every invoice — regardless of format or layout — and delivers structured data ready for your ERP.",
    stats: [
      { value: "95%+", label: "Field Accuracy" },
      { value: "30s", label: "Per Invoice" },
      { value: "Any", label: "Format Supported" },
      { value: "0", label: "Templates Required" },
    ],
  },
  problem: {
    heading: "Why Invoice Data Entry Is Your Team's Biggest Time Drain",
    body: "Finance and AP teams lose hours every day typing data from invoices into accounting systems. Every invoice is slightly different. Every vendor uses a different layout. Every format requires a human to read it and decide what to type where.",
    bullets: [
      "A single invoice takes 4–8 minutes to process manually — that is over 100 hours per month at 1,000 invoices",
      "Varying vendor layouts mean fixed-template tools break constantly",
      "Typos, transpositions, and missed fields create downstream reconciliation problems",
      "Line-item extraction is particularly time-consuming for invoices with many SKUs",
      "Multi-currency and multi-language invoices add another layer of complexity",
    ],
  },
  what: {
    heading: "What Is Invoice Data Extraction?",
    body: "Invoice data extraction is the automated capture of structured data from invoice documents. Instead of a human reading an invoice and typing its contents into a system, an AI reads the invoice, identifies every relevant field, and outputs a clean, structured data record. Modern AI-powered extraction — like Nulfinity's — is layout-agnostic. It does not rely on fixed field positions or vendor-specific templates. It understands invoice structure semantically: it knows a number next to 'GST' is a tax amount, a number next to 'Due Date' is a date, and a table below the header is a line-item list.",
    points: [
      { title: "Header Field Extraction", desc: "Vendor name, address, invoice number, date, due date, PO reference, payment terms." },
      { title: "Line Item Extraction", desc: "Description, quantity, unit price, discount, tax, and line total — with row/column structure preserved." },
      { title: "Tax & Total Extraction", desc: "Sub-total, GST/VAT breakdown, total due, amount paid, balance — including multi-tax line invoices." },
      { title: "Vendor Matching", desc: "Match extracted vendor data against your vendor master to prevent duplicates and validate supplier identity." },
      { title: "Multi-format Support", desc: "Handles text PDFs, scanned images, email body invoices, photos, and multi-page documents." },
      { title: "Confidence Scoring", desc: "Every extracted field carries a confidence score. Low-confidence fields are flagged for review." },
    ],
  },
  howItWorks: {
    heading: "How Nulfinity Extracts Invoice Data",
    steps: [
      { title: "Invoice Arrives", desc: "Invoices are received via email attachment, API, shared folder, or supplier portal in any format." },
      { title: "OCR Processing", desc: "The invoice is processed through multi-engine OCR. Text PDFs are parsed directly; images and scans go through optical recognition with pre-processing." },
      { title: "Layout Analysis", desc: "AI analyses the invoice structure — identifying the header, line items table, totals section, and any additional fields." },
      { title: "Field Extraction", desc: "Every invoice field is extracted by semantic understanding: vendor, invoice number, dates, line items, taxes, totals, and payment terms." },
      { title: "Validation", desc: "Extracted data is validated: duplicate invoice detection, GSTIN verification, amount cross-checks, and your custom business rules." },
      { title: "ERP Delivery", desc: "Structured invoice data is delivered to your accounting system via API, direct connector, or structured file export." },
    ],
  },
  features: {
    heading: "Invoice Data Extraction Capabilities",
    items: [
      { title: "Layout-Agnostic AI", desc: "Extracts data from any invoice layout. No templates to build or maintain for each vendor." },
      { title: "Line Item Extraction", desc: "Captures full line item tables with description, quantity, price, and totals per row." },
      { title: "Tax & Compliance Fields", desc: "Extracts GST numbers, HSN codes, tax breakdowns, and regulatory fields for Indian and international invoices." },
      { title: "Duplicate Invoice Detection", desc: "Every invoice is checked against your history before processing to prevent double payments." },
      { title: "Batch Processing", desc: "Process thousands of invoices per hour through the same automated pipeline." },
      { title: "ERP Integration", desc: "Push extracted invoice data directly to SAP, Oracle, Dynamics, QuickBooks, or Tally." },
    ],
  },
  benefits: {
    heading: "Benefits of Automated Invoice Data Extraction",
    items: [
      "Eliminate manual data entry for invoice processing entirely",
      "Reduce processing time from minutes to seconds per invoice",
      "Handle any vendor layout without per-supplier template configuration",
      "Capture line items accurately — not just header fields",
      "Reduce downstream errors from typos and missed fields",
      "Integrate extracted data directly with your accounting or ERP system",
      "Gain real-time visibility into invoice status and outstanding amounts",
      "Scale invoice volumes without proportional AP team growth",
    ],
  },
  comparison: {
    heading: "Manual vs. Automated Invoice Data Extraction",
    rows: [
      { label: "Time Per Invoice", manual: "4–8 minutes", nulfinity: "Under 30 seconds" },
      { label: "Line Item Accuracy", manual: "Prone to transposition errors", nulfinity: "AI row/column extraction" },
      { label: "New Vendor Layouts", manual: "No extra work", nulfinity: "No template needed" },
      { label: "Multi-language Invoices", manual: "Requires bilingual staff", nulfinity: "Multi-language OCR built-in" },
      { label: "Duplicate Detection", manual: "Manual spot-check", nulfinity: "Automatic on every invoice" },
      { label: "ERP Posting", manual: "Manual re-entry", nulfinity: "Direct API integration" },
    ],
  },
  faq: {
    heading: "Invoice Data Extraction FAQs",
    items: [
      { q: "What invoice fields can Nulfinity extract?", a: "Nulfinity extracts all standard invoice fields: vendor name and address, invoice number, invoice date, due date, purchase order reference, line items (description, quantity, unit price, total), sub-totals, tax amounts (GST, VAT), total due, payment terms, bank details, and more. Custom fields can be added for specific requirements." },
      { q: "Does it work with invoices from any vendor?", a: "Yes. Nulfinity's extraction is layout-agnostic — it understands invoice structure semantically rather than relying on fixed field positions. This means it handles invoices from any vendor without requiring a custom template for each one." },
      { q: "Can it extract line items from complex invoices?", a: "Yes. Nulfinity identifies and extracts invoice line item tables with full row and column structure — capturing description, quantity, unit price, discount, tax, and line total for each row. This works even on invoices with many items or multi-page line item tables." },
      { q: "How does it handle Indian GST invoices?", a: "Nulfinity is built with Indian tax compliance in mind. It extracts GSTIN, HSN/SAC codes, CGST/SGST/IGST breakdowns, and all fields required for GST reconciliation and input tax credit claims." },
      { q: "What happens if an extraction is wrong?", a: "Every field carries a confidence score. Fields with low confidence are highlighted and routed to your team for review. The reviewer sees the original invoice and the extracted value side by side, making corrections fast. Corrections improve the model over time." },
    ],
  },
  cta: {
    heading: "Extract Invoice Data Automatically — Starting Today",
    body: "Try our live invoice extraction tool with no sign-up, or book a demo to see how Nulfinity handles your specific invoice formats.",
  },
};

export default function Page() {
  return <SeoLandingPage data={data} />;
}
