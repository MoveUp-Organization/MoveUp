import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Missao {
  id: number;
  titulo: string;
  descricao: string;
  recompensa: number;
  categoria: 'diaria' | 'conteudo' | 'desafio' | 'especial';
  concluida: boolean;
}

const missoesIniciais: Missao[] = [
  {
    id: 1,
    titulo: 'Check-in Diário',
    descricao: 'Abra a plataforma hoje para garantir seus pontos de presença.',
    recompensa: 50,
    categoria: 'diaria',
    concluida: true,
  },
  {
    id: 2,
    titulo: 'Primeiros Passos',
    descricao: 'Assista ao vídeo de introdução e aprenda a usar nossa plataforma sustentável.',
    recompensa: 150,
    categoria: 'conteudo',
    concluida: false,
  },
  {
    id: 3,
    titulo: 'Perfil Completo',
    descricao: 'Preencha seus dados de usuário e adicione uma foto de perfil para maior segurança.',
    recompensa: 300,
    categoria: 'desafio',
    concluida: false,
  },
  {
    id: 4,
    titulo: 'Consciência Verde',
    descricao: 'Responda corretamente ao quiz semanal sobre reciclagem e descarte sustentável.',
    recompensa: 500,
    categoria: 'especial',
    concluida: false,
  },
  {
    id: 5,
    titulo: 'Pedale 5km',
    descricao: 'Use bicicleta para percorrer pelo menos 5 km em um dia e ganhe pontos extras.',
    recompensa: 200,
    categoria: 'desafio',
    concluida: false,
  },
  {
    id: 6,
    titulo: 'Transporte Público',
    descricao: 'Utilize o transporte público no trajeto para o trabalho ou escola por 3 dias.',
    recompensa: 350,
    categoria: 'especial',
    concluida: false,
  },
];

const coresBadge: Record<string, string> = {
  diaria: 'bg-blue-100 text-blue-700',
  conteudo: 'bg-purple-100 text-purple-700',
  desafio: 'bg-amber-100 text-amber-700',
  especial: 'bg-emerald-100 text-emerald-700',
};

const labelBadge: Record<string, string> = {
  diaria: 'Diária',
  conteudo: 'Conteúdo',
  desafio: 'Desafio',
  especial: 'Especial',
};

export default function Missoes() {
  const [missoes, setMissoes] = useState<Missao[]>(missoesIniciais);

  const concluirMissao = (id: number) => {
    setMissoes((prev) =>
      prev.map((m) => {
        if (m.id === id && !m.concluida) {
          alert(`Parabéns! Você completou a missão e ganhou ${m.recompensa} pontos.`);
          return { ...m, concluida: true };
        }
        return m;
      })
    );
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-10">
      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">
          Missões Disponíveis
        </h1>
        <p className="text-gray-500 text-lg">
          Complete as tarefas abaixo para acumular pontos e subir de nível!
        </p>
      </section>

      {/* Grid de Missões */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {missoes.map((missao) => (
          <article
            key={missao.id}
            className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${coresBadge[missao.categoria]}`}
              >
                {labelBadge[missao.categoria]}
              </span>

              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-dark">{missao.titulo}</h2>
                <span className="text-green font-bold text-sm">+{missao.recompensa} pts</span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-4">{missao.descricao}</p>
            </div>

            <div className="flex gap-2">
              {missao.concluida ? (
                <button
                  disabled
                  className="w-full py-2.5 rounded-xl bg-emerald-100 text-green font-bold text-sm cursor-not-allowed"
                >
                  Concluído ✓
                </button>
              ) : (
                <>
                  <button
                    onClick={() => concluirMissao(missao.id)}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 cursor-pointer"
                  >
                    Concluir Missão
                  </button>
                  <Link
                    to={`/missoes/${missao.id}`}
                    className="py-2.5 px-4 rounded-xl border-2 border-primary text-primary font-bold text-sm transition-colors hover:bg-primary hover:text-white"
                  >
                    Detalhes
                  </Link>
                </>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}