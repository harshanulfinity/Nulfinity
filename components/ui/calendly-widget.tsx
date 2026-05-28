"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export function CalendlyWidget({ url = "https://calendly.com/nulfinity-info/30min" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ minWidth: "320px", height: "600px" }} />;
  }

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: "600px" }}
      ></div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
