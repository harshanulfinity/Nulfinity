"use client";

import { track } from "@/lib/analytics";

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
  source?: string;
}

const CALENDLY_URL = "https://calendly.com/nulfinity-info/30min";

export function CalendlyButton({ className = "", children = "Book Consultation", source = "unknown" }: CalendlyButtonProps) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track.bookDemo(source)}
      className={className || "px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"}
    >
      {children}
    </a>
  );
}
