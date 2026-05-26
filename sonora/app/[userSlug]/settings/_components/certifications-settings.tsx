import FormInput from "./form-input"

export default function CertificationSettings() {
  return (
    <section className="rounded-3xl border border-[#666674]/60 bg-[#36363C] p-6 shadow-xl">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white">
          Certificados
        </h2>

        <p className="mt-1 text-sm text-zinc-300">
          Configure os valores das certificações.
        </p>
      </div>

      <div className="mb-1 pt-1">
        <h2 className="text-lg font-bold text-white">
          Álbuns
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <FormInput
          label="Ouro"
          name="goldAlbumCertification"
          type="number"
          placeholder="Ex: 500.000"
        />

        <FormInput
          label="Platina"
          name="patinumAlbumCertificatio"
          type="number"
          placeholder="Ex: 1.000.000"
        />

        <FormInput
          label="Diamante"
          name="diamondAlbumCertification"
          type="number"
          placeholder="Ex: 10.000.000"
        />
      </div>

      <div className="mb-1 pt-5">
        <h2 className="text-lg font-bold text-white">
          Músicas
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <FormInput
          label="Artistas"
          name="goldTrackCertification"
          type="number"
          placeholder="Ex: 500.000"
        />

        <FormInput
          label="Álbuns"
          name="platinumTrackCertification"
          type="number"
          placeholder="Ex: 1.000.000"
        />

        <FormInput
          label="Músicas"
          name="diamondTrackCertification"
          type="number"
          placeholder="Ex: 10.000.000"
        />
      </div>
    </section>
  )
}