"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqSchema } from "@/lib/seo";

export type FAQItem = { q: string; a: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(items)) }}
      />
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
              <ChevronDown
                size={18}
                className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-100">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
