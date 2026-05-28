# Nulfinity IDP Platform

Enterprise-grade Intelligent Document Processing (IDP) platform with AI-powered OCR, structured extraction, and enterprise workflow automation.

---

## Tech Stack

### Frontend
- **Framework**: Next.js 16.2.6 (App Router, React 19)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **Components**: Radix UI primitives
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **PDF**: react-pdf, pdfjs-dist

### Backend
- **Framework**: FastAPI (Python)
- **OCR**: Tesseract + OpenCV preprocessing
- **Async Processing**: Background job queues
- **Storage**: Local filesystem with job tracking

### Analytics & Tracking
- **Google Analytics 4**: `G-ZEF1TP2F4M` — page views, scroll depth, conversion events
- **Microsoft Clarity**: `wwlivcvv1p` — session recordings, heatmaps

### Booking & Scheduling
- **Calendly**: Inline widget + floating badge for demo scheduling

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         Browser / Client                         │
├─────────────────────────────────────────────────────────────────┤
│  Next.js 16 App Router (SSR + Client Components)                │
│  ├─ Layout: Navbar, Footer, CookieBanner, GA, Clarity, Calendly │
│  ├─ Pages: Homepage, Tools, Blog, SEO Landing Pages             │
│  └─ Components: Reusable UI blocks (cards, inputs, modals)       │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ HTTP / API
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      FastAPI Backend (Python)                    │
├─────────────────────────────────────────────────────────────────┤
│  ├─ OCR Pipeline: Tesseract + OpenCV preprocessing             │
│  ├─ Extraction: Structured field extraction with confidence     │
│  ├─ Async Processing: Background job queues                     │
│  ├─ Storage: File system with job tracking                      │
│  └─ Exports: JSON, CSV, Excel generation                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Project Structure

```
nulfinity/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (navbar, footer, analytics)
│   ├── page.tsx                 # Homepage
│   ├── about/                   # About page
│   ├── blog/                    # Blog listing + dynamic post pages
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── tools/                   # Live extraction tools
│   │   ├── page.tsx             # Tools index
│   │   ├── document-extractor/
│   │   ├── bank-statement-parser/
│   │   ├── invoice-parser/
│   │   ├── resume-extractor/
│   │   ├── analytics/
│   │   └── active-learning/
│   ├── services/                # Services page + sub-pages
│   ├── case-studies/            # Case studies / use cases
│   ├── careers/                 # Careers page
│   ├── privacy/                 # Privacy policy
│   ├── [SEO pages]/             # SEO landing pages (10+ pages)
│   │   ├── invoice-processing-automation/
│   │   ├── accounts-payable-automation/
│   │   ├── ocr-software/
│   │   ├── what-is-intelligent-document-processing/
│   │   ├── document-ai/
│   │   ├── receipt-data-extraction/
│   │   ├── ai-document-processing/
│   │   ├── invoice-data-extraction/
│   │   ├── automated-document-processing/
│   │   └── business-document-automation/
│   ├── sitemap.ts               # XML sitemap generation
│   ├── robots.ts                # robots.txt
│   ├── globals.css              # Global styles
│   └── not-found.tsx            # 404 page
│
├── components/                  # React components
│   ├── analytics/               # Google Analytics integration
│   │   └── google-analytics.tsx
│   ├── document-extractor/      # Document extraction UI
│   │   ├── ReviewPanel.tsx
│   │   ├── FieldEditor.tsx
│   │   └── ...
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/                # Page sections
│   │   ├── page-hero.tsx
│   │   ├── blog-list.tsx
│   │   └── tool-demo.tsx
│   ├── seo/                     # SEO landing page components
│   │   ├── seo-landing-page.tsx
│   │   └── faq-accordion.tsx
│   └── ui/                      # Reusable UI components
│       ├── calendly-button.tsx
│       ├── calendly-widget.tsx
│       ├── calendly-badge.tsx
│       ├── glow-card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── ...
│
├── lib/                         # Utility libraries
│   ├── analytics.ts             # GA4 event tracking helpers
│   ├── data.ts                  # Static data (blog posts, services, etc.)
│   ├── seo.ts                   # SEO metadata helpers
│   ├── pdf-config.ts            # PDF.js worker configuration
│   └── utils.ts                 # General utilities
│
├── backend/                     # FastAPI backend
│   ├── app/
│   │   ├── main.py              # FastAPI application entry
│   │   ├── core/                # Core config and dependencies
│   │   ├── models/              # Pydantic models
│   │   ├── ocr/                 # OCR pipeline (Tesseract + OpenCV)
│   │   ├── extractors/          # Field extraction logic
│   │   ├── exports/             # Export formatters (JSON, CSV, Excel)
│   │   ├── services/            # Business logic
│   │   ├── async_processing/    # Background job queues
│   │   ├── confidence/          # Confidence scoring
│   │   ├── document_understanding/ # Document classification
│   │   ├── hitl/                # Human-in-the-loop review
│   │   ├── observability/       # Logging and monitoring
│   │   ├── security/            # Auth and security
│   │   └── templates/           # Document templates
│   ├── storage/                 # File storage (uploaded docs, exports)
│   ├── logs/                    # Application logs
│   └── requirements.txt         # Python dependencies
│
├── public/                      # Static assets
│   ├── NULFINITY.svg            # Logo
│   ├── og-image.png             # Open Graph image
│   └── favicon.ico
│
├── docs/                        # Documentation
│   └── seo-content-strategy.md  # SEO content planning
│
├── k8s/                         # Kubernetes manifests (optional)
├── nginx/                       # Nginx configuration (optional)
├── docker-compose.yml           # Docker Compose for local dev
├── Dockerfile                   # Container image
├── package.json                # Node.js dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # TailwindCSS config
└── next.config.ts              # Next.js config
```

