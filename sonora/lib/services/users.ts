import { eq } from "drizzle-orm"

import { db } from "@/db"
import { chartProfiles, users } from "@/db/schema"
import { slugify } from "@/lib/utils/slugify"

export async function findOrCreateUserByLastfmUsername(username: string) {
  const cleanUsername = username.trim()

  if (!cleanUsername) {
    throw new Error("Username inválido.")
  }

  const existingUser = await db.query.users.findFirst({
    where: eq(users.username, cleanUsername),
  })

  if (existingUser) {
    const defaultChart = await db.query.chartProfiles.findFirst({
      where: eq(chartProfiles.userId, existingUser.id),
    })

    return {
      user: existingUser,
      isNewUser: false,
      defaultChart,
    }
  }

  const [newUser] = await db
    .insert(users)
    .values({
      username: cleanUsername,
      displayName: cleanUsername,
      slug: slugify(cleanUsername),
    })
    .returning()

  return {
    user: newUser,
    isNewUser: true,
    defaultChart: null,
  }
}

export async function findUserDashboard(slug: string){
  const user = await db.query.users.findFirst({
    where: eq(users.slug, slug),
  })

  if (!user){
    return null
  }

  const charts = await db.query.chartProfiles.findMany({
    where: eq(chartProfiles.id, user.id),
  })

  return {
    user, 
    charts,
    hasCharts: charts.length > 0,
  }
}