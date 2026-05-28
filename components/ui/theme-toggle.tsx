"use client";

import { SunMoon } from "lucide-react";
import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("nulfinity-theme");
    const nextDark = stored ? stored === "dark" : prefersDark;
    const root = document.documentElement;
    root.classList.toggle("dark", nextDark);
  }, []);

  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("nulfinity-theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="glass rounded-full p-2 text-[var(--muted)] transition hover:scale-105 hover:text-[var(--text)]"
      type="button"
    >
      <SunMoon size={18} />
    </button>
  );
}
