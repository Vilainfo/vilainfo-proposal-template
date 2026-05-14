import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <div className={`mb-8 space-y-3 ${alignCls}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-strong)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <div className="text-base leading-relaxed text-[var(--muted)]">{description}</div>
      ) : null}
    </div>
  );
}
