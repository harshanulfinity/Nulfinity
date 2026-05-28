import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: Props) {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">{eyebrow}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight max-w-4xl">{title}</h1>
        {description && <p className="mt-5 max-w-3xl text-lg text-gray-600">{description}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
