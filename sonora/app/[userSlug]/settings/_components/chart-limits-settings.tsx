import FormInput from "./form-input"

export default function ChartLimitsSettings() {
  return (
    <section className="rounded-3xl border border-[#666674]/60 bg-[#36363C] p-6 shadow-xl">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white">
          Limites dos rankings
        </h2>

        <p className="mt-1 text-sm text-zinc-300">
          Defina quantas posições cada chart terá.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <FormInput
          label="Top artistas"
          name="artistMaxPositions"
          type="number"
          placeholder="Ex: 50"
        />

        <FormInput
          label="Top álbuns"
          name="albumMaxPositions"
          type="number"
          placeholder="Ex: 50"
        />

        <FormInput
          label="Top músicas"
          name="trackMaxPositions"
          type="number"
          placeholder="Ex: 100"
        />
      </div>

      <div className="mb-6 pt-5">
        <h2 className="text-lg font-bold text-white">
          Reproduções mínimas
        </h2>

        <p className="mt-1 text-sm text-zinc-300">
          Quantidade mínima para entrar nos charts.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <FormInput
          label="Artistas"
          name="artistMaxPositions"
          type="number"
          placeholder="Ex: 50"
        />

        <FormInput
          label="Álbuns"
          name="albumMaxPositions"
          type="number"
          placeholder="Ex: 50"
        />

        <FormInput
          label="Músicas"
          name="trackMaxPositions"
          type="number"
          placeholder="Ex: 100"
        />
      </div>
    </section>
  )
}