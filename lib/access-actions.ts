"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  accessCookieName,
  accessCredentials,
  isProtectedSlug,
  type ProtectedSlug,
} from "./access";

export type SignInState = { error?: string } | undefined;

const ONE_MONTH_SECONDS = 60 * 60 * 24 * 30;

export async function signInAction(
  _prevState: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const slugRaw = formData.get("slug");
  if (!isProtectedSlug(slugRaw)) {
    return { error: "Rota inválida." };
  }
  const slug = slugRaw satisfies ProtectedSlug;

  const password = String(formData.get("password") ?? "").trim();
  if (!password) {
    return { error: "Informe a senha de acesso." };
  }
  if (password !== accessCredentials[slug]) {
    return { error: "Senha de acesso inválida." };
  }

  const cookieStore = await cookies();
  cookieStore.set(accessCookieName(slug), password, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ONE_MONTH_SECONDS,
  });

  redirect(`/${slug}`);
}

export async function signOutAction(formData: FormData): Promise<void> {
  const slugRaw = formData.get("slug");
  if (!isProtectedSlug(slugRaw)) return;
  const cookieStore = await cookies();
  cookieStore.delete(accessCookieName(slugRaw));
  redirect(`/${slugRaw}`);
}
