"use client";

import Image from "next/image";
import { useActionState } from "react";
import { signInAction, type SignInState } from "@/lib/access-actions";
import type { ProtectedSlug } from "@/lib/access";

type AuthFormProps = {
  slug: ProtectedSlug;
  title: string;
  description: string;
};

export function AuthForm({ slug, title, description }: AuthFormProps) {
  const [state, formAction, pending] = useActionState<SignInState, FormData>(
    signInAction,
    undefined,
  );

  return (
    <main className="relative flex min-h-[100dvh] items-center justify-center bg-[var(--bg)] px-6 py-16 text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(14,165,233,0.12),transparent),radial-gradient(900px_480px_at_100%_40%,rgba(79,70,229,0.14),transparent)]" />

      <section className="flex w-full max-w-md flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-2xl backdrop-blur">
        <Image
          src="/branding/vilainfo-marca-horizontal.png"
          alt="Vilainfo"
          width={200}
          height={64}
          priority
          className="h-auto w-40 select-none"
        />

        <div className="space-y-2 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/80">
            Acesso restrito
          </p>
          <h1 className="font-display text-2xl text-white">{title}</h1>
          <p className="text-sm leading-relaxed text-[var(--muted-strong)]">
            {description}
          </p>
        </div>

        <form action={formAction} className="flex w-full flex-col gap-3">
          <input type="hidden" name="slug" value={slug} />

          <label className="flex flex-col gap-1.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">
              Senha de acesso
            </span>
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
              autoFocus
              aria-invalid={state?.error ? true : undefined}
              aria-describedby={state?.error ? "auth-error" : undefined}
              className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2.5 font-mono text-sm text-white outline-none transition focus:border-cyan-300/60"
            />
          </label>

          {state?.error ? (
            <p
              id="auth-error"
              role="alert"
              className="rounded-md border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-200"
            >
              {state.error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400/90 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending ? "Verificando..." : "Entrar"}
          </button>
        </form>

        <p className="text-center text-[11px] leading-relaxed text-white/40">
          Não tem a senha? Solicite ao seu contato comercial Vilainfo.
        </p>
      </section>
    </main>
  );
}
