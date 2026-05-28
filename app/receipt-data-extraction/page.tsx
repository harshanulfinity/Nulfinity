import { SeoLandingPage, type SeoPageData } from "@/components/seo/seo-landing-page";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Receipt Data Extraction for Expense Automation | Nulfinity",
  description: "Automatically extract data from receipts — merchant, amount, date, category — and sync to your accounting software. Eliminate manual expense reporting.",
  path: "/receipt-data-extraction",
});

const data: SeoPageData = {
  hero: {
    badge: "Receipt Data Extraction",
    h1: "Receipt Data Extraction: Automate Expense Processing From Photo to Accounting Entry",
    intro: "Your employees submit receipts as photos, PDFs, and email forwards. Nulfinity extracts the merchant, amount, date, and category automatically — and syncs clean data to your accounting or ERP system. No manual entry. No lost receipts.",
    stats: [
      { value: "95%+", label: "Extraction Accuracy" },
      { value: "< 10s", label: "Per Receipt" },
      { value: "Any", label: "Format Accepted" },
      { value: "Auto", label: "Category Mapping" },
    ],
  },
  problem: {
    heading: "The Hidden Cost of Manual Expense and Receipt Processing",
    body: "Receipt and expense processing is one of the most overlooked operational inefficiencies in business. Employees submit crumpled paper receipts, blurry phone photos, and email forwards. Finance teams manually review, categorise, and enter each one.",
    bullets: [
      "Finance teams spend hours each month manually entering receipt data into accounting systems",
      "Employees lose receipts or submit them late — creating month-end reconciliation chaos",
      "Manual categorisation is inconsistent, creating unreliable expense reporting",
      "Reimbursement delays frustrate employees and damage morale",
      "Tax claims are missed because receipts are not captured or categorised correctly",
      "No real-time visibility into company spending by category, project, or department",
    ],
  },
  what: {
    heading: "What Is Receipt Data Extraction?",
    body: "Receipt data extraction uses AI and OCR to automatically read receipts — whether they arrive as phone photographs, scanned PDFs, or email attachments — and extract the key data: merchant name, transaction date, amount, tax, payment method, and expense category. Nulfinity goes further than simple OCR. It understands receipt structure, normalises merchant names against your vendor master, maps amounts to the correct expense categories, and syncs clean, structured data to your accounting software. The result is a fully automated expense capture pipeline that requires no manual data entry from either employees or finance teams.",
    points: [
      { title: "Multi-format Receipt Ingestion", desc: "Accepts receipt photos (JPG, PNG), PDFs, email forwards, and scanned documents." },
      { title: "Key Field Extraction", desc: "Merchant, date, amount, tax, payment method, and category — from any receipt format." },
      { title: "Auto-categorisation", desc: "AI maps expenses to your chart of accounts or expense categories automatically." },
      { title: "Tax Extraction", desc: "Extracts GST, VAT, and tax reference numbers for compliance and reclaim purposes." },
      { title: "Duplicate Detection", desc: "Identifies duplicate receipt submissions before they are processed for reimbursement." },
      { title: "Accounting Integration", desc: "Push clean expense data to QuickBooks, Tally, Zoho Books, or your ERP via API." },
    ],
  },
  howItWorks: {
    heading: "How Nulfinity Processes Receipts",
    steps: [
      { title: "Receipt Submission", desc: "Employees submit receipts via email, a mobile upload link, or direct API from your expense app." },
      { title: "Image Pre-processing", desc: "Receipt images are deskewed, contrast-enhanced, and perspective-corrected to improve OCR accuracy on phone photos." },
      { title: "OCR Extraction", desc: "Multi-engine OCR reads all text from the receipt — including printed and handwritten elements." },
      { title: "AI Field Identification", desc: "AI identifies merchant name, date, total amount, tax, and line items from the extracted text." },
      { title: "Categorisation & Enrichment", desc: "Expenses are mapped to your categories, merchant names normalised, and missing fields flagged for review." },
      { title: "Accounting Export", desc: "Structured expense data is pushed to your accounting platform or exported as a structured file." },
    ],
  },
  features: {
    heading: "Receipt Extraction Features",
    items: [
      { title: "Photo Receipt Processing", desc: "Handles low-quality phone photos — corrects perspective, lighting, and focus issues automatically." },
      { title: "Merchant Name Normalisation", desc: "Maps extracted merchant names to canonical names in your vendor master — consistent categorisation across all receipts." },
      { title: "Multi-currency Support", desc: "Extracts amounts in any currency with automatic base-currency conversion for consolidated reporting." },
      { title: "Auto Expense Categorisation", desc: "Classifies expenses into your chart of accounts based on merchant type and transaction context." },
      { title: "Compliance & Tax Fields", desc: "Extracts all fields needed for GST input credit claims and tax reporting." },
      { title: "Bulk Processing", desc: "Process hundreds of receipts at once — ideal for month-end expense runs or historical backlog processing." },
    ],
  },
  benefits: {
    heading: "Benefits of Automating Receipt Data Extraction",
    items: [
      "Eliminate manual data entry for expense processing entirely",
      "Faster reimbursements — improve employee experience",
      "Consistent expense categorisation for reliable reporting",
      "Capture all eligible tax reclaim amounts — stop leaving money on the table",
      "Real-time spend visibility by category, project, and employee",
      "Reduce month-end expense reconciliation from days to minutes",
      "Handle any receipt format — photos, PDFs, email forwards",
      "Integrate directly with QuickBooks, Tally, Zoho, or your ERP",
    ],
  },
  faq: {
    heading: "Receipt Data Extraction FAQs",
    items: [
      { q: "What types of receipts can Nulfinity process?", a: "Nulfinity processes retail receipts, restaurant receipts, fuel receipts, hotel folios, airline receipts, contractor invoices, and any other expense document. It accepts phone photos, scanned PDFs, email attachments, and API-submitted files." },
      { q: "Can it handle blurry or low-quality receipt photos?", a: "Yes. Nulfinity applies image pre-processing specifically designed for phone photos: perspective correction, contrast enhancement, and resolution normalisation. This significantly improves OCR accuracy on real-world receipt photographs." },
      { q: "How does auto-categorisation work?", a: "Nulfinity maps extracted merchant and transaction data to your configured expense categories using a combination of merchant classification models and your own category rules. You can configure custom mappings for specific merchants or transaction types." },
      { q: "Does Nulfinity integrate with expense management software?", a: "Yes. Nulfinity integrates with accounting platforms including QuickBooks, Zoho Books, Tally, and major ERPs via API. It can also act as a pre-processing layer that feeds into your existing expense management tool." },
      { q: "How does it prevent duplicate expense claims?", a: "Nulfinity checks every receipt against previously processed receipts in your database — matching on merchant, date, and amount — and flags any duplicates for review before they are approved for reimbursement." },
    ],
  },
  cta: {
    heading: "Automate Your Receipt and Expense Processing",
    body: "Upload a receipt to our live tool and see structured extraction output in under 10 seconds. Or book a demo to see the full expense automation pipeline.",
  },
};

export default function Page() {
  return <SeoLandingPage data={data} />;
}
