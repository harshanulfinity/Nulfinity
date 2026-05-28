"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { GlowCard } from "@/components/ui/glow-card";
import { track } from "@/lib/analytics";

const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

export function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      blogPosts.filter((post) => {
        const matchesCategory = category === "All" || post.category === category;
        const matchesQuery =
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.summary.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [query, category],
  );

  return (
    <section className="mx-auto w-[min(1180px,92%)] pb-16">
      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} onClick={() => track.viewBlog(post.slug)}>
            <GlowCard className="h-full transition-all hover:border-blue-400">
              <p className="text-xs uppercase tracking-[0.16em] text-blue-600 font-semibold">{post.category}</p>
              <h2 className="mt-3 text-lg font-semibold text-gray-900">{post.title}</h2>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">{post.summary}</p>
              <p className="mt-4 text-xs text-gray-400">{post.readTime}</p>
            </GlowCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
