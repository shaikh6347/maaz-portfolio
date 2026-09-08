import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d8b46a]">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