---

## Key Features

### Frontend
- **SPA Navigation**: Fast client-side routing with Next.js App Router
- **SEO Optimized**: 10+ SEO landing pages with JSON-LD schema markup
- **Analytics**: GA4 + Microsoft Clarity for user behavior tracking
- **Booking**: Calendly integration for demo scheduling (inline + floating badge)
- **Responsive**: Mobile-first design with TailwindCSS
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

### Backend
- **OCR Pipeline**: Tesseract with OpenCV preprocessing (denoise, contrast, deskew)
- **Async Processing**: Background job queues for long-running extractions
- **Confidence Scoring**: Per-field confidence scores for validation
- **Exports**: JSON, CSV, Excel export formats

### Analytics Tracking
- **Page Views**: Automatic tracking on every route change
- **Scroll Depth**: Engagement tracking at 25%, 50%, 75%, 90%
- **Conversions**: `book_demo_click` event with source attribution
- **Sources Tracked**: navbar, hero, ROI calculator, SEO pages, tools page, case studies

---

## Routing & Pages

| Route | Purpose | Key Components |
|---|---|---|
| `/` | Homepage | Hero, features, pricing, Calendly widget |
| `/about` | About page | Company info, team, mission |
| `/services` | Services overview | Core services listing |
| `/services/[slug]` | Service detail | IDP, OCR, Cloud, Product Engineering, AI Workflow |
| `/tools` | Tools index | Live extraction tools listing |
| `/tools/[slug]` | Tool page | Document extractor, bank statement parser, etc. |
| `/blog` | Blog listing | Searchable blog posts |
| `/blog/[slug]` | Blog post | Individual article with markdown content |
| `/case-studies` | Use cases | Finance, Healthcare, Logistics use cases |
| `/careers` | Careers | Job listings, application form |
| `/privacy` | Privacy policy | GDPR compliance |
| `/[SEO pages]` | SEO landing | 10+ keyword-targeted pages with schema markup |

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/extract/invoice` | Extract data from invoice |
| POST | `/extract/bank-statement` | Extract data from bank statement |
| GET | `/job-status/{id}` | Get extraction job status |
| GET | `/download/json/{id}` | Download extraction as JSON |
| GET | `/download/csv/{id}` | Download extraction as CSV |
| GET | `/download/excel/{id}` | Download extraction as Excel |

---

## Development Setup

### Prerequisites
- Node.js 20+
- Python 3.10+
- Tesseract OCR
- Poppler (for PDF processing)

### Install Dependencies

**macOS:**
```bash
brew install tesseract poppler
```

**Ubuntu/Debian:**
```bash
sudo apt-get install tesseract-ocr poppler-utils
```

### Backend Setup
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Run backend:
```bash
PYTHONPATH=backend uvicorn app.main:app --reload --port 8000
```

### Frontend Setup
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

### Build
```bash
npm run build
```

### Production Start
```bash
npm start
```

### Docker
```bash
docker-compose up
```

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `GA_ID` | Google Analytics Measurement ID | `G-ZEF1TP2F4M` |
| `CLARITY_ID` | Microsoft Clarity Project ID | `wwlivcvv1p` |
| `CALENDLY_URL` | Calendly booking URL | `https://calendly.com/nulfinity-info/30min` |

---

## License

© 2026 Nulfinity Technologies. All rights reserved.

