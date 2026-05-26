import SettingsForm from "./_components/settings-form"

export default function ChartSettings() {
  return (
    <main className="min-h-screen w-full bg-[#1F1F23] px-6 py-12 text-white">
      <section className="flex min-h-[calc(100vh-6rem)] w-full items-center justify-center">
        <SettingsForm />
      </section>
    </main>
  )
}