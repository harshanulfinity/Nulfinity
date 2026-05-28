"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { track } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image src="/NULFINITY.svg" alt="Nulfinity" width={330} height={78} />
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Intelligent Document Processing for the Modern Enterprise. Extract, classify, validate, and route 50+ document types with AI-powered accuracy.
            </p>
            <p className="text-xs text-gray-500">Built in Hyderabad, India</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" onClick={() => track.clickCTA("Platform Features", "footer")} className="hover:text-white transition-colors">Platform Features</Link></li>
              <li><Link href="/services/intelligent-document-processing" onClick={() => track.clickCTA("IDP Solution", "footer")} className="hover:text-white transition-colors">IDP Solution</Link></li>
              <li><Link href="/services" onClick={() => track.clickCTA("Integrations", "footer")} className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="/about" onClick={() => track.clickCTA("Security", "footer")} className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/invoice-processing-automation" onClick={() => track.clickCTA("Finance & AP", "footer")} className="hover:text-white transition-colors">Finance & AP</Link></li>
              <li><Link href="/automated-document-processing" onClick={() => track.clickCTA("HR & Recruiting", "footer")} className="hover:text-white transition-colors">HR & Recruiting</Link></li>
              <li><Link href="/automated-document-processing" onClick={() => track.clickCTA("Healthcare", "footer")} className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/automated-document-processing" onClick={() => track.clickCTA("Insurance", "footer")} className="hover:text-white transition-colors">Insurance</Link></li>
              <li><Link href="/automated-document-processing" onClick={() => track.clickCTA("Logistics", "footer")} className="hover:text-white transition-colors">Logistics</Link></li>
              <li><Link href="/business-document-automation" onClick={() => track.clickCTA("Legal", "footer")} className="hover:text-white transition-colors">Legal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" onClick={() => track.clickCTA("About Us", "footer")} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" onClick={() => track.clickCTA("Careers", "footer")} className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" onClick={() => track.clickCTA("Blog", "footer")} className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" onClick={() => track.clickCTA("Case Studies", "footer")} className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/#contact" onClick={() => track.clickCTA("Contact Us", "footer")} className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Mail size={14} /> info@nulfinity.com</span>
              <span className="flex items-center gap-1"><Phone size={14} /> +1 (774) 303-0910</span>
              <a href="https://www.linkedin.com/company/nulfinity/?viewAsMember=true" target="_blank" rel="noopener noreferrer" onClick={() => track.outboundLink("https://www.linkedin.com/company/nulfinity")} className="flex items-center gap-1 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/privacy" className="hover:text-white">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-white">Cookie Policy</Link>
              <Link href="/about" className="hover:text-white">Security Overview</Link>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4">© 2026 Nulfinity Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
