export const GA_ID = "G-ZEF1TP2F4M";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function pageview(url: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: url });
}

interface EventParams {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export function gtagEvent({ action, category, label, value, ...rest }: EventParams) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  });
}

export const track = {
  bookDemo: (source: string) =>
    gtagEvent({ action: "book_demo_click", category: "Conversion", label: source }),

  tryTool: (toolName: string) =>
    gtagEvent({ action: "try_tool_click", category: "Engagement", label: toolName }),

  viewBlog: (slug: string) =>
    gtagEvent({ action: "blog_view", category: "Content", label: slug }),

  clickCTA: (text: string, location: string) =>
    gtagEvent({ action: "cta_click", category: "Engagement", label: `${text} — ${location}` }),

  scrollDepth: (pct: number) =>
    gtagEvent({ action: "scroll_depth", category: "Engagement", label: `${pct}%`, value: pct }),

  outboundLink: (url: string) =>
    gtagEvent({ action: "outbound_click", category: "Outbound", label: url }),

  pricingView: () =>
    gtagEvent({ action: "pricing_section_view", category: "Conversion" }),

  roiCalculator: (inputs: Record<string, number>) =>
    gtagEvent({ action: "roi_calculator_used", category: "Engagement", ...inputs }),
};
