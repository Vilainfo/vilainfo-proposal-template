import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vilainfo",
  description: "Soluções tecnológicas para o seu negócio.",
};

export default function Home() {
  return (
    <main className="relative flex min-h-[100dvh] items-center justify-center bg-[var(--bg)] px-6 text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(14,165,233,0.12),transparent),radial-gradient(900px_480px_at_100%_40%,rgba(79,70,229,0.14),transparent)]" />
      <Image
        src="/branding/vilainfo-marca-horizontal.png"
        alt="Vilainfo"
        width={520}
        height={160}
        priority
        className="h-auto w-[min(80vw,520px)] select-none"
      />
    </main>
  );
}
