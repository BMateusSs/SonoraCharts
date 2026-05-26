"use server"

import { redirect } from "next/navigation"
import { findOrCreateUserByLastfmUsername } from "@/lib/services/users"

export async function searchOrCreateUser(formData: FormData) {
  const username = String(formData.get("username") || "").trim()

  if (!username) {
    return
  }

  const { user, isNewUser, defaultChart } =
    await findOrCreateUserByLastfmUsername(username)

  if (isNewUser) {
    redirect(`/setup?user=${user.slug}`)
  }

  if (defaultChart) {
    redirect(`/${user.slug}/${defaultChart.slug}`)
  }

  redirect(`/${user.slug}/dashboard`)
}