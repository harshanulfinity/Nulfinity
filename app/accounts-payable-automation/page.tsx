import { SeoLandingPage, type SeoPageData } from "@/components/seo/seo-landing-page";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Accounts Payable Automation with AI | Nulfinity",
  description: "Automate your entire AP workflow with AI-powered invoice extraction, 3-way matching, approval routing, and ERP integration. Reduce costs by up to 70%.",
  path: "/accounts-payable-automation",
});

const data: SeoPageData = {
  hero: {
    badge: "AP Automation",
    h1: "Accounts Payable Automation: From Invoice Receipt to ERP Entry Without Touching a Keyboard",
    intro: "Nulfinity automates the entire accounts payable workflow — extracting invoice data with AI, matching against POs, routing for approval, and pushing to your ERP. Your AP team handles exceptions, not data entry.",
    stats: [
      { value: "70%", label: "Cost Reduction" },
      { value: "< 30s", label: "Invoice Processing" },
      { value: "0", label: "Manual Re-entry" },
      { value: "Day 1", label: "ERP Integration" },
    ],
  },
  problem: {
    heading: "The AP Problem That Costs More Than You Think",
    body: "Accounts payable teams are trapped in a cycle of manual document handling. Every invoice that arrives requires someone to read it, type it, check it, route it, and file it. This consumes enormous team capacity and introduces risk at every step.",
    bullets: [
      "Average cost to process one invoice manually: ₹15–₹40 per document",
      "AP teams spend up to 60% of their time on data entry — not analysis or exception management",
      "Duplicate payments and processing errors are common — and costly to remediate",
      "Long AP cycles damage supplier relationships and miss early payment discounts",
      "No real-time visibility into invoice status, outstanding liabilities, or approval bottlenecks",
      "Adding invoice volume means adding headcount — there is no operational leverage",
    ],
  },
  what: {
    heading: "What Is Accounts Payable Automation?",
    body: "Accounts payable automation uses AI and workflow technology to process invoices from receipt to payment without manual data entry. When an invoice arrives, it is automatically read, key fields are extracted, it is matched against purchase orders and receipts, routed to the right approver, and posted to your accounting system. The AP team only sees invoices that have genuine exceptions — mismatches, missing data, or approval escalations. Everything routine is handled automatically.",
    points: [
      { title: "Invoice Data Capture", desc: "AI extracts all invoice fields: vendor, invoice number, dates, line items, tax, totals, and payment terms — from any format." },
      { title: "PO & GR Matching", desc: "3-way matching compares invoices against purchase orders and goods receipts to detect discrepancies before payment." },
      { title: "Approval Routing", desc: "Configurable workflows route invoices to the right approver based on amount, department, or vendor rules." },
      { title: "ERP Posting", desc: "Approved invoices post directly to SAP, Oracle, Dynamics, QuickBooks, or Tally — no manual journal entry." },
      { title: "Duplicate Detection", desc: "Every invoice is checked against your database before processing — preventing costly duplicate payments." },
      { title: "Exception Management", desc: "Only genuinely problematic invoices reach your AP team — with full context and suggested resolution." },
    ],
  },
  howItWorks: {
    heading: "The Nulfinity AP Automation Workflow",
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
    heading: "Nulfinity AP Automation Platform",
    items: [
      { title: "AI Invoice Extraction", desc: "Extracts all invoice fields from any layout or format with 95%+ accuracy." },
      { title: "3-Way PO Matching", desc: "Automatically matches invoices against POs and goods receipts. Configurable tolerance rules." },
      { title: "Multi-level Approval Workflows", desc: "Route invoices by amount, department, vendor, or cost centre. Escalate on delay." },
      { title: "ERP Connectors", desc: "Pre-built integration with SAP, Oracle NetSuite, Dynamics 365, QuickBooks, Tally, and Zoho." },
      { title: "Vendor Portal Ingestion", desc: "Accept invoices from supplier portals, EDI feeds, and email — in a single unified pipeline." },
      { title: "Analytics & KPI Dashboard", desc: "Track AP cycle time, cost per invoice, exception rate, and early payment discount capture." },
    ],
  },
  benefits: {
    heading: "What AP Automation Delivers",
    items: [
      "Reduce cost per invoice from ₹15–₹40 to under ₹3",
      "Cut AP cycle time from days to hours",
      "Eliminate duplicate payments and data entry errors",
      "Improve supplier relationships with faster, more predictable payment",
      "Capture more early payment discounts with faster invoice turnaround",
      "Free AP staff for analysis, reconciliation, and strategic work",
      "Achieve real-time visibility into outstanding liabilities and approval status",
      "Scale invoice volume without proportional headcount growth",
    ],
  },
  comparison: {
    heading: "Manual AP vs. Nulfinity AP Automation",
    rows: [
      { label: "Cost Per Invoice", manual: "₹15–₹40", nulfinity: "Under ₹3" },
      { label: "Invoice Cycle Time", manual: "3–7 days", nulfinity: "Same day" },
      { label: "Duplicate Detection", manual: "Periodic manual review", nulfinity: "Automatic, every invoice" },
      { label: "PO Matching", manual: "Manual cross-reference", nulfinity: "Automated 3-way match" },
      { label: "ERP Entry", manual: "Manual journal entry", nulfinity: "Automatic API posting" },
      { label: "Exception Visibility", manual: "Email threads", nulfinity: "Real-time dashboard" },
    ],
  },
  faq: {
    heading: "AP Automation FAQs",
    items: [
      { q: "What is accounts payable automation?", a: "AP automation uses AI and workflow software to process invoices from receipt to payment without manual data entry. It captures invoice data automatically, validates it, routes it for approval, and posts it to your accounting system — significantly reducing cost and processing time." },
      { q: "How does 3-way matching work in AP automation?", a: "3-way matching compares three documents: the supplier invoice, the purchase order, and the goods receipt. If quantities, prices, and terms align within your configured tolerances, the invoice is approved for payment automatically. If not, it is flagged for your AP team to review." },
      { q: "Which ERP systems does Nulfinity connect to?", a: "Nulfinity has pre-built connectors for SAP (B1 and S/4HANA), Oracle NetSuite, Microsoft Dynamics 365, QuickBooks Online, Tally ERP, and Zoho Books. For any other system, a REST API enables custom integration." },
      { q: "Can Nulfinity handle invoices from hundreds of different vendors?", a: "Yes. Nulfinity's AI extraction is layout-agnostic and trained on diverse invoice formats. It handles different vendor layouts, languages, and formats without requiring a custom template for every supplier." },
      { q: "How does AP automation handle exceptions and errors?", a: "When invoices fail validation, have low-confidence extraction, or don't match POs, they are routed to your AP team with full context: the original document, extracted fields, and the specific reason for the exception. Reviewers resolve issues in a guided interface." },
      { q: "What is the ROI of AP automation?", a: "The ROI depends on your invoice volume, current processing cost, and error rate. Typical deployments see a 60–80% reduction in per-invoice cost, faster payment cycles, and near-elimination of duplicate payments. For a business processing 1,000 invoices per month at ₹30 each, the annual saving potential is ₹3–4L." },
    ],
  },
  cta: {
    heading: "Transform Your AP Department with Automation",
    body: "Book a demo and we will show you Nulfinity processing your invoice formats, matching against your PO structure, and integrating with your ERP — before you sign anything.",
  },
};

export default function Page() {
  return <SeoLandingPage data={data} />;
}
