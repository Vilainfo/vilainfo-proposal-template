import type { ReactNode } from "react";

/** Wrapper de “slide” para snap + altura de viewport em modo apresentação */
export function SlideFrame({ children }: { children: ReactNode }) {
  return (
    <div
      data-slide
      className="box-border flex min-h-[100dvh] snap-start snap-always flex-col justify-center border-b border-white/[0.06] py-10 md:py-14"
    >
      {children}
    </div>
  );
}
