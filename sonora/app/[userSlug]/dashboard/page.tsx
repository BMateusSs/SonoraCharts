import { redirect } from "next/navigation"
import { findUserDashboard } from "@/lib/services/users"
import EmptyDashboard from "./_component/EmptyDashboard"

type DashboardPageProps = {
  params: Promise<{
    userSlug: string
  }>
}

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { userSlug } = await params

  const data = await findUserDashboard(userSlug)

  if (!data) {
    redirect("/")
  }

  if (!data.hasCharts) {
    return (
        <main className="min-h-screen bg-black text-white">
            <EmptyDashboard userSlug={data.user.slug} />
        </main>
    )}

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-bold">
          Dashboard de {data.user.username}
        </h1>

        <div className="mt-8 grid gap-4">
          {data.charts.map((chart) => (
            <div
              key={chart.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-xl font-bold">{chart.chartName}</h2>
              <p className="mt-1 text-sm text-gray-400">
                Status: {chart.status}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}