import FormInput from "./form-input"

export default function BasicSettings() {
  return (
    <section className="rounded-3xl border border-[#666674]/60 bg-[#36363C] p-6 shadow-xl">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white">
          Informações básicas
        </h2>

        <p className="mt-1 text-sm text-zinc-300">
          Escolha o nome do chart e a data que marca o início da sua primeira semana.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <FormInput
          label="Nome do chart"
          name="name"
          placeholder="Ex: Hot 100"
        />

        <FormInput
          label="Usuário do Last.fm"
          name="username"
          placeholder="T4RG"
        />

        <FormInput
          label="Dia inicial do chart"
          name="initialDate"
          type="date"
        />
      </div>
    </section>
  )
}