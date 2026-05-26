import { searchOrCreateUser } from "../actions"

export default function UsernameForm(){
    return(
        <div>
        <div className="flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-3xl border border-purple-500/20 from-purple-900/10 to-black p-12 text-center shadow-2xl backdrop-blur-xl">
          <div className="mb-8 flex flex-col items-center justify-center">
            <img src="/SonoraLogo.svg" alt="logo" className="h-18 w-18" />

            <h1 className="mb-2 text-3xl font-bold text-white">
              Bem-vindo ao <span className="text-purple-400">Sonora</span>
            </h1>

            <p className="text-sm text-gray-400">
              Acesse suas estatísticas conectando sua conta
            </p>
          </div>

          <div className="w-full space-y-4">
            <form action={searchOrCreateUser} className="flex flex-col space-y-2 text-left">
              <label
                htmlFor="lastfm"
                className="ml-1 text-xs font-semibold uppercase tracking-wider text-purple-300"
              >
                Username Last.fm
              </label>

              <input
                id="lastfm"
                name="username"
                type="text"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
              />

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-purple-600 py-4 font-bold text-white shadow-lg shadow-purple-900/20 transition-all hover:bg-purple-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Explorar minhas músicas
              </button>
            </form>

          </div>

          <p className="mt-8 text-[10px] uppercase tracking-widest text-gray-500">
            Não é necessário senha
          </p>
        </div>
      </div>
    )
}