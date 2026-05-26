import FormInput from "./form-input"

export default function ScoringSettings() {
  return (
    <section className="rounded-3xl border border-[#666674]/60 bg-[#36363C] p-6 shadow-xl">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white">
          Sistema de pontos
        </h2>

        <p className="mt-1 text-sm text-zinc-300">
          Defina como cada posição do chart gera pontos. Essa regra será usada
          para músicas, álbuns e artistas.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <FormInput
          label="Pontuação máxima"
          name="maxPoints"
          type="number"
          placeholder="Ex: 100"
        />

        <FormInput
          label="Queda por posição"
          name="pointDecay"
          type="number"
          placeholder="Ex: 2"
        />

        <FormInput
          label="Pontuação mínima"
          name="minPoints"
          type="number"
          placeholder="Ex: 1"
        />
      </div>
    </section>
  )
}