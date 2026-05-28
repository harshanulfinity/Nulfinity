"use client";

import Link from "next/link";
import { ArrowRight, FileSearch } from "lucide-react";
import { track } from "@/lib/analytics";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileSearch className="text-blue-600" size={32} />
        </div>
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">404 — Page Not Found</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          This page doesn&apos;t exist
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you&apos;re looking for may have been moved, renamed, or never existed. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            onClick={() => track.clickCTA("Back to Home", "404_page")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link
            href="/#contact"
            onClick={() => track.clickCTA("Contact Us", "404_page")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-3">Or browse these pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Platform", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => track.clickCTA(link.label, "404_page")}
                className="px-3 py-1.5 text-sm text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
