import { signOutAction } from "@/lib/access-actions";
import type { ProtectedSlug } from "@/lib/access";

type SignOutButtonProps = {
  slug: ProtectedSlug;
  label?: string;
};

export function SignOutButton({ slug, label = "Sair" }: SignOutButtonProps) {
  return (
    <form action={signOutAction}>
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/80 transition hover:border-cyan-300/60 hover:text-cyan-200"
      >
        {label}
      </button>
    </form>
  );
}
