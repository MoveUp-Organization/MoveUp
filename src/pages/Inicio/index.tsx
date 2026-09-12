import { Link } from 'react-router-dom';

import Card from '../../components/Card/Card';

export default function Inicio() {
  return (
    <main>
      <section className="min-h-[500px] py-16 px-5 sm:px-8 flex justify-center items-center bg-[radial-gradient(circle_at_bottom_left,rgba(0,140,255,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(122,44,255,0.28),transparent_35%),linear-gradient(135deg,#f4f8ff,#d7e9ff,#cbb6ff)]">
        <div className="max-w-[900px] text-center">
          <span className="inline-block mb-5 px-5 py-2 rounded-full bg-white/70 text-primary font-bold text-sm shadow-sm">
            🌱 Bem-vindos à MoveUP!
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-tight mb-6 text-dark">
            Mova-se de forma inteligente.
            <br />
            Mude o futuro.
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-9 max-w-[800px] mx-auto">
            A MoveUp transforma suas rotinas de transporte em ações sustentáveis.
            Acumule pontos, reduza sua pegada de carbono e ganhe recompensas
            cuidando do planeta.
          </p>

          <div className="flex justify-center">
            <Link
              to="/sobre"
              className="inline-block px-9 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-[0_10px_25px_rgba(0,102,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:opacity-90 text-lg"
            >
              Conheça a MoveUp →
            </Link>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 px-5 sm:px-8 bg-light">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">
              Descubra a MoveUp
            </h2>

            <p className="text-lg text-gray-500">
              Uma experiência que une mobilidade, sustentabilidade e benefícios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icone="🎮"
              titulo="Gamificação"
              descricao="Transforme caminhadas, pedaladas e trajetos de transporte público em conquistas e pontos dentro da plataforma."
            />

            <Card
              icone="🌱"
              titulo="Sustentabilidade"
              descricao="Acompanhe seu impacto positivo e contribua para uma mobilidade mais sustentável no dia a dia."
            />

            <Card
              icone="🎁"
              titulo="Recompensas"
              descricao="Troque seus pontos por vouchers, descontos, benefícios exclusivos e recompensas sustentáveis."
            />
          </div>
        </div>
      </section>

      {/* Destaque */}
      <section className="py-20 px-5 sm:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-[650px]">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Escolhas que transformam
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mt-3 mb-5">
              Sua mobilidade pode fazer parte da mudança.
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed mb-7">
              Descubra novas possibilidades para seus deslocamentos e encontre
              maneiras de tornar sua rotina mais sustentável.
            </p>

            <Link
              to="/home"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              Conheça o sistema →
            </Link>
          </div>

          <div className="w-full lg:w-[400px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 text-center shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
            <div className="text-7xl mb-5">🌎</div>

            <h3 className="text-2xl font-extrabold text-dark mb-3">
              Mude seus hábitos.
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Faça escolhas conscientes e transforme cada trajeto em uma
              oportunidade de contribuir para um futuro melhor.
            </p>
          </div>
        </div>
      </section>

      {/* Por que escolher a MoveUp */}
      <section className="py-16 px-5 sm:px-8 bg-[linear-gradient(135deg,#eef6ff,#f4edff)]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider">
              MoveUp
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mt-3 mb-4">
              Uma nova forma de enxergar seus trajetos.
            </h2>

            <p className="text-lg text-gray-500 max-w-[750px] mx-auto">
              Transforme suas escolhas de mobilidade em uma experiência mais
              consciente, interativa e recompensadora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🚲</span>

                <h3 className="text-xl font-extrabold text-dark">
                  Mobilidade consciente
                </h3>
              </div>

              <p className="text-gray-500 leading-relaxed">
                Incentive escolhas de transporte que contribuem para uma
                mobilidade mais sustentável.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🏆</span>

                <h3 className="text-xl font-extrabold text-dark">
                  Conquiste enquanto participa
                </h3>
              </div>

              <p className="text-gray-500 leading-relaxed">
                Participe das atividades da plataforma e acompanhe suas
                conquistas ao longo da sua jornada.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🌿</span>

                <h3 className="text-xl font-extrabold text-dark">
                  Impacto positivo
                </h3>
              </div>

              <p className="text-gray-500 leading-relaxed">
                Faça parte de uma proposta que busca aproximar tecnologia,
                mobilidade e sustentabilidade.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">✨</span>

                <h3 className="text-xl font-extrabold text-dark">
                  Sua jornada, suas escolhas
                </h3>
              </div>

              <p className="text-gray-500 leading-relaxed">
                Explore a plataforma, participe das missões e acompanhe sua
                evolução de acordo com suas escolhas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 text-center bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Pronto para começar?
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Escolha uma missão e dê o próximo passo com a MoveUp.
          </p>

          <Link
            to="/missoes"
            className="inline-block px-9 py-4 rounded-full bg-white text-primary font-extrabold shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Começar agora →
          </Link>
        </div>
      </section>
    </main>
  );
}