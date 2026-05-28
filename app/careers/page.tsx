import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { jobs } from "@/lib/data";
import { makeMetadata } from "@/lib/seo";
import { Briefcase, MapPin, TrendingUp, Rocket, Bot, Globe } from "lucide-react";

export const metadata = makeMetadata({
  title: "Careers | Nulfinity",
  description: "Join Nulfinity Technologies and be part of our growing team. Explore exciting career opportunities.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Careers"
        title="Join Nulfinity and shape the future of AI document automation."
        description="We're hiring talented professionals to drive innovation in intelligent document processing and enterprise AI solutions."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Rocket, title: "Fast Growth", desc: "Be part of an early team with massive ownership and impact." },
            { Icon: Bot, title: "AI-First Culture", desc: "Work on real AI systems, not just wrappers around GPT." },
            { Icon: Globe, title: "Remote Friendly", desc: "Work from anywhere with a collaborative async culture." },
          ].map((v) => (
            <GlowCard key={v.title}>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <v.Icon className="text-blue-600" size={20} />
              </div>
              <h3 className="font-bold text-gray-900">{v.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
            </GlowCard>
          ))}
        </div>

        <SectionHeading eyebrow="Open Positions" title="Current job openings" description="We're building the team that will define intelligent document automation in India and beyond." />
        <div className="mt-8 space-y-4">
          {jobs.map((job) => (
            <div key={job.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-200 transition-all bg-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{job.title}</h2>
                    <p className="text-sm text-gray-500">{job.department}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    <TrendingUp size={12} /> {job.level}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <Link
                    href={`mailto:info@nulfinity.com?subject=Job Application - ${job.title}`}
                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Don&apos;t see your role?</h2>
          <p className="text-gray-600 mb-6">We&apos;re always looking for exceptional people. Send us your resume and we&apos;ll reach out when something fits.</p>
          <Link
            href="mailto:info@nulfinity.com?subject=Open Application"
            className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Send Open Application
          </Link>
        </div>
      </div>
    </div>
  );
}
