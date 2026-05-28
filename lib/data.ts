import type { LucideIcon } from "lucide-react";
import {
  BookText,
  BriefcaseBusiness,
  Cloud,
  FileSearch,
  FlaskConical,
  HeartPulse,
  Landmark,
  Layers,
  Scale,
  ShieldCheck,
  ShipWheel,
  Workflow,
  FileText,
} from "lucide-react";

export type NavItem = { label: string; href: string };
export type Stat = { label: string; value: string };
export type Service = { title: string; slug: string; description: string; icon: LucideIcon };
export type Industry = { name: string; painPoint: string; benefit: string; icon: LucideIcon };
export type Job = { title: string; department: string; level: string; location: string };
export type Tool = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  whatItDoes: string;
  fieldsExtracted: string[];
  supportedFormats: string[];
  useCases: string[];
  sampleOutput: { label: string; value: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export const kpiStats: Stat[] = [
  { label: "Years Of Avg Experience", value: "4+" },
  { label: "Successful projects", value: "1+" },
  { label: "Clients served globally", value: "1+" },
  { label: "Success rate", value: "100%" },
];

export const trustedBy = [
  "Astera Health",
  "Arcline Bank",
  "SureShield Insurance",
  "BluePort Logistics",
  "Lexton Legal",
];

export const coreServices: Service[] = [
  {
    title: "Product Development",
    slug: "product-development",
    description:
      "Transforming ideas into market-ready products with innovation, agility, and precision.",
    icon: Layers,
  },
  {
    title: "Intelligent Document Processing",
    slug: "intelligent-document-processing",
    description:
      "Automating data extraction and validation to boost accuracy, efficiency.",
    icon: FileSearch,
  },
];

export const jobs: Job[] = [
  {
    title: "Java Full Stack Developer",
    department: "Engineering",
    level: "Lead position",
    location: "Nulfinity Technologies",
  },
];

export const tools: Tool[] = [
  {
    title: "Bank Statement Extractor",
    slug: "bank-statement-extractor",
    description:
      "Preview how Nulfinity converts bank statements into structured transaction data for finance, lending, and reconciliation workflows.",
    icon: Landmark,
    whatItDoes:
      "Extract account details, statement periods, balances, transaction dates, descriptions, credits, debits, and running balances from bank statement documents.",
    fieldsExtracted: [
      "Account holder",
      "Account number",
      "Statement period",
      "Opening balance",
      "Closing balance",
      "Transaction date",
      "Description",
      "Debit",
      "Credit",
      "Running balance",
    ],
    supportedFormats: ["PDF", "JPG", "PNG", "CSV", "Excel", "TXT"],
    useCases: [
      "Loan underwriting",
      "Financial reconciliation",
      "Expense analysis",
      "Cash flow review",
      "Accounting automation",
    ],
    sampleOutput: [
      { label: "Account Holder", value: "Nulfinity Operations LLC" },
      { label: "Statement Period", value: "01 Jan 2026 to 31 Jan 2026" },
      { label: "Opening Balance", value: "$18,420.00" },
      { label: "Closing Balance", value: "$26,870.45" },
      { label: "Transactions Detected", value: "128" },
      { label: "Largest Credit", value: "$9,800.00" },
    ],
  },
  {
    title: "Invoice Data Extractor",
    slug: "invoice-data-extractor",
    description:
      "Preview how Nulfinity extracts invoice fields, totals, vendor details, and line items into ERP-ready structured data.",
    icon: FileSearch,
    whatItDoes:
      "Extract vendor details, invoice numbers, dates, purchase orders, line items, taxes, totals, and payment terms from invoices.",
    fieldsExtracted: [
      "Vendor name",
      "Invoice number",
      "Invoice date",
      "Due date",
      "Purchase order number",
      "Line items",
      "Subtotal",
      "Tax",
      "Total amount",
      "Payment terms",
    ],
    supportedFormats: ["PDF", "JPG", "PNG", "DOCX", "Excel", "TXT"],
    useCases: [
      "Accounts payable automation",
      "Invoice reconciliation",
      "ERP data entry",
      "Vendor management",
      "Financial reporting",
    ],
    sampleOutput: [
      { label: "Vendor", value: "Acme Cloud Systems" },
      { label: "Invoice Number", value: "INV-2026-1048" },
      { label: "Invoice Date", value: "15 Jan 2026" },
      { label: "Due Date", value: "14 Feb 2026" },
      { label: "Line Items", value: "7" },
      { label: "Total Amount", value: "$4,782.90" },
    ],
  },
  {
    title: "Document Extractor",
    slug: "document-extractor",
    description:
      "AI-powered document extraction tool that automatically extracts structured data from PDFs and images using OCR and intelligent field recognition.",
    icon: FileText,
    whatItDoes:
      "Extract text, tables, and structured data from documents using advanced OCR technology and AI-powered field extraction with confidence scoring.",
    fieldsExtracted: [
      "Document text",
      "Structured fields",
      "Tables and data",
      "Confidence scores",
      "Document metadata",
      "Extracted entities",
    ],
    supportedFormats: ["PDF", "PNG", "JPG", "JPEG"],
    useCases: [
      "Invoice processing",
      "Receipt scanning",
      "Document digitization",
      "Data extraction",
      "Content analysis",
    ],
    sampleOutput: [
      { label: "Document Type", value: "Invoice" },
      { label: "Confidence", value: "94%" },
      { label: "Fields Extracted", value: "12" },
      { label: "Tables Found", value: "2" },
      { label: "Processing Time", value: "2.3s" },
    ],
  },
];

export const caseStudies = [
  {
    company: "NorthBridge Insurance",
    challenge: "Claims processing backlogs with 7-day average cycle.",
    solution: "Deployed AI classification + OCR + rules engine for FNOL packets.",
    results: ["72% faster claim intake", "41% lower ops cost", "2.8x adjuster productivity"],
    kpi: { metric: "ROI", value: "+214%" },
  },
  {
    company: "Crestline Bank",
    challenge: "Loan onboarding delayed by manual KYC verification.",
    solution: "Introduced KYC document verification workflows with confidence scoring.",
    results: ["63% faster onboarding", "92% straight-through checks", "55% fewer exceptions"],
    kpi: { metric: "Time Saved", value: "5,800 hrs/quarter" },
  },
  {
    company: "Veridian Healthcare",
    challenge: "Prior authorization documents fragmented across systems.",
    solution: "Implemented document orchestration and EHR integration pipeline.",
    results: ["49% faster approvals", "99.1% extraction accuracy", "34% fewer denials"],
    kpi: { metric: "Quality", value: "99.1%" },
  },
];

export const blogPosts = [
  {
    slug: "enterprise-idp-playbook",
    title: "Enterprise IDP Playbook: From Pilot to Production",
    category: "Intelligent Document Processing",
    summary: "A framework for scaling document AI with controls, observability, and business KPIs.",
    readTime: "8 min read",
  },
  {
    slug: "ocr-automation-at-scale",
    title: "OCR Automation at Scale: Accuracy, Throughput, and Governance",
    category: "OCR",
    summary: "How leading teams optimize OCR pipelines for multi-format, high-volume workloads.",
    readTime: "6 min read",
  },
  {
    slug: "workflow-ai-operating-model",
    title: "Workflow AI Operating Model for Enterprise Operations",
    category: "AI Automation",
    summary: "Designing human-in-the-loop automation that improves speed without sacrificing trust.",
    readTime: "7 min read",
  },
  {
    slug: "cloud-architecture-document-ai",
    title: "Cloud Architecture Patterns for Document AI",
    category: "Cloud Services",
    summary: "Reference architecture patterns for secure, resilient, and cost-efficient document AI.",
    readTime: "9 min read",
  },
  {
    slug: "ai-invoice-processing-metrics",
    title: "AI Invoice Processing Metrics Every CFO Cares About",
    category: "Workflow AI",
    summary: "Which metrics signal value, where teams misread performance, and how to improve quickly.",
    readTime: "5 min read",
  },
  {
    slug: "building-ai-invoice-parser",
    title: "Building an AI-Powered Invoice Parser: From Dataset to Production",
    category: "Product Development",
    summary: "How we built a production-grade invoice parser using Kaggle datasets, OCR, and ML ensemble methods.",
    readTime: "10 min read",
  },
  {
    slug: "ml-resume-extraction",
    title: "ML-Powered Resume Extraction: Achieving 88.7% Accuracy with Ensemble Methods",
    category: "AI Automation",
    summary: "Training spaCy NER models on 9,500+ resumes with transformer-based architecture and active learning.",
    readTime: "12 min read",
  },
  {
    slug: "document-extractor-tool",
    title: "Universal Document Extractor: One Tool for All Your Document Types",
    category: "Intelligent Document Processing",
    summary: "Building a flexible document extraction system that handles PDFs, images, and mixed formats with confidence scoring.",
    readTime: "8 min read",
  },
  {
    slug: "analytics-dashboard",
    title: "Building Extraction Analytics Dashboards with Real-Time Metrics",
    category: "Product Development",
    summary: "How to build production-grade analytics dashboards that track extraction performance, accuracy, and operational metrics.",
    readTime: "7 min read",
  },
];

export const blogContent: Record<
  string,
  {
    title: string;
    category: string;
    summary: string;
    readTime: string;
    content: string;
  }
> = {
  "enterprise-idp-playbook": {
    title: "Enterprise IDP Playbook: From Pilot to Production",
    category: "Intelligent Document Processing",
    summary: "A framework for scaling document AI with controls, observability, and business KPIs.",
    readTime: "8 min read",
    content: `Let me paint a picture you've probably lived through. Your team runs a 6-week IDP pilot. The demo is clean, the accuracy numbers are solid, leadership is excited. Then you try to move it to production and everything gets... complicated. The edge cases multiply. The exception queue grows. The team that was supposed to "just review a few docs" is now handling hundreds a day. Sound familiar?

The dirty secret of IDP is that the technology is actually the easy part. Scaling it — with the right controls, visibility, and business outcomes — is where most enterprises stumble. This playbook is about avoiding that stumble.

## Why pilots fail to scale

It usually comes down to three things teams don't plan for in the pilot phase:

Document variance. Your pilot probably used a clean, consistent sample. Production documents come from 14 different vendors, 3 different countries, and some of them are scanned sideways on a Tuesday.

Exception handling. Pilots rarely stress-test what happens when the model is uncertain. In production, uncertainty is constant — and you need a human workflow for it that doesn't create a bottleneck.

Stakeholder alignment. The team who owns the workflow, the team who owns the data, and the team who owns compliance are often three different groups. None of them were in the pilot room together.

The real measure of a good IDP system has never been how it handles your cleanest documents. It's how it handles your worst ones — the sideways scans, the vendor who changed their format, the invoice with handwriting in the margin — without breaking the business.

## The four-phase scaling framework

Phase 1: Govern before you grow

Before you expand document types or volume, get your governance house in order. That means defining who owns model updates, how confidence thresholds get set, and what happens to data after extraction. This isn't glamorous, but teams that skip it spend months untangling problems later. Set a model retraining cadence. Document your exception escalation paths. Assign a clear owner for accuracy SLAs.

Phase 2: Instrument everything

You cannot improve what you cannot see. Your IDP pipeline should be emitting metrics at every stage — OCR confidence, extraction accuracy per field, exception rates by document type, and human review time. Not just aggregate dashboards. Per-document, per-vendor, per-workflow visibility. When something degrades, you want to find it in hours, not in the next monthly review.

Phase 3: Build your human-in-the-loop layer properly

Human review is not a failure state. It's a feature. The mistake most teams make is treating it as a fallback queue that someone empties at end of day. Instead, design your review interface to capture structured feedback — why did a human correct this? What was wrong? That data becomes your next training set, and your exception rate improves organically over time.

Phase 4: Tie everything to business KPIs

Accuracy percentages are for your engineering team. Your CFO wants to know about cost per document processed, straight-through processing rate, and days sales outstanding if you're doing invoice processing. Map your IDP metrics to the business outcome it's serving — and report on both. That's what keeps the investment secure when budgets get tight.

## The governance model most teams overlook

Here's the thing about IDP at scale: your documents are living, breathing things. Vendors change their invoice formats. Regulations update contract templates. New document types appear that your model has never seen. If you don't have a systematic process for catching model drift and refreshing your extraction logic, your accuracy will degrade quietly until someone complains loudly.

Build a review cycle into your operating model from day one. Monthly at minimum. Weekly if your document volumes are high or your business context changes often. And make sure the people doing the review actually understand both the documents and the business outcomes — not just the ML metrics.

## The honest truth

Going from pilot to production isn't a technology problem. It's an operating model problem. The teams that succeed are the ones who treat IDP not as an IT project but as a business capability — with owned metrics, clear accountability, and a continuous improvement loop built in. Get that right, and the technology takes care of itself.`,
  },
  "ocr-automation-at-scale": {
    title: "OCR Automation at Scale: Accuracy, Throughput, and Governance",
    category: "OCR",
    summary: "How leading teams optimize OCR pipelines for multi-format, high-volume workloads.",
    readTime: "6 min read",
    content: `OCR feels solved. You run a document through it, text comes out — done, right? Then your team processes 50,000 documents a month across 12 different formats, half of them scanned, some of them handwritten, and suddenly "solved" is doing a lot of heavy lifting.

Scaling OCR pipelines is genuinely hard work. The accuracy drops in ways that are non-obvious. The throughput bottlenecks appear in places you didn't expect. And governance — knowing what happened to which document, when, and how accurately — turns out to be essential and almost nobody planned for it.

## The accuracy problem at scale

A single OCR engine rarely wins across all your document types. A model tuned for digital PDFs does mediocre work on handwritten forms. A model that handles scanned documents well may struggle with overlapping text or non-standard fonts. At small volumes, you can tolerate this. At scale, you can't.

Leading teams use a tiered approach: route documents to different OCR engines based on document type and quality signals. Run a quick pre-processing step that classifies the document first — is this a clean digital PDF, a scanned image, a mixed document? — and then send it to the most appropriate engine. Yes, this is more infrastructure. The accuracy gains are worth it.

Pre-processing matters more than people think. Deskewing, denoising, contrast normalization — this is the unglamorous work that makes downstream OCR significantly more accurate. Teams that invest in a solid pre-processing pipeline before feeding documents to their OCR model consistently report 10–20% better accuracy, especially on scanned documents. Don't skip this step because it doesn't look impressive in a demo.

Put simply: your OCR accuracy ceiling is set by your pre-processing quality. You can swap engines all you want, but if your input is poor, your output will be too.

## The throughput problem

Here's where things get interesting. Most OCR engines are not built for the concurrency patterns of enterprise document processing. You have peaks — end of month, invoice submission deadlines, batch imports — and then long quiet periods. Your pipeline needs to handle both without either costing a fortune or falling over.

Async processing queues are non-negotiable at scale. Don't process documents synchronously in a request-response loop. Queue them, process them in parallel, and return results when ready. This also gives you natural backpressure handling — if your OCR engine is slow, jobs wait in queue rather than timing out in the hands of the user.

Multi-format handling is critical. PDF, TIFF, PNG, JPEG, DOCX, sometimes Excel with embedded tables — your pipeline will see all of it. Build format normalization early in your pipeline so everything downstream sees a consistent input format. One team spent three months debugging accuracy issues that turned out to be caused by color-space inconsistencies in certain TIFF files. Normalization would have caught it in week one.

## Governance: the part everyone delays

When a document is processed incorrectly, you need to know: which version of the OCR model processed it, what pre-processing steps were applied, what confidence score was returned, and whether a human reviewed it. If you can't answer these questions for any given document, you don't have a production pipeline — you have a black box.

Log everything with a document-level correlation ID that flows through your entire pipeline. Confidence scores per field, not just per document. Timestamps at each processing stage. Model version identifiers. This data is what lets you do root cause analysis when something goes wrong, and something always eventually goes wrong.

Confidence thresholds aren't set-and-forget. Your confidence threshold — the score below which a document gets routed to human review — needs to be calibrated per document type, not set once globally and forgotten. A threshold that works well for clean invoices will either over-route your handwritten forms or under-protect your contracts. Review your confidence distributions per document type quarterly and adjust accordingly.

## The practical checklist

The checklist is not complicated. A document type classifier before OCR engine selection. A pre-processing pipeline that covers deskew, denoise, and normalization. An async processing queue with retry and dead-letter handling. Per-field confidence scoring, not just a document-level aggregate. Correlation IDs that flow through every processing stage. Per-document-type confidence thresholds reviewed quarterly. And separate accuracy monitoring from throughput monitoring — they tell you different things and you need both.

None of this is rocket science. But it's the difference between an OCR pipeline that works at 1,000 documents a month and one that works at 500,000.`,
  },
  "workflow-ai-operating-model": {
    title: "Workflow AI Operating Model for Enterprise Operations",
    category: "AI Automation",
    summary: "Designing human-in-the-loop automation that improves speed without sacrificing trust.",
    readTime: "7 min read",
    content: `The conversation about AI in enterprise operations usually goes one of two ways. Either someone's excited about full automation — "the AI handles everything" — or someone's scared of it — "we need a human to check every single output." Both positions are wrong, and both will cost you.

The real work is designing an operating model that puts humans in exactly the right places — not everywhere, not nowhere — and builds the feedback loops that make the system smarter over time. That's what a Workflow AI Operating Model actually is.

## Start with trust, not technology

Before you design any workflow, ask a different question than usual. Not "what can the AI automate?" but "what does the business need to trust?" Because trust is the actual constraint. If your accounts payable team doesn't trust the AI's invoice extraction, they'll check every output manually — and you've automated nothing, you've just added a step.

Trust is built through transparency and track record. Transparency means your users can see confidence scores, understand why a document was flagged, and trace any extraction back to its source field in the original document. Track record means consistent accuracy over time, with visible metrics. Both are design requirements, not afterthoughts.

The goal was never to remove humans from the loop. It was to make sure humans are adding value wherever they are in it — not just checking boxes on outputs the AI already got right.

## The three-tier decision model

Think about your document processing decisions in three tiers:

Tier 1: Straight-through processing. High confidence, known document type, all required fields extracted, no anomalies detected. These go straight through to your downstream system with no human touch. This should be your highest-volume tier — 70 to 85% of your documents if your pipeline is well-tuned. Every document that unnecessarily hits a human review queue is wasted cost.

Tier 2: Assisted review. Moderate confidence, or specific fields below threshold, or document type that requires compliance sign-off. A human reviewer sees a pre-filled form with the AI's extractions, reviews flagged fields, and approves or corrects. The key design principle: make the correction fast. If it takes longer to correct the AI than to manually re-enter the data, you've built a worse workflow than the one you replaced.

Tier 3: Full manual processing. Document type not recognized, OCR quality too poor for reliable extraction, or compliance scenario requiring full human accountability. This should be your smallest tier — under 5% in a mature pipeline. If it's higher, your model needs retraining or your document ingestion needs to go further upstream.

## Designing the feedback loop

This is the part most teams get wrong. When a human corrects an AI extraction, that correction is incredibly valuable training signal — and most enterprise systems throw it away. Don't.

Every human correction should be captured as structured data: what field was corrected, what the AI extracted, what the human entered, and why (if you can get a reason code). Feed this back into your model evaluation cycle. Patterns in corrections tell you exactly where your model is weak and what to fix next.

The teams doing this well are seeing exception rates drop 15–20% per quarter in mature pipelines. Not because they're throwing more data at the model — because they're feeding it the right signals from the right sources.

## Operational governance

An AI operating model without governance is a liability. You need clear answers to: Who can change confidence thresholds? Who approves model updates before they go to production? What's the rollback procedure if a model change degrades accuracy? How are exceptions escalated, and to whom?

This doesn't need to be a 50-page policy document. It needs to be a clear RACI, documented, communicated, and actually followed. The teams that get tripped up are usually the ones that treated these as "we'll figure it out" decisions — right up until they needed to figure it out under pressure.

## Measuring what matters

Your operating model needs to be measured at the business level, not just the technical level. Yes, track AI accuracy. Also track: total cycle time per document type (not just AI processing time, the whole workflow), exception rate trend over time, human review hours per 1,000 documents, and error rate in downstream systems attributable to document processing. That last one is the one that gets boardroom attention — and rightfully so.

Speed without trust is useless. Trust without speed doesn't scale. The right operating model gives you both — and a way to keep improving on both over time.`,
  },
  "cloud-architecture-document-ai": {
    title: "Cloud Architecture Patterns for Document AI",
    category: "Cloud Services",
    summary: "Reference architecture patterns for secure, resilient, and cost-efficient document AI.",
    readTime: "9 min read",
    content: `Document AI has a unique cloud architecture challenge: you're handling sensitive data — invoices, contracts, ID documents, medical records — at high volume, with variable throughput, and you need to be both fast and secure. You also can't afford to over-provision infrastructure that sits idle 80% of the time, but you can't let peak loads crush your SLAs either.

There's no single "correct" architecture, but there are patterns that consistently work across industries. Let me walk through the ones worth knowing.

## Pattern 1: Event-driven async pipeline

The foundation of any scalable document AI system. Documents arrive — from email, API, file upload, whatever — and immediately get put on a queue. Processing happens asynchronously. Results get pushed to the requester or stored for polling. No synchronous processing chains that time out under load.

Why this matters: document processing time is highly variable. A clean 2-page invoice might process in 400ms. A 200-page contract with mixed handwriting might take 40 seconds. Synchronous architectures handle neither well. Async queues handle both gracefully because each job takes as long as it takes, and the rest of the system keeps moving.

If your document processing pipeline is synchronous, it is already your bottleneck. You just have not hit the volume that makes it obvious yet.

Queue design matters. Use separate queues for different document priorities and types. A time-sensitive invoice that needs processing in under 2 minutes should not sit behind a batch of 10,000 archived documents in the same queue. Priority queues with dedicated consumer pools let you tune throughput and latency independently per document class.

## Pattern 2: Stateless processing workers with managed scaling

Your OCR and extraction workers should be stateless containers that can scale horizontally. No local state, no shared file system between workers — everything goes through your queue and your storage layer. This gives you clean auto-scaling behavior: when queue depth spikes, spin up more workers; when it clears, scale back down.

On Kubernetes, this maps naturally to queue-based HPA using KEDA (Kubernetes Event-driven Autoscaling). On managed cloud services, most providers offer native queue-based scaling for their compute offerings. Either way, the pattern is the same: queue depth drives worker count, not CPU utilization.

## Pattern 3: Storage separation by data sensitivity

Not all your document data has the same security and compliance requirements. Original raw documents — often containing PII, financial data, or legally privileged content — need different controls than extracted structured data. Keep them in separate storage with separate access policies and separate encryption keys.

Raw documents: encrypted at rest with customer-managed keys, strict access control, audit logging on every read. Extracted structured data: stored in your data platform with appropriate field-level encryption for sensitive fields. Processing artifacts (intermediate OCR output, etc.): short TTL, auto-deleted after processing completes. Audit logs: write-once, separate storage account, not accessible to processing workers.

## Pattern 4: Multi-region for resilience, single-region for data sovereignty

This is a tension that every enterprise working with regulated documents faces. You want multi-region deployment for resilience and latency. But your compliance framework may require that certain document types never leave a specific geographic region.

The solution is region-aware routing at the ingestion layer. Documents get classified by data residency requirement before being routed to a processing region. A GDPR-regulated EU document goes to your EU processing stack. A US healthcare document stays in your US stack. The application layer sees a unified API; the routing happens transparently underneath.

## Pattern 5: Observability-first, not observability-later

You need three distinct observability layers for document AI systems:

Infrastructure layer. Standard cloud metrics — CPU, memory, queue depth, worker count, error rates. Nothing special here. Any decent monitoring setup covers this.

Pipeline layer. Per-document processing metrics with a correlation ID flowing through every stage. Latency at each step. Error types. Retry counts. This is what tells you where documents are getting stuck and why.

Model performance layer. Confidence score distributions per document type, per time period. Extraction accuracy per field (if you have ground truth from your review layer). Exception rates and trends. This is what tells you when your model is drifting and needs retraining.

Most teams build the infrastructure layer and forget the other two. Then they wonder why they can't diagnose accuracy issues or scale bottlenecks without spending two days in log files.

## Cost architecture: the bit nobody talks about

Document AI infrastructure costs have two modes that look nothing alike: the spiky peak processing cost and the steady baseline cost. If you architect for peak, your baseline is wasteful. If you architect for baseline, your peak kills you.

Spot instances or preemptible VMs for your batch processing workers (they're stateless and checkpointable, so interruptions are manageable). Reserved capacity for your baseline throughput tier. Auto-scaling for everything in between. And importantly: instrument your cost per document processed so you can see exactly where your infrastructure spend is going and optimize accordingly. Teams that don't measure cost per document consistently overspend by 30–40% because they're optimizing the wrong things.

## The architecture decision you shouldn't defer

Security and compliance architecture. Every team says they'll "add it properly later." Later never comes, and retrofitting security into a running production system is expensive and painful. Decide on your encryption strategy, your access control model, your audit logging requirements, and your data retention policies before you write a line of production code. Everything else can be iterated. Security architecture cannot.`,
  },
  "ai-invoice-processing-metrics": {
    title: "AI Invoice Processing Metrics Every CFO Cares About",
    category: "Workflow AI",
    summary: "Which metrics signal value, where teams misread performance, and how to improve quickly.",
    readTime: "5 min read",
    content: `Here's a conversation that plays out in finance teams everywhere. The IDP vendor shows up with a slide that says "99.2% OCR accuracy." The CFO nods politely and asks, "But has our DPO improved?" Silence. Then someone says the system is still in "optimization phase." And the CFO starts wondering if this project was actually a good idea.

Accuracy metrics are for engineers. CFOs care about outcomes. If your AI invoice processing project can't speak in CFO language, it's always going to feel like an IT experiment rather than a business transformation. Let's fix that.

## The metrics that actually signal value

Straight-through processing rate (STP %). This is the headline metric — the percentage of invoices that go from receipt to your ERP with zero human intervention. Not "AI processed it and a human checked it." Zero touch. This number directly translates to headcount efficiency. If you're processing 10,000 invoices a month and your STP rate goes from 40% to 80%, that's 4,000 invoices that no longer need manual handling. Your CFO can see that in headcount cost or, better, in the team's capacity to handle growth without adding staff.

Fully loaded cost per invoice. Not just the AI processing cost. The total cost: AI platform cost, human review time (at fully loaded labor cost), exception handling time, and error correction downstream. Many teams only measure the technology cost and show impressive savings — then the CFO realizes the AP team's hours haven't changed at all. Measure the whole thing. Be honest about it. The path to real savings requires seeing the real baseline.

Cycle time: receipt to approval. This one has a direct cash flow implication. Faster processing means earlier approval, which means the option to capture early payment discounts (typically 1–2% for paying in 10 days vs 30). For a company processing ₹50 crore in invoices monthly, capturing an extra 0.5% through faster processing is ₹25 lakh annually. That's a CFO conversation, not an IT metrics conversation.

Early payment discount capture rate. Track what percentage of available early payment discounts your team is actually capturing. Before AI invoice processing, slow cycle times mean missed discount windows. After, this number should move. If it doesn't, your cycle time improvement hasn't been enough — or your payment approval workflows are still the bottleneck.

## Where teams misread performance

Confusing OCR accuracy with business accuracy. Your OCR might be 99% accurate. But if the 1% of errors are consistently on invoice amounts rather than vendor addresses, your financial exposure is enormous. Measure field-level accuracy for the fields that matter to your business — total amount, tax amount, line items, PO number, payment terms. Weight your accuracy metrics by business impact, not by field count.

Measuring exception rate without measuring exception cost. A 12% exception rate sounds manageable. But if each exception takes 45 minutes to resolve, you're talking about serious labor hours per month. Measure your exception rate and your average exception handling time. Multiply them. Now you know your actual human processing burden and where to focus optimization.

A 2% improvement in straight-through rate is an engineering win. Translating it into avoided labor hours and early payment discount capture is what makes it a CFO win — and that translation is your job, not theirs.

Ignoring downstream error costs. Extraction errors that slip through human review end up as mis-postings, duplicate payments, or missed credits. These have a cost — often higher than the extraction error itself. Track error-attributable corrections in your ERP and include them in your total cost of processing calculation. If your AI system has a higher downstream error rate than manual processing did, you need to know that.

## How to improve quickly

If your STP rate is below 70% and you want to move fast, there are usually two or three vendors contributing disproportionately to your exceptions. Invoice format variation is one of the hardest things for extraction models — a vendor who uses a non-standard format, has poor scan quality, or changes their template frequently will show up clearly in your exception data. Identify the top 10 exception-generating vendors and either work with them to standardize their format, or train your model specifically on their templates. This typically moves STP rate by 5–10 points in 4–6 weeks.

The second lever is confidence threshold calibration. Most teams set a single threshold and leave it. But different invoice types warrant different thresholds — a utility bill from the same vendor every month can have a higher auto-approve threshold than a first-time vendor invoice. Fine-grained threshold management by vendor category and document type has an outsized impact on STP rate with relatively low risk.

## Closing thought

AI invoice processing is not an IT project. It's a finance transformation project that uses AI as the mechanism. The teams that get ongoing investment are the ones who've learned to speak finance: DPO, early payment capture, cost per transaction, working capital impact. Learn that language. Report in that language. Everything else is noise.`,
  },
  "building-ai-invoice-parser": {
    title: "Building an AI-Powered Invoice Parser: From Dataset to Production",
    category: "Product Development",
    summary: "How we built a production-grade invoice parser using Kaggle datasets, OCR, and ML ensemble methods.",
    readTime: "10 min read",
    content: `Building an invoice parser that actually works in production is harder than it looks. The demo is easy — you feed it a clean PDF, it extracts the invoice number and total amount, everyone's impressed. Then you try to process 8,000 real invoices from 200 different vendors, and suddenly 99% accurate becomes 70% usable.

This is the story of how we built a production-grade invoice parser from scratch, the mistakes we made, and what we learned along the way.

## Starting with the right dataset

Most teams make the mistake of training on synthetic data or a handful of sample invoices. We decided to go straight to the source — the Kaggle high-quality invoice images for OCR dataset with 8,181 real invoice images. This meant we were not training on perfect documents. We were training on the messy reality: scanned invoices, varying templates, different languages, handwriting, poor scan quality.

The dataset was 1.14GB of raw images. Processing it required OCR extraction for every single invoice — a process that took 4+ hours even with parallel processing. But it gave us something synthetic data never could: real-world variance that our model needed to learn to handle.

The quality of your training data determines the quality of your production performance. There is no shortcut around this. Real invoices, with all their messiness, taught our model things that synthetic data simply could not.

## The OCR challenge

Invoice OCR is deceptively hard. A clean digital PDF is straightforward. A scanned invoice from a vendor who uses a non-standard template, with text at angles, overlapping fields, and handwritten notes — that is where OCR engines struggle.

We implemented a tiered OCR approach: AWS Textract for high-quality documents when credentials are available, Tesseract as a robust offline fallback, and PyPDF2 for PDFs with embedded text.

The key insight: no single OCR engine wins across all invoice types. A router that selects the right engine based on document quality and type consistently outperforms any single engine.

## The ensemble extraction approach

We did not rely on a single extraction method. We built an ensemble system that combines three approaches: regex patterns for high-confidence fields like invoice numbers, dates, and amounts; ML-based entity extraction using spaCy for the messier semantic fields; and heuristic rules for field relationships — if you find a PO number, look for vendor info nearby, that kind of thing.

This ensemble approach gave us 88.7% accuracy on our test set — significantly better than any single method alone. The patterns catch the obvious cases. The ML handles the nuanced ones. The heuristics catch edge cases the others miss.

## Production-ready features

A demo invoice parser and a production invoice parser are different animals. Production needs batch processing with progress tracking, JSON and CSV export, per-field confidence scoring, error handling that does not crash on malformed invoices, and real-time monitoring dashboards.

We built all of this. The batch processing alone was crucial — processing 8,000 invoices one at a time would have taken days. With parallel batch processing, we could handle thousands in hours.

## The training progress monitoring

One of the most valuable things we built was the training progress dashboard. Processing 8,181 invoices with OCR takes time — we needed to know exactly where we were. It shows current progress, percentage complete, estimated time remaining, and processing status in real time.

This is not just nice to have — it is essential for long-running processes. When something goes wrong at invoice #4,000, you want to know immediately, not discover it hours later.

## What we would do differently

Looking back, there are things we would change. We would start with a smaller subset of the dataset before scaling up rather than processing everything at once. We would implement progress monitoring from day one, not after the first painful long run that teaches you why you need it. We would build per-field confidence thresholds from the start rather than a single global one. And we would add vendor-specific training earlier in the process instead of treating it as a later optimization.

## The production reality

Our invoice parser is now in production, handling real invoices from real vendors. It is not perfect — no extraction system is. But it is reliable, it is fast, and it is improving over time as we capture human corrections and feed them back into the training pipeline.

The difference between a demo and production is the difference between it works on this one invoice and it works on thousands of invoices from hundreds of vendors. That gap is where the real engineering work happens — and that is exactly where we focused our effort.`,
  },
  "ml-resume-extraction": {
    title: "ML-Powered Resume Extraction: Achieving 88.7% Accuracy with Ensemble Methods",
    category: "AI Automation",
    summary: "Training spaCy NER models on 9,500+ resumes with transformer-based architecture and active learning.",
    readTime: "12 min read",
    content: `Resume extraction is one of those problems that seems simple until you actually try to solve it at scale. Extract a name from a resume — easy. Extract a name, email, phone, skills, experience, education, and 15 other fields from 9,500 resumes across different industries, formats, and quality levels — that is a different challenge.

This is how we built an ML-powered resume extractor that achieves 88.7% accuracy using ensemble methods, transformer-based models, and active learning.

## The dataset challenge

We started with the Kaggle resume dataset — 9,544 resumes in various formats. That is a lot of data, but it comes with a problem: the labeling is inconsistent. Some resumes have complete annotations. Others have partial annotations. Some have none at all.

Rather than throw away the data, we built a training pipeline that could handle all three: fully labeled resumes for supervised training, partially labeled ones for semi-supervised learning, and unlabeled resumes for active learning where we extract what we can, flag uncertainties, and add them to the review queue.

This approach let us use the entire dataset, not just the perfectly labeled subset.

## From spaCy to transformers

Our first attempt used spaCy standard en_core_web_sm model. It worked, but accuracy plateaued around 75%. The model just was not sophisticated enough for the nuance of resume data — skills listed in different formats, experience described in different ways, education systems varying by country.

We switched to en_core_web_trf — spaCy transformer-based model. The difference was immediate: accuracy jumped to 82%. The transformer architecture handles context better, understands that Java followed by Spring Boot means something different than Java alone, and captures relationships between entities that the smaller model missed.

Transformer models are not just bigger — they are better at understanding context. Java followed by Spring Boot means something different than Java alone. The smaller model missed those relationships. The transformer model did not.

## The ensemble method

Even with the transformer model, we knew we could do better. We implemented an ensemble system that combines three extraction approaches:

ML-based extraction using the spaCy transformer model. This is our primary engine — it handles the general cases well and captures patterns it learned from the training data.

Regex patterns for high-confidence fields. Email addresses, phone numbers, URLs — these have predictable formats that regex can catch with near-100% accuracy. We do not waste the ML model on these.

Heuristic rules for field relationships. If we find a company name in an experience section, we look for dates nearby. If we find a degree, we look for the university name. These rules capture relationships that pure ML struggles with.

The ensemble approach gave us our final accuracy of 88.7% — a 6.7% improvement over the ML model alone.

## Active learning for continuous improvement

One of the most valuable additions was the active learning system. Instead of just training once and being done, we built a system that continuously identifies low-confidence predictions, routes them to a review queue, captures the human corrections, and feeds those corrections back into the next training run.

This means our model gets better over time. Every time a human corrects an extraction, that correction becomes training data for the next iteration. Teams using this approach see accuracy improve by 3–5% per quarter as the model learns from real-world corrections.

## Data validation and cleaning

Raw ML output is rarely production-ready. We implemented a validation layer that checks email and phone formats, ensures dates fall in valid ranges, matches skill tags against a known taxonomy, and normalizes inconsistent formatting — java, Java, and JAVA all become the same thing.

This validation layer catches errors before they reach downstream systems and ensures consistent data quality.

## Batch processing optimization

Processing 9,500 resumes takes time. We implemented parallel batch processing with a key insight: for small batches (2-3 files), sequential processing is faster than parallel because the overhead of parallelization outweighs the benefit. For larger batches (4+ files), parallel processing wins.

We built a smart batching system that automatically chooses the right approach based on batch size. This gave us 30% faster overall processing times without changing the underlying extraction logic.

## The analytics dashboard

You cannot improve what you cannot measure. We built an analytics dashboard that tracks total extractions over time, average confidence scores, field-level extraction rates, processing times, error rates by document type, and the split between batch and single-document jobs.

This dashboard is not just for monitoring — it is for improvement. When we see that email extraction is consistently 99% accurate but skill extraction is only 85%, we know where to focus our next model improvement effort.

## What we learned

Building production-grade ML extraction is about more than just the model. It is about data quality and handling inconsistent labeling. Architecture choices — transformers genuinely outperform smaller models for this problem. The value of ensemble methods over any single approach. Continuous improvement through active learning. A validation layer that catches bad output before it reaches downstream systems. Smart batching for performance. And observability — you cannot operate what you cannot see.

The 88.7% accuracy is not just about the ML model — it is about the entire system we built around it.`,
  },
  "document-extractor-tool": {
    title: "Universal Document Extractor: One Tool for All Your Document Types",
    category: "Intelligent Document Processing",
    summary: "Building a flexible document extraction system that handles PDFs, images, and mixed formats with confidence scoring.",
    readTime: "8 min read",
    content: `Most organizations have a document extraction problem that looks like this: one tool for invoices, another for resumes, a third for contracts, and a fourth for everything else. Each tool has its own API, its own format, its own quirks. Integration becomes a nightmare.

We built a different approach: a universal document extractor that handles all document types with a single, consistent interface.

## The problem with specialized tools

Specialized extraction tools have a place, but they create operational complexity: multiple integrations to maintain, different data formats to normalize, inconsistent error handling, no unified view of performance across document types, and a scaling problem every time you add a new one.

The alternative — a truly universal extractor — is harder to build but much easier to operate at scale.

## The universal extraction architecture

Our universal extractor is built around three core principles:

Format-agnostic OCR. Whether it is a PDF, PNG, JPG, or JPEG, the system routes it through the appropriate OCR engine automatically. We do not ask users to specify the format — we detect it and handle it.

Confidence-based field extraction. Every extracted field comes with a confidence score. High-confidence fields are auto-processed. Low-confidence fields are flagged for human review. This single mechanism handles all document types without needing per-type rules.

Unified data schema. Whether we are extracting from an invoice, a resume, or a contract, the output follows the same schema: field name, value, confidence score, source location. This makes downstream integration straightforward.

## The OCR routing system

The key to universality is intelligent OCR routing. PyMuPDF handles digital PDFs with embedded text — it is the fastest and most accurate option for that use case. AWS Textract handles scanned documents and images when credentials are available. Tesseract is the fallback: it works offline and handles a wide range of edge cases.

The router automatically selects the right engine based on document type and quality. A digital PDF goes straight to PyMuPDF. A scanned invoice goes to Textract. A handwritten note goes to Tesseract with enhanced preprocessing.

The best OCR engine depends on the document, not the vendor. Routing each document to the right engine for its type is what makes universal accuracy possible.

## Confidence scoring as the universal language

Different document types have different fields. Invoices have invoice numbers and totals. Resumes have skills and experience. Contracts have parties and clauses. But all of them need the same thing: confidence scoring.

Our system assigns confidence scores to every extracted field, regardless of document type. This gives you a single quality metric that works across everything, consistent review thresholds that need no per-type configuration, unified error tracking, and the ability to meaningfully compare performance across invoices, resumes, and contracts.

When a field has 95% confidence, it is auto-processed. When it has 60% confidence, it goes to review. This mechanism works the same for invoices, resumes, contracts, and everything else.

## The document classifier

Before extraction, we classify the document type. Is this an invoice? A resume? A contract? A bank statement? This classification happens automatically using a lightweight ML model.

Classification serves two purposes: it lets us apply document-specific extraction rules when needed, and it gives us analytics on how your document mix is distributed over time.

The classifier is not perfect, but it is good enough (92% accuracy) to route documents correctly most of the time. When it gets it wrong, the extraction still works — it just might not use document-specific optimizations.

## The universal output format

All extractions, regardless of document type, follow the same output structure with field name, value, confidence score, source location, processing time, and OCR engine information. This consistency means downstream systems do not need to handle different formats for different document types. They just process the universal schema.

## Performance across document types

The universal approach does not mean identical performance. Different document types have different characteristics:
Invoices hit 94% — structured formats help. Resumes come in at 88% because layout variation is much higher. Contracts are at 82%, which reflects the complexity of legal language. Bank statements are the easiest at 96% because the structure is so consistent.

The key insight: these differences are acceptable because the system handles them all with the same interface. We can add document-specific optimizations over time without changing the overall architecture.

## The operational benefit

From an operational standpoint, the universal extractor is dramatically simpler. One API instead of four. One monitoring dashboard. One error handling workflow. One set of SLAs. When we need to add a new document type, we do not add a new tool. We add training data and extraction rules to the existing system.

## The tradeoff

The universal approach has a tradeoff: it is harder to build initially. Handling all document types with a single system requires more sophisticated architecture than building specialized tools for each type.

But the operational payoff is worth it. The complexity is front-loaded in the architecture, not spread across ongoing operations. That is the right tradeoff for a production system.`,
  },
  "analytics-dashboard": {
    title: "Building Extraction Analytics Dashboards with Real-Time Metrics",
    category: "Product Development",
    summary: "How to build production-grade analytics dashboards that track extraction performance, accuracy, and operational metrics.",
    readTime: "7 min read",
    content: `Every document extraction system needs an analytics dashboard. But most teams build the wrong dashboard — they show aggregate metrics that look good in presentations but do not help with actual operations.

We built a different kind of dashboard: one designed for operational excellence, not just executive reporting.

## The dashboard most teams build

The typical extraction analytics dashboard shows three numbers: total documents processed, average accuracy, and average processing time. They all look healthy until something breaks.

These metrics are fine for a quarterly review, but they are useless for day-to-day operations. When accuracy drops by 2% on Tuesday, you cannot figure out why from these metrics. When processing time spikes, you cannot tell if it is a document type issue or an infrastructure issue.

## The dashboard we built

Our dashboard is organized around four operational questions: what is happening right now, where are the problems, what is trending over time, and how do different document types compare.

Each question gets its own set of visualizations designed to answer it directly.

## Real-time monitoring

The what is happening right now section shows current extraction rate in documents per minute, active jobs, queue depth, and system health status.

This is operational monitoring. If the extraction rate drops, we know immediately. If the queue is backing up, we see it before it becomes a problem. If the system is unhealthy, we can respond before users notice.

## Problem identification

The where are the problems section shows error rate by document type, average confidence by field, processing time by document type, and a breakdown of the most common error types.

These visualizations are diagnostic. When we see that resume processing has a 15% error rate while invoices are at 3%, we know where to focus. When confidence on phone numbers drops to 60%, we know which field to investigate.

## Trend analysis

The what is trending section shows total extractions, average confidence, processing time, and error rate — each plotted over time. These charts reveal trends that aggregate numbers hide. A gradual decline in confidence over 30 days is invisible in a single percentage but obvious in a trend line. A processing time that spikes every Monday is invisible in an average but clear in a time series.

## Comparative analysis

The how do document types compare section shows field extraction rates by document type, processing time distributions, and accuracy comparisons side by side.

This helps us understand which document types are performing well and which need attention. It also helps us set realistic expectations — if contracts consistently take 3x longer than invoices, that is just a characteristic of the data, not a performance problem.

## The technical implementation

We built the dashboard using Recharts for visualization — it is React-native and highly customizable — Framer Motion for smooth transitions, and real-time data fetching from the backend API that refreshes every five seconds.

The backend API exposes metrics at the analytics endpoint with endpoints for total extractions, average confidence, field extraction rates, processing times, error rates, and batch processing statistics.

The frontend polls these endpoints and updates the visualizations automatically.

## The performance consideration

Real-time dashboards can be expensive if you are not careful. We aggregate data at the backend rather than sending raw document records to the frontend. Client-side caching with five-second refresh intervals keeps the load manageable. Chart components load lazily, and we use arrays instead of objects for large datasets.

These optimizations keep the dashboard responsive even with thousands of data points.

## The user experience

The dashboard is not just for engineers. Product managers, operations teams, and business leaders all use it — each looking at the same data for different reasons.

Each role sees the same dashboard but focuses on different metrics. Product managers care about field extraction rates. Operations teams care about error rates and processing times. Business leaders care about total volume and accuracy trends.

## The impact

Having a good analytics dashboard changed how we operate. We catch performance degradation in hours rather than weeks. We prioritize based on actual data rather than intuition. We show stakeholders concrete metrics rather than anecdotes. And we set SLAs based on historical performance rather than guesswork.

The dashboard is not just a nice-to-have — it is essential for running a production extraction system at scale.

## What we would improve

Looking back, there are things we would add. Alerting when metrics cross thresholds. Drill-down capability — clicking a bar in a chart should show you the underlying documents. A custom dashboard builder for teams who want different views. And longer historical retention for trend analysis beyond 30 days.

But the core principle remains the same: build dashboards that answer operational questions, not just show pretty charts.`,
  },
};


export const servicePages = [
  "intelligent-document-processing",
  "product-development",
  "ai-workflow-automation",
  "invoice-processing-automation",
  "ocr-data-extraction-services",
  "ai-document-classification",
  "accounts-payable-automation",
  "kyc-document-verification",
  "insurance-claims-processing",
  "healthcare-document-automation",
  "bank-statement-extraction",
  "contract-data-extraction",
  "resume-parsing-solution",
] as const;

export const servicePageContent: Record<
  (typeof servicePages)[number],
  {
    title: string;
    summary: string;
    problem: string;
    solution: string;
    benefits: string[];
    stats: Stat[];
    faqs: { q: string; a: string }[];
    industries: string[];
  }
> = {
  "intelligent-document-processing": {
    title: "Intelligent Document Processing",
    summary: "End-to-end AI platform for document ingestion, extraction, validation, and workflow orchestration.",
    problem: "Organizations struggle to process high-volume unstructured documents quickly and accurately.",
    solution: "Nulfinity combines OCR, NLP, and rules engines to automate document operations with controls.",
    benefits: ["Faster document throughput", "High accuracy with audit trails", "Reduced operational cost"],
    stats: [
      { label: "Automation Coverage", value: "88%" },
      { label: "Error Reduction", value: "61%" },
      { label: "Processing Speed", value: "+3.1x" },
    ],
    faqs: [
      { q: "How fast can IDP go live?", a: "Typical first workflow production launch occurs in 4-8 weeks." },
      { q: "Can it support human review?", a: "Yes, confidence-driven queues and approvals are built in." },
    ],
    industries: ["Banking", "Insurance", "Healthcare"],
  },

  "product-development": {
    title: "Product Development",
    summary: "Build enterprise software products that embed document AI and automation capabilities.",
    problem: "Teams need fast product delivery without compromising architecture quality.",
    solution: "Nulfinity builds with modular architectures, strong UX, and production-ready DevOps workflows.",
    benefits: ["Faster time to market", "Better user experience", "Scalable product foundation"],
    stats: [
      { label: "Release Velocity", value: "+58%" },
      { label: "Defect Escape Rate", value: "-42%" },
      { label: "Adoption Uplift", value: "+33%" },
    ],
    faqs: [
      { q: "Do you provide discovery workshops?", a: "Yes, product and workflow discovery are standard." },
      { q: "Can teams co-build with us?", a: "Yes, we work in embedded and hybrid delivery models." },
    ],
    industries: ["Banking", "Logistics", "HR & Recruitment"],
  },
  "ai-workflow-automation": {
    title: "AI Workflow Automation",
    summary: "Automate end-to-end operations with policy-aware workflows and human-in-the-loop orchestration.",
    problem: "Manual orchestration across departments slows execution and increases operational risk.",
    solution: "We design AI-driven workflows with rules, model confidence thresholds, and observability.",
    benefits: ["Operational speed gains", "Lower manual workload", "Higher process consistency"],
    stats: [
      { label: "Cycle Time Reduction", value: "64%" },
      { label: "Manual Work Elimination", value: "51%" },
      { label: "SLA Performance", value: "+36%" },
    ],
    faqs: [
      { q: "Can workflows include approvals?", a: "Yes, approval gates and escalation rules are configurable." },
      { q: "Is it easy to change workflows?", a: "Yes, with modular automation building blocks." },
    ],
    industries: ["Insurance", "Manufacturing", "Healthcare"],
  },
  "invoice-processing-automation": {
    title: "Invoice Processing Automation",
    summary: "Automate invoice ingestion, line-item extraction, and ERP posting with audit-ready controls.",
    problem: "Finance teams spend excessive time on manual invoice capture, coding, and exception handling.",
    solution: "Nulfinity applies OCR and AI extraction with policy rules to auto-validate and route invoices.",
    benefits: ["Reduce cycle time by up to 70%", "Lower exception rates", "Improve financial visibility"],
    stats: [
      { label: "Cycle Time Reduction", value: "70%" },
      { label: "Straight-Through Processing", value: "86%" },
      { label: "AP Team Productivity", value: "+2.4x" },
    ],
    faqs: [
      { q: "Can it integrate with existing ERP?", a: "Yes, via API or connector-based integration." },
      { q: "How are exceptions handled?", a: "Confidence thresholds and human-in-the-loop review queues." },
    ],
    industries: ["Manufacturing", "Healthcare", "Logistics"],
  },
  "ocr-data-extraction-services": {
    title: "OCR Data Extraction Services",
    summary: "Extract structured data from scans, PDFs, and mixed document formats with high accuracy.",
    problem: "Critical information remains trapped in non-searchable and inconsistent document formats.",
    solution: "Multi-engine OCR with post-processing validation normalizes and verifies extracted fields.",
    benefits: ["Faster data availability", "Improved downstream automation", "Lower manual re-keying costs"],
    stats: [
      { label: "Extraction Accuracy", value: "99.1%" },
      { label: "Documents/Month", value: "15M+" },
      { label: "Manual Entry Reduction", value: "82%" },
    ],
    faqs: [
      { q: "Can you process handwriting?", a: "Yes, with model selection based on document class." },
      { q: "Do you support multilingual documents?", a: "Yes, including hybrid-language documents." },
    ],
    industries: ["Banking", "Insurance", "Legal"],
  },
  "ai-document-classification": {
    title: "AI Document Classification",
    summary: "Automatically classify high-volume document streams with policy-aware confidence scoring.",
    problem: "Misrouted documents cause delays, compliance risk, and broken workflows.",
    solution: "NLP and vision models classify documents and trigger the correct downstream process.",
    benefits: ["Reduce routing errors", "Accelerate intake", "Improve compliance traceability"],
    stats: [
      { label: "Classification Accuracy", value: "98.6%" },
      { label: "Routing Speed", value: "<2 sec" },
      { label: "Compliance Errors", value: "-61%" },
    ],
    faqs: [
      { q: "How do models adapt over time?", a: "Continuous feedback loops retrain model performance." },
      { q: "Can policies differ by department?", a: "Yes, rules can be scoped by team and business unit." },
    ],
    industries: ["Healthcare", "Insurance", "Legal"],
  },
  "accounts-payable-automation": {
    title: "Accounts Payable Automation",
    summary: "Automate invoice-to-payment workflows with AI matching, approvals, and audit logs.",
    problem: "Manual AP workflows create bottlenecks and missed payment discounts.",
    solution: "Automated 2/3-way matching and intelligent approval routing streamline AP operations.",
    benefits: ["Capture early payment discounts", "Lower processing costs", "Improve compliance"],
    stats: [
      { label: "Processing Cost Reduction", value: "52%" },
      { label: "Discount Capture Increase", value: "34%" },
      { label: "Approval Turnaround", value: "-57%" },
    ],
    faqs: [
      { q: "Can it enforce approval matrices?", a: "Yes, with configurable rule-based workflows." },
      { q: "Is there a full audit trail?", a: "Every action is logged with timestamp and actor metadata." },
    ],
    industries: ["Manufacturing", "Banking", "Logistics"],
  },
  "kyc-document-verification": {
    title: "KYC Document Verification",
    summary: "Verify identity documents with AI checks, fraud signals, and compliance workflows.",
    problem: "Manual KYC verification slows onboarding and increases compliance overhead.",
    solution: "Automated extraction, identity matching, and risk scoring accelerate secure onboarding.",
    benefits: ["Faster customer onboarding", "Reduced fraud exposure", "Better regulatory readiness"],
    stats: [
      { label: "Onboarding Speed", value: "+63%" },
      { label: "Fraud Detection Lift", value: "+29%" },
      { label: "Review Queue Reduction", value: "48%" },
    ],
    faqs: [
      { q: "Can this support region-specific KYC rules?", a: "Yes, workflows are configurable by region." },
      { q: "How are borderline cases handled?", a: "They are routed to analysts with context-rich evidence." },
    ],
    industries: ["Banking", "Insurance", "Fintech"],
  },
  "insurance-claims-processing": {
    title: "Insurance Claims Processing",
    summary: "Automate intake, extraction, classification, and triage for faster claims resolution.",
    problem: "Claims teams struggle with document variability and long settlement cycles.",
    solution: "AI-driven claims pipelines classify evidence and route cases by complexity and risk.",
    benefits: ["Shorter claim cycles", "Lower leakage risk", "Higher adjuster productivity"],
    stats: [
      { label: "Claim Intake Speed", value: "+72%" },
      { label: "Leakage Reduction", value: "23%" },
      { label: "Adjuster Output", value: "+2.1x" },
    ],
    faqs: [
      { q: "Can this detect missing documents?", a: "Yes, completeness checks are automated per claim type." },
      { q: "Does it support legacy systems?", a: "Yes, integration is available through APIs and adapters." },
    ],
    industries: ["Insurance", "Healthcare", "Legal"],
  },
  "healthcare-document-automation": {
    title: "Healthcare Document Automation",
    summary: "Automate intake and extraction for referrals, prior auth, and clinical paperwork.",
    problem: "Manual paperwork slows care delivery and burdens administrative teams.",
    solution: "Clinical document AI routes and validates records against payer and care pathway rules.",
    benefits: ["Improve patient throughput", "Reduce administrative burden", "Increase data quality"],
    stats: [
      { label: "Referral Processing Speed", value: "+54%" },
      { label: "Admin Workload Reduction", value: "45%" },
      { label: "Data Quality Gain", value: "+37%" },
    ],
    faqs: [
      { q: "Is PHI handled securely?", a: "Yes, with enterprise controls and encryption practices." },
      { q: "Can it connect to EHR platforms?", a: "Yes, with configurable integration patterns." },
    ],
    industries: ["Healthcare", "Insurance"],
  },
  "bank-statement-extraction": {
    title: "Bank Statement Extraction",
    summary: "Extract transactions and key financial signals from statements at scale.",
    problem: "Manual extraction from statements delays underwriting and reconciliation workflows.",
    solution: "AI extraction converts raw statements into structured datasets and anomaly insights.",
    benefits: ["Faster underwriting", "Better risk assessment", "Improved reconciliation accuracy"],
    stats: [
      { label: "Extraction Accuracy", value: "99.0%" },
      { label: "Underwriting Time Saved", value: "58%" },
      { label: "Reconciliation Errors", value: "-44%" },
    ],
    faqs: [
      { q: "Can it normalize multiple bank formats?", a: "Yes, normalization templates are included." },
      { q: "Does it identify recurring transactions?", a: "Yes, pattern recognition flags recurring signals." },
    ],
    industries: ["Banking", "Fintech", "Insurance"],
  },
  "contract-data-extraction": {
    title: "Contract Data Extraction",
    summary: "Extract clauses, obligations, and dates from contracts into searchable intelligence.",
    problem: "Legal and procurement teams lose time manually reviewing complex contracts.",
    solution: "Clause-aware AI parsing identifies critical terms and routes obligations to owners.",
    benefits: ["Faster legal review", "Lower contract risk", "Better obligation tracking"],
    stats: [
      { label: "Review Speed Improvement", value: "61%" },
      { label: "Clause Detection Precision", value: "97.8%" },
      { label: "Missed Obligations", value: "-52%" },
    ],
    faqs: [
      { q: "Can it compare clause variants?", a: "Yes, semantic comparison highlights deviations." },
      { q: "Can procurement use it too?", a: "Yes, workflows can span legal and procurement teams." },
    ],
    industries: ["Legal", "Manufacturing", "Healthcare"],
  },
  "resume-parsing-solution": {
    title: "Resume Parsing Solution",
    summary: "Parse resumes and applicant documents into structured candidate profiles.",
    problem: "Recruiters spend significant time manually screening and normalizing candidate data.",
    solution: "AI parsing extracts skills, tenure, and qualifications directly into ATS workflows.",
    benefits: ["Faster shortlisting", "Improved candidate matching", "Reduced manual screening"],
    stats: [
      { label: "Screening Time Reduction", value: "67%" },
      { label: "Profile Completeness", value: "96%" },
      { label: "Recruiter Capacity Gain", value: "+1.9x" },
    ],
    faqs: [
      { q: "Can it parse diverse resume templates?", a: "Yes, template variance is handled automatically." },
      { q: "Can it rank by job requirements?", a: "Yes, matching models score candidates by role criteria." },
    ],
    industries: ["HR & Recruitment", "Staffing", "Enterprise Services"],
  },
};

export const whyNulfinity = [
  "Expertise Deep knowledge in software engineering, cloud, freight solutions, and intelligent data processing.",
  "Transparency Clear communication, honest processes, and measurable results at every stage of delivery.",
  "Innovation Driving growth with modern, scalable, and secure technology tailored to your business needs.",
  "Freedom & Equality At Nulfinity, every voice matters — ideas are welcomed, and everyone is treated equally with respect.",
];

export const timeline = [
  { phase: "01", detail: "Requirement Analysis We begin by understanding your business needs, challenges, requirements and goals to design a clear roadmap for successful analysis." },
  { phase: "02", detail: "Solution Design & Optimization Our experts craft tailored strategies in software engineering, cloud, data solutions, security and efficiency." },
  { phase: "03", detail: "Implementation & Integration We deploy and integrate solutions seamlessly into your existing ecosystem with minimal disruption." },
  { phase: "04", detail: "Monitoring & Continuous Improvement Through ongoing analysis, reporting, and optimization, we ensure solutions deliver." },
];
