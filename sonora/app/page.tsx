import Image from "next/image";
import Header from "./_components/landingHeader";
import Features from "./_components/features";

import { BarChart3, Trophy, Sparkles } from "lucide-react";
import UsernameForm from "./_components/usernameForm";

export default function Home() {
  return (
    <div className="flex w-full">
      <section className="flex flex-col h-screen w-1/2 bg-black justify-center items-center">
        <div className="w-1/2 text-left">
          <Header />

          <Features
              icon={BarChart3}
              title="Charts semanais"
              text="Acompanhe suas músicas, álbuns e artistas mais ouvidos toda semana"
            />

            <Features
              icon={Sparkles}
              title="Estatísticas profundas"
              text="Descubra padrões, recordes, picos, certificações e muito mais."
            />

            <Features
              icon={Trophy}
              title="Sua história musical"
              text="Uma linha do tempo completa da sua jornada musical."
            />
          </div>

      </section>

      <section className="flex h-screen w-1/2 items-center justify-center bg-black p-8">
        <UsernameForm/>
      </section>
    </div>
  );
}
