type EmptyDashboardProps = {
  userSlug: string
}

export default function EmptyDashboard({userSlug}: EmptyDashboardProps){
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
                <h1 className="text-4xl font-bold">
                    Você ainda não configurou nenhum chart
                </h1>

                <p className="mt-4 text-gray-400">
                    Configure seu primeiro chart para começar a gerar rankings semanais.
                </p>

                <a
                    href={`/${userSlug}/settings`}
                    className="mt-8 rounded-xl bg-purple-600 px-6 py-4 font-bold text-white hover:bg-purple-500"
                >
                    Configurar meu primeiro chart
                </a>
            </section>
      </main>
    )
}