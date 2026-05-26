import BasicSettings from "./basic-settings"
import CertificationSettings from "./certifications-settings"
import ChartLimitsSettings from "./chart-limits-settings"
import ScoringSettings from "./scoring_settings"
import WeightsSettings from "./weights-settings"

export default function SettingsForm() {
  return (
    <form>
      <div className="space-y-6">
        <BasicSettings />

        <ChartLimitsSettings />

        <CertificationSettings />

        <WeightsSettings />

        <ScoringSettings />
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="submit"
          className="rounded-2xl bg-purple-600 px-7 py-4 font-bold text-white shadow-2xl shadow-purple-950/40 transition hover:bg-purple-500 active:scale-[0.98]"
        >
          Criar chart
        </button>
      </div>
    </form>
  )
}