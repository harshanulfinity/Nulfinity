import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export function GlowCard({ children, className = "" }: Props) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-6 transition duration-200 hover:shadow-md hover:border-blue-200 ${className}`}
    >
      {children}
    </div>
  );
}
