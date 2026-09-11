import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

export default function Inicio() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[420px] py-14 px-5 flex justify-center items-center text-center bg-[radial-gradient(circle_at_bottom_left,rgba(0,140,255,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(122,44,255,0.28),transparent_35%),linear-gradient(135deg,#f4f8ff,#d7e9ff,#cbb6ff)]">
        <div className="max-w-[850px]">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight mb-6 text-dark">
            Mova-se de forma inteligente.
            <br />
            Mude o futuro.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-9">
            A MoveUp transforma suas rotinas de transporte em ações sustentáveis.
            Acumule pontos, reduza sua pegada de carbono e ganhe recompensas
            cuidando do planeta.
          </p>
          <Link
            to="/sobre"
            className="inline-block px-9 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-[0_10px_25px_rgba(0,102,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:opacity-90 text-lg"
          >
            Saiba Mais
          </Link>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-5 sm:px-8 bg-light">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icone="🎮"
            titulo="Gamificação"
            descricao="Transforme caminhadas, pedaladas e trajetos de transporte público em conquistas e pontos dentro da plataforma."
          />
          <Card
            icone="🌱"
            titulo="Sustentabilidade"
            descricao="Acompanhe em tempo real a quantidade de emissões evitadas e veja seu impacto positivo na cidade."
          />
          <Card
            icone="🎁"
            titulo="Recompensas"
            descricao="Troque seus pontos por vouchers, descontos, benefícios exclusivos e recompensas sustentáveis."
          />
        </div>
      </section>
    </main>
  );
}