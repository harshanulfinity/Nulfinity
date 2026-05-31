import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Zap, Shield, Globe, TrendingUp, Users, FileText, Building2, Heart, Truck, Scale, Calculator, Star, Quote, Phone, MapPin, Receipt, User, ShoppingCart, FilePen, CreditCard, Landmark, BarChart2, Wrench, Upload, ScanLine, Tag, Brain, Eye, Download, BookOpen, FileBarChart, GraduationCap, Video, Rocket, Bot, Check, X, Play, ChevronDown } from "lucide-react";
import { ROICalculator } from "@/components/sections/roi-calculator";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { makeMetadata, productSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Nulfinity | Intelligent Document Processing & AI Automation",
  description: "Nulfinity automates document workflows with AI-powered OCR, data extraction, and validation. Process invoices, KYC, contracts, and more in seconds.",
  path: "/",
});

export default function HomePage() {
  const schema = productSchema({
    name: "Nulfinity Platform",
    description: "Enterprise AI-powered document processing platform for automating invoice processing, document extraction, and workflow automation.",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[600px]">
        {/* Text Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Your Documents. Processed in <span className="text-blue-600">Seconds</span>. Not Days.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Automate the transformation of unstructured documents into clean, structured digital data, instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center min-h-[52px]">
              <CalendlyButton source="hero_cta" className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <MessageCircle size={17} /> Book a Demo
              </CalendlyButton>
            </div>

          </div>
        </div>

        {/* Animated Document Processing Visual */}
        <style>{`
          @keyframes scrollDocs {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          @keyframes scrollDocsMobile {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scanLine {
            0%   { top: -4px; opacity: 1; }
            85%  { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes scanGlow {
            0%   { top: -4px; opacity: 0.3; }
            100% { top: 100%; opacity: 0; }
          }
        `}</style>
        
        {/* Desktop View */}
        <div className="relative w-full overflow-hidden h-[240px]">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, #eef2ff 30%, transparent)' }} />

          {/* LEFT: 3 scrolling unstructured document rows */}
          <div className="absolute top-0 bottom-0 left-0 w-[46%] flex flex-col justify-center gap-2 py-2" style={{ perspective: '500px', transform: 'perspective(500px) rotateY(10deg)', contain: 'layout' }}>
            {[
              {
                speed: '8s',
                cards: [
                  { icon: Receipt, rot: '-1deg', lines: [85, 60, 90, 45, 70] },
                  { icon: FileText, rot: '2deg', lines: [100, 80, 60, 95, 50] },
                  { icon: BarChart2, rot: '-2deg', lines: [70, 100, 85, 60, 90] },
                  { icon: FilePen, rot: '1deg', lines: [55, 80, 65, 90, 40] },
                  { icon: CreditCard, rot: '-1.5deg', lines: [90, 55, 70, 85, 50] },
                  { icon: FileText, rot: '1.5deg', lines: [65, 90, 50, 75, 85] },
                  { icon: Receipt, rot: '-2deg', lines: [80, 45, 95, 60, 70] },
                  { icon: BarChart2, rot: '0.5deg', lines: [75, 90, 55, 80, 65] },
                  { icon: CreditCard, rot: '-1deg', lines: [50, 70, 85, 40, 90] },
                  { icon: FilePen, rot: '2deg', lines: [95, 60, 75, 55, 80] },
                ],
              },
              {
                speed: '12s',
                cards: [
                  { icon: BarChart2, rot: '1.5deg', lines: [80, 65, 95, 50, 75] },
                  { icon: FilePen, rot: '-2deg', lines: [60, 90, 45, 80, 65] },
                  { icon: Receipt, rot: '1deg', lines: [95, 70, 55, 90, 60] },
                  { icon: FileText, rot: '-1deg', lines: [75, 85, 60, 100, 45] },
                  { icon: CreditCard, rot: '2deg', lines: [50, 75, 85, 55, 90] },
                  { icon: Receipt, rot: '-1.5deg', lines: [85, 50, 70, 90, 60] },
                  { icon: BarChart2, rot: '1deg', lines: [55, 80, 100, 65, 75] },
                  { icon: FileText, rot: '-0.5deg', lines: [90, 60, 80, 45, 95] },
                  { icon: FilePen, rot: '1.5deg', lines: [70, 85, 55, 90, 50] },
                  { icon: CreditCard, rot: '-2deg', lines: [65, 95, 75, 50, 85] },
                ],
              },
              {
                speed: '10s',
                cards: [
                  { icon: FilePen, rot: '-1deg', lines: [90, 60, 75, 45, 85] },
                  { icon: CreditCard, rot: '1.5deg', lines: [65, 85, 50, 90, 70] },
                  { icon: FileText, rot: '-2deg', lines: [80, 55, 95, 65, 75] },
                  { icon: BarChart2, rot: '1deg', lines: [45, 80, 70, 95, 55] },
                  { icon: Receipt, rot: '-1.5deg', lines: [75, 90, 60, 80, 45] },
                  { icon: CreditCard, rot: '0.5deg', lines: [85, 65, 90, 50, 75] },
                  { icon: FilePen, rot: '-2deg', lines: [55, 95, 70, 85, 60] },
                  { icon: Receipt, rot: '1.5deg', lines: [70, 50, 85, 60, 90] },
                  { icon: BarChart2, rot: '-1deg', lines: [60, 80, 45, 95, 70] },
                  { icon: FileText, rot: '2deg', lines: [95, 70, 80, 55, 65] },
                ],
              },
            ].map((row, ri) => (
              <div key={ri} className="overflow-hidden" style={{ transform: `translateY(${(ri - 1) * 40}px)` }}>
                <div
                  className="flex gap-2"
                  style={{ width: 'max-content', animation: `scrollDocs ${row.speed} linear infinite` }}
                >
                  {[...row.cards, ...row.cards].map((doc, ci) => (
                    <div
                      key={ci}
                      className="flex-shrink-0 bg-white rounded-md shadow-sm border border-gray-200 p-1 w-12 h-9"
                      style={{ transform: `rotate(${doc.rot})` }}
                    >
                      <div className="flex items-center gap-1 mb-2">
                        <doc.icon size={6} className="text-gray-300" />
                        <div className="h-0.5 bg-gray-200 rounded w-8" />
                      </div>
                      <div className="space-y-1">
                        {doc.lines.map((w, li) => (
                          <div key={li} className="h-0.5 bg-gray-200 rounded" style={{ width: `${w}%` }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CENTER: Nulfinity Processor Hub */}
          <div className="absolute top-1/2 z-30" style={{ left: 'calc(50% - 16px)', transform: 'translateX(-50%) translateY(-50%)' }}>
            <div className="relative flex items-center justify-center">
              <div className="relative bg-white rounded-xl px-3 py-2 shadow-2xl ring-2 ring-blue-400 flex items-center justify-center overflow-hidden">
                <Image src="/NULFINITY.svg" alt="Nulfinity" width={130} height={30} priority />
                {/* Scanner sweep line */}
                <div className="absolute left-0 right-0 h-px pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, #3b82f6, #60a5fa, #3b82f6, transparent)', boxShadow: '0 0 8px 3px rgba(96,165,250,0.7)', animation: 'scanLine 2s linear infinite' }} />
                {/* Scanner glow trail */}
                <div className="absolute left-0 right-0 pointer-events-none" style={{ height: '30px', background: 'linear-gradient(to bottom, rgba(96,165,250,0.12), transparent)', animation: 'scanGlow 2s linear infinite' }} />
              </div>
            </div>
          </div>

          {/* RIGHT: 3 scrolling processed result rows */}
          <div className="absolute top-0 bottom-0 right-0 w-[48%] flex flex-col justify-center gap-2 py-2" style={{ perspective: '500px', transform: 'perspective(500px) rotateY(-10deg)' }}>
            {[
              {
                speed: '8s',
                cards: [
                  { Icon: BarChart2, title: 'Financial Report', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', field: 'Revenue', value: '$2.3M' },
                  { Icon: Receipt, title: 'Invoice (OCR)', iconBg: 'bg-green-100', iconColor: 'text-green-600', field: 'Amount', value: '$45,789' },
                  { Icon: FileText, title: 'Legal Contract', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', field: 'Clauses', value: '15' },
                  { Icon: User, title: 'Resume Extract', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', field: 'Skills', value: '12' },
                  { Icon: Landmark, title: 'Bank Statement', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', field: 'Balance', value: '$8,420' },
                ],
              },
              {
                speed: '12s',
                cards: [
                  { Icon: Heart, title: 'Medical Record', iconBg: 'bg-red-100', iconColor: 'text-red-500', field: 'Diagnosis', value: 'ICD-10' },
                  { Icon: ShoppingCart, title: 'Purchase Order', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', field: 'Items', value: '24' },
                  { Icon: BarChart2, title: 'Audit Report', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', field: 'Findings', value: '3' },
                  { Icon: CreditCard, title: 'Expense Claim', iconBg: 'bg-pink-100', iconColor: 'text-pink-600', field: 'Total', value: '$1,240' },
                  { Icon: FileBarChart, title: 'Tax Filing', iconBg: 'bg-teal-100', iconColor: 'text-teal-600', field: 'Refund', value: '$3,200' },
                ],
              },
              {
                speed: '10s',
                cards: [
                  { Icon: Truck, title: 'Shipping Manifest', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', field: 'Items', value: '48' },
                  { Icon: Scale, title: 'Compliance Doc', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', field: 'Status', value: 'Clear' },
                  { Icon: Calculator, title: 'Payroll Sheet', iconBg: 'bg-green-100', iconColor: 'text-green-600', field: 'Employees', value: '320' },
                  { Icon: BookOpen, title: 'Insurance Claim', iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600', field: 'Claim', value: '$12.4K' },
                  { Icon: Receipt, title: 'Utility Bill', iconBg: 'bg-lime-100', iconColor: 'text-lime-600', field: 'Due', value: 'Dec 1st' },
                ],
              },
            ].map((row, ri) => (
              <div key={ri} className="overflow-hidden" style={{ transform: `translateY(${(ri - 1) * 40}px)` }}>
                <div
                  className="flex gap-2"
                  style={{ width: 'max-content', animation: `scrollDocs ${row.speed} linear infinite` }}
                >
                  {[...row.cards, ...row.cards].map((card, ci) => (
                    <div key={ci} className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-2 w-36 h-11 flex items-center gap-2">
                      <div className={`w-5 h-5 ${card.iconBg} rounded-md flex items-center justify-center flex-shrink-0`}>
                        <card.Icon className={card.iconColor} size={9} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-semibold text-gray-800 truncate">{card.title}</p>
                        <p className="text-[9px] text-gray-500">{card.field}: <span className="font-semibold text-gray-700">{card.value}</span></p>
                      </div>
                      <Check className="text-green-500 flex-shrink-0" size={8} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none" style={{ background: 'linear-gradient(to left, #eef2ff 30%, transparent)' }} />
        </div>

        {/* Mobile View */}
        <div className="block md:hidden relative w-full overflow-hidden h-[200px]">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-8 z-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #eef2ff 30%, transparent)' }} />

          {/* TOP: Scrolling unstructured documents */}
          <div className="absolute top-0 left-0 right-0 h-[45%] flex items-center py-1">
            <div className="overflow-hidden w-full">
              <div
                className="flex gap-2"
                style={{ width: 'max-content', animation: 'scrollDocsMobile 15s linear infinite' }}
              >
                {[
                  { icon: Receipt, rot: '-1deg', lines: [85, 60, 90, 45, 70] },
                  { icon: FileText, rot: '2deg', lines: [100, 80, 60, 95, 50] },
                  { icon: BarChart2, rot: '-2deg', lines: [70, 100, 85, 60, 90] },
                  { icon: FilePen, rot: '1deg', lines: [55, 80, 65, 90, 40] },
                  { icon: CreditCard, rot: '-1.5deg', lines: [90, 55, 70, 85, 50] },
                  { icon: FileText, rot: '1.5deg', lines: [65, 90, 50, 75, 85] },
                  { icon: Receipt, rot: '-2deg', lines: [80, 45, 95, 60, 70] },
                  { icon: BarChart2, rot: '0.5deg', lines: [75, 90, 55, 80, 65] },
                ].map((doc, ci) => (
                  <div
                    key={ci}
                    className="flex-shrink-0 bg-white rounded-md shadow-sm border border-gray-200 p-1 w-10 h-8"
                    style={{ transform: `rotate(${doc.rot})` }}
                  >
                    <div className="flex items-center gap-1 mb-1">
                      <doc.icon size={6} className="text-gray-300" />
                      <div className="h-0.5 bg-gray-200 rounded w-8" />
                    </div>
                    <div className="space-y-0.5">
                      {doc.lines.slice(0, 4).map((w, li) => (
                        <div key={li} className="h-0.5 bg-gray-200 rounded" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                  </div>
                ))}
                {[
                  { icon: Receipt, rot: '-1deg', lines: [85, 60, 90, 45, 70] },
                  { icon: FileText, rot: '2deg', lines: [100, 80, 60, 95, 50] },
                  { icon: BarChart2, rot: '-2deg', lines: [70, 100, 85, 60, 90] },
                  { icon: FilePen, rot: '1deg', lines: [55, 80, 65, 90, 40] },
                  { icon: CreditCard, rot: '-1.5deg', lines: [90, 55, 70, 85, 50] },
                  { icon: FileText, rot: '1.5deg', lines: [65, 90, 50, 75, 85] },
                  { icon: Receipt, rot: '-2deg', lines: [80, 45, 95, 60, 70] },
                  { icon: BarChart2, rot: '0.5deg', lines: [75, 90, 55, 80, 65] },
                ].map((doc, ci) => (
                  <div
                    key={`dup-${ci}`}
                    className="flex-shrink-0 bg-white rounded-md shadow-sm border border-gray-200 p-1 w-10 h-8"
                    style={{ transform: `rotate(${doc.rot})` }}
                  >
                    <div className="flex items-center gap-1 mb-1">
                      <doc.icon size={6} className="text-gray-300" />
                      <div className="h-0.5 bg-gray-200 rounded w-8" />
                    </div>
                    <div className="space-y-0.5">
                      {doc.lines.slice(0, 4).map((w, li) => (
                        <div key={li} className="h-0.5 bg-gray-200 rounded" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER: Nulfinity Processor Hub */}
          <div className="absolute top-1/2 left-1/2 z-30" style={{ transform: 'translate(-50%, -50%)' }}>
            <div className="relative flex items-center justify-center">
              <div className="relative bg-white rounded-lg px-1.5 py-1 shadow-xl ring-2 ring-blue-400 flex items-center justify-center overflow-hidden">
                <Image src="/NULFINITY.svg" alt="Nulfinity" width={80} height={18} priority />
                {/* Scanner sweep line */}
                <div className="absolute left-0 right-0 h-px pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, #3b82f6, #60a5fa, #3b82f6, transparent)', boxShadow: '0 0 6px 2px rgba(96,165,250,0.7)', animation: 'scanLine 2s linear infinite' }} />
                {/* Scanner glow trail */}
                <div className="absolute left-0 right-0 pointer-events-none" style={{ height: '20px', background: 'linear-gradient(to bottom, rgba(96,165,250,0.12), transparent)', animation: 'scanGlow 2s linear infinite' }} />
              </div>
            </div>
          </div>

          {/* BOTTOM: Scrolling processed results */}
          <div className="absolute bottom-0 left-0 right-0 h-[45%] flex items-center py-1">
            <div className="overflow-hidden w-full">
              <div
                className="flex gap-2"
                style={{ width: 'max-content', animation: 'scrollDocs 15s linear infinite' }}
              >
                {[
                  { Icon: BarChart2, title: 'Financial Report', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', field: 'Revenue', value: '$2.3M' },
                  { Icon: Receipt, title: 'Invoice (OCR)', iconBg: 'bg-green-100', iconColor: 'text-green-600', field: 'Amount', value: '$45,789' },
                  { Icon: FileText, title: 'Legal Contract', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', field: 'Clauses', value: '15' },
                  { Icon: User, title: 'Resume Extract', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', field: 'Skills', value: '12' },
                  { Icon: Landmark, title: 'Bank Statement', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', field: 'Balance', value: '$8,420' },
                  { Icon: Heart, title: 'Medical Record', iconBg: 'bg-red-100', iconColor: 'text-red-500', field: 'Diagnosis', value: 'ICD-10' },
                  { Icon: ShoppingCart, title: 'Purchase Order', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', field: 'Items', value: '24' },
                  { Icon: BarChart2, title: 'Audit Report', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', field: 'Findings', value: '3' },
                ].map((card, ci) => (
                  <div key={ci} className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-1.5 w-28 h-9 flex items-center gap-1.5">
                    <div className={`w-5 h-5 ${card.iconBg} rounded-md flex items-center justify-center flex-shrink-0`}>
                      <card.Icon className={card.iconColor} size={9} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-semibold text-gray-800 truncate">{card.title}</p>
                      <p className="text-[9px] text-gray-500">{card.field}: <span className="font-semibold text-gray-700">{card.value}</span></p>
                    </div>
                    <Check className="text-green-500 flex-shrink-0" size={8} />
                  </div>
                ))}
                {[
                  { Icon: BarChart2, title: 'Financial Report', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', field: 'Revenue', value: '$2.3M' },
                  { Icon: Receipt, title: 'Invoice (OCR)', iconBg: 'bg-green-100', iconColor: 'text-green-600', field: 'Amount', value: '$45,789' },
                  { Icon: FileText, title: 'Legal Contract', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', field: 'Clauses', value: '15' },
                  { Icon: User, title: 'Resume Extract', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', field: 'Skills', value: '12' },
                  { Icon: Landmark, title: 'Bank Statement', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', field: 'Balance', value: '$8,420' },
                  { Icon: Heart, title: 'Medical Record', iconBg: 'bg-red-100', iconColor: 'text-red-500', field: 'Diagnosis', value: 'ICD-10' },
                  { Icon: ShoppingCart, title: 'Purchase Order', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', field: 'Items', value: '24' },
                  { Icon: BarChart2, title: 'Audit Report', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', field: 'Findings', value: '3' },
                ].map((card, ci) => (
                  <div key={`dup-${ci}`} className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-2 w-36 h-12 flex items-center gap-2">
                    <div className={`w-6 h-6 ${card.iconBg} rounded-md flex items-center justify-center flex-shrink-0`}>
                      <card.Icon className={card.iconColor} size={11} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold text-gray-800 truncate">{card.title}</p>
                      <p className="text-[10px] text-gray-500">{card.field}: <span className="font-semibold text-gray-700">{card.value}</span></p>
                    </div>
                    <Check className="text-green-500 flex-shrink-0" size={10} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-8 z-20 pointer-events-none" style={{ background: 'linear-gradient(to top, #eef2ff 30%, transparent)' }} />
        </div>

        {/* Stats bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-center border-t border-gray-100 pt-8">
            <div><p className="text-2xl font-bold text-blue-600">95%+</p><p className="text-xs text-gray-500 mt-0.5">Extraction Accuracy</p></div>
            <div><p className="text-2xl font-bold text-blue-600">10x</p><p className="text-xs text-gray-500 mt-0.5">Faster Than Manual</p></div>
            <div><p className="text-2xl font-bold text-blue-600">50+</p><p className="text-xs text-gray-500 mt-0.5">Document Types</p></div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROBLEM → SOLUTION SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">The Problem We Solve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manual Document Processing Is Costing You More Than You Think</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every day your team spends hours re-entering data from documents. That's time, money, and accuracy you'll never get back.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-100 border-2 border-red-400 rounded-xl p-8 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-bold text-red-900 mb-6">Before Nulfinity</h3>
              <p className="text-sm font-semibold text-red-700 mb-4">The Old Way</p>
              <ul className="space-y-3">
                {[
                  "Manual data entry. Your team types out invoice fields, one by one, every single day.",
                  "Processing delays. Documents pile up. Approvals wait. Payments get delayed.",
                  "Human errors. Wrong amounts, missed fields, duplicate entries. Every mistake carries a cost.",
                  "High operational costs. Hiring more people to handle more documents does not scale.",
                  "Zero visibility. No real-time insight into document status, processing backlogs, or team performance.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <X className="text-red-600 flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-100 border-2 border-green-400 rounded-xl p-8 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-bold text-green-900 mb-6">After Nulfinity</h3>
              <p className="text-sm font-semibold text-green-700 mb-4">The Nulfinity Way</p>
              <ul className="space-y-3">
                {[
                  "Automated extraction. AI reads every field the moment a document is uploaded. Zero manual input.",
                  "Instant processing. Documents are classified, extracted, and validated in seconds, not hours.",
                  "Higher accuracy. 95%+ extraction accuracy with confidence scoring and human review for edge cases.",
                  "Reduced costs. Cut document processing costs by up to 70% without adding headcount.",
                  "Full visibility. Real-time dashboards show every document's status, from upload to export.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — SUPPORTED DOCUMENTS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Document Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">50+ Document Types. One Platform.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">If your business touches documents, Nulfinity processes them.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Receipt, type: "Invoices", fields: "Vendor, Amount, GST, Line Items, Due Date" },
              { Icon: User, type: "Resumes / CVs", fields: "Name, Skills, Experience, Education, Contact" },
              { Icon: ShoppingCart, type: "Purchase Orders", fields: "PO Number, Items, Quantities, Vendor Details" },
              { Icon: FilePen, type: "Contracts", fields: "Parties, Dates, Clauses, Signatures, Obligations" },
              { Icon: CreditCard, type: "KYC Documents", fields: "Aadhaar, PAN, Passport, Address, DOB" },
              { Icon: FileText, type: "Receipts", fields: "Merchant, Amount, Category, Date, GST Number" },
              { Icon: Landmark, type: "Bank Statements", fields: "Transactions, Balance, Account Details, Dates" },
              { Icon: Shield, type: "Insurance Claims", fields: "Policy Number, Claimant, Amount, Diagnosis" },
              { Icon: Calculator, type: "Tax Forms", fields: "TIN, Filing Period, Income, Deductions" },
              { Icon: Truck, type: "Shipping Documents", fields: "Tracking, Weight, Destination, Item Details" },
              { Icon: BarChart2, type: "Financial Reports", fields: "Revenue, Expenses, Period, Ratios" },
              { Icon: Wrench, type: "Work Orders", fields: "Job ID, Tasks, Timeline, Assigned Team" },
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <doc.Icon className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{doc.type}</h3>
                <p className="text-sm text-gray-600">{doc.fields}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CalendlyButton source="document_types" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
              Don't see your document type? Talk to our team <ArrowRight size={20} />
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* SECTION 7 — INDUSTRY USE CASES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Every Industry That Runs on Documents</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Nulfinity adapts to your industry's document types, compliance requirements, and workflow logic.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, industry: "Finance & Accounting", use: "Invoice Processing & AP Automation", result: "80% reduction in invoice processing time" },
              { icon: Users, industry: "HR & Recruitment", use: "Resume Screening & Onboarding", result: "5x faster candidate shortlisting" },
              { icon: Heart, industry: "Healthcare", use: "Medical Records & Claims", result: "60% reduction in claims processing time" },
              { icon: Shield, industry: "Insurance", use: "Claims Processing & Policy Documents", result: "Claims processed 3x faster" },
              { icon: Truck, industry: "Logistics & Supply Chain", use: "Shipping & Customs Documents", result: "90% reduction in manual document handling" },
              { icon: Scale, industry: "Legal", use: "Contract Analysis & Due Diligence", result: "70% faster contract review" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <item.icon className="text-blue-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">{item.industry}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.use}</p>
                <p className="text-sm font-semibold text-green-600">Key Result: {item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — EARLY ADOPTER CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Early Access</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Be Among Our First Enterprise Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Nulfinity is currently onboarding its first wave of enterprise clients. Early partners get dedicated onboarding, priority support, and direct input into the product roadmap.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Dedicated Onboarding", desc: "Our team configures Nulfinity around your document types and workflows from day one." },
              { title: "Priority Support", desc: "Direct access to engineers and product team. No ticket queues, no support tiers." },
              { title: "Roadmap Input", desc: "Shape the features that get built next based on your real-world requirements." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <CalendlyButton source="early_access" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Apply for Early Access <ArrowRight size={17} />
          </CalendlyButton>
        </div>
      </section>

      {/* SECTION 13 — USE CASE PREVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Nulfinity Can Do For Your Industry</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore how Nulfinity applies to document-heavy workflows across Finance, Healthcare, and Logistics.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Building2,
                title: "Finance & Accounting",
                docType: "Vendor Invoices, Purchase Orders",
                challenge: "AP teams processing hundreds of invoices manually each week face data entry bottlenecks, approval delays, and costly errors.",
                howNulfinity: "Nulfinity extracts vendor details, amounts, line items, and due dates automatically — routing each invoice to the right approver via your ERP.",
                outcomes: ["Reduce processing time from days to hours", "Near-zero manual data entry", "Direct integration with SAP, Tally, or QuickBooks"],
              },
              {
                Icon: Heart,
                title: "Healthcare",
                docType: "Insurance Claims, Patient Records",
                challenge: "Claims teams deal with high document volumes, strict accuracy requirements, and rejection risks from manual entry errors.",
                howNulfinity: "Nulfinity captures claim fields, validates against business rules, and routes exceptions for human review — all on a HIPAA-aligned private deployment.",
                outcomes: ["Faster claims turnaround", "Fewer rejections from data errors", "Secure, private cloud deployment"],
              },
              {
                Icon: Truck,
                title: "Logistics",
                docType: "Shipping Documents, Customs Declarations",
                challenge: "High-volume, multi-language shipping documents create customs delays, compliance risk, and manual handoff bottlenecks between teams.",
                howNulfinity: "Multi-language OCR and extraction pipelines process documents across languages, with automated routing to Ops, Compliance, and Finance.",
                outcomes: ["Process documents in multiple languages", "Reduce customs errors and shipment holds", "Automated team routing and exception alerts"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-8 border border-gray-200 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">{item.title}</span>
                </div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-4">Documents: {item.docType}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">The Problem</h4>
                  <p className="text-sm text-gray-600">{item.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">How Nulfinity Helps</h4>
                  <p className="text-sm text-gray-600">{item.howNulfinity}</p>
                </div>
                <ul className="mt-auto pt-4 border-t border-gray-100 space-y-2">
                  {item.outcomes.map((o, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={15} /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
