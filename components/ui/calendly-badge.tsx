"use client";

import Script from "next/script";

export function CalendlyBadge() {
  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          (window as any).Calendly?.initBadgeWidget({
            url: "https://calendly.com/nulfinity-info",
            text: "Schedule time with me",
            color: "#0069ff",
            textColor: "#ffffff",
            branding: true,
          });
        }}
      />
    </>
  );
}
