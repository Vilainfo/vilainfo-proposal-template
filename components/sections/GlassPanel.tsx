import type { ReactNode } from "react";

export function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
