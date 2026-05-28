"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { track } from "@/lib/analytics";

const NAV_LINKS = [
  { label: "Platform", href: "/services" },
  { label: "Solutions", href: "/services/intelligent-document-processing" },
  { label: "Resources", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Nulfinity home">
            <Image src="/NULFINITY.svg" alt="Nulfinity" width={240} height={56} priority />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => track.clickCTA(item.label, "navbar_desktop")}
                className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <CalendlyButton source="navbar_desktop" className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Book a Demo
            </CalendlyButton>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  track.clickCTA(item.label, "navbar_mobile");
                }}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200 mt-2 flex flex-col gap-2">
              <CalendlyButton source="navbar_mobile" className="px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg text-center">
                Book a Demo
              </CalendlyButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
