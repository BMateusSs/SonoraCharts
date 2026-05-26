import FormInput from "./form-input"

export default function WeightsSettings() {
  return (
    <section className="rounded-3xl border border-[#666674]/60 bg-[#36363C] p-6 shadow-xl">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white">
          Pesos de vendas
        </h2>

        <p className="mt-1 text-sm text-zinc-300">
          Configure como reproduções e pontos serão convertidos em vendas.
        </p>
      </div>

      <div className="mb-4 pt-1">
        <h3 className="text-base font-bold text-white">Álbuns</h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Peso das reproduções"
          name="albumPlaysWeight"
          type="number"
          placeholder="Ex: 1"
        />

        <FormInput
          label="Peso dos pontos"
          name="albumPointsWeight"
          type="number"
          placeholder="Ex: 1"
        />
      </div>

      <div className="mb-4 pt-8">
        <h3 className="text-base font-bold text-white">Músicas</h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Peso das reproduções"
          name="trackPlaysWeight"
          type="number"
          placeholder="Ex: 1"
        />

        <FormInput
          label="Peso dos pontos"
          name="trackPointsWeight"
          type="number"
          placeholder="Ex: 1"
        />
      </div>
    </section>
  )
}