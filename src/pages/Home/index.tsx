import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Metrica {
  titulo: string;
  valor: string;
  label: string;
  cor: string;
}

interface Atividade {
  data: string;
  tipo: string;
  distancia: string;
  pontos: string;
}

interface MissaoSemana {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

export default function Home() {
  const [nomeUsuario, setNomeUsuario] = useState('EcoViajante');

  const [greenPoints, setGreenPoints] = useState(2450);
  const [co2Economizado, setCo2Economizado] = useState(14.8);
  const [distanciaSustentavel, setDistanciaSustentavel] = useState(42.5);

  const [missoesSemana, setMissoesSemana] = useState<MissaoSemana[]>([
    {
      id: 1,
      titulo: 'Vá de Bike',
      descricao: 'Pedale um total de 10 km nesta semana.',
      concluida: true,
    },
    {
      id: 2,
      titulo: 'Deixa o Carro em Casa',
      descricao: 'Use transporte público em 3 dias úteis.',
      concluida: false,
    },
    {
      id: 3,
      titulo: 'Passos Verdes',
      descricao: 'Caminhe pelo menos 5.000 passos em um único dia.',
      concluida: false,
    },
  ]);

  const [atividades, setAtividades] = useState<Atividade[]>([
    {
      data: '22/05/2026',
      tipo: '🚲 Bicicleta',
      distancia: '5.2 km',
      pontos: '+150 pts',
    },
    {
      data: '20/05/2026',
      tipo: '🚌 Ônibus',
      distancia: '12.0 km',
      pontos: '+80 pts',
    },
    {
      data: '19/05/2026',
      tipo: '🚶 Caminhada',
      distancia: '1.8 km',
      pontos: '+60 pts',
    },
  ]);

  const metricas: Metrica[] = [
    {
      titulo: 'Seu Saldo',
      valor: greenPoints.toLocaleString('pt-BR'),
      label: 'GreenPoints acumulados',
      cor: 'from-blue-500 to-blue-900',
    },
    {
      titulo: 'Impacto Ambiental',
      valor: `${co2Economizado.toFixed(1).replace('.', ',')} kg`,
      label: 'de CO₂ economizados',
      cor: 'from-purple-700 to-violet-500',
    },
    {
      titulo: 'Distância Sustentável',
      valor: `${distanciaSustentavel.toFixed(1).replace('.', ',')} km`,
      label: 'percorridos de forma limpa',
      cor: 'from-cyan-600 to-blue-800',
    },
  ];

  useEffect(() => {
    document.title = 'MoveUP - Mobilidade Sustentável';

    // Pega o nome verdadeiro informado no cadastro
    const cadastroSalvo = sessionStorage.getItem('moveup_cadastro');

    if (cadastroSalvo) {
      try {
        const cadastro = JSON.parse(cadastroSalvo);

        if (cadastro.nome) {
          setNomeUsuario(cadastro.nome);
        }
      } catch (error) {
        console.error('Erro ao recuperar dados do cadastro:', error);
      }
    }
  }, []);

  const concluirMissao = (id: number) => {
    setMissoesSemana((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              concluida: true,
            }
          : m
      )
    );

    const pontosMap: Record<number, number> = {
      1: 300,
      2: 500,
      3: 200,
    };

    const pontosGanhos = pontosMap[id] || 200;

    setGreenPoints((prev) => prev + pontosGanhos);
    setCo2Economizado((prev) => prev + 2.3);
    setDistanciaSustentavel((prev) => prev + 5);

    const hoje = new Date().toLocaleDateString('pt-BR');

    const novAtividade: Atividade = {
      data: hoje,
      tipo: '🎯 Missão',
      distancia: '—',
      pontos: `+${pontosGanhos} pts`,
    };

    setAtividades((prev) => [novAtividade, ...prev]);

    alert(
      `🎉 Missão Concluída! Você ganhou +${pontosGanhos} GreenPoints!`
    );
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6">
      {/* BANNER DE BOAS-VINDAS */}
      <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Olá, {nomeUsuario}!
        </h1>

        <p className="text-white/80">
          Seu impacto positivo em mobilidade sustentável hoje está ajudando a
          construir o amanhã.
        </p>
      </section>

      {/* MÉTRICAS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metricas.map((metrica) => (
          <div
            key={metrica.titulo}
            className={`bg-gradient-to-r ${metrica.cor} rounded-2xl p-6 text-white shadow-lg`}
          >
            <h2 className="text-center font-semibold text-base sm:text-lg mb-2">
              {metrica.titulo}
            </h2>

            <p className="text-center text-3xl sm:text-4xl font-extrabold">
              {metrica.valor}
            </p>

            <p className="text-center text-sm text-white/80 mt-1">
              {metrica.label}
            </p>
          </div>
        ))}
      </section>

      {/* DESAFIOS E ATIVIDADES */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* DESAFIOS DA SEMANA */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-dark mb-5">
            Desafios da Semana 🎯
          </h2>

          <div className="space-y-4">
            {missoesSemana.map((missao) => (
              <div
                key={missao.id}
                className={`rounded-xl p-4 flex items-center gap-4 ${
                  missao.concluida
                    ? 'bg-green-50'
                    : 'bg-gray-50'
                }`}
              >
                {/* ÍCONE */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                    missao.concluida
                      ? 'bg-green-100 text-green-500'
                      : 'bg-yellow-100 text-yellow-500'
                  }`}
                >
                  {missao.concluida ? '✓' : '⌛'}
                </div>

                {/* TEXTO */}
                <div className="flex-1">
                  <h3 className="font-semibold text-dark">
                    {missao.titulo}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {missao.descricao}
                  </p>
                </div>

                {/* BOTÃO */}
                {!missao.concluida && (
                  <button
                    onClick={() => concluirMissao(missao.id)}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition"
                  >
                    Concluir
                  </button>
                )}
              </div>
            ))}
          </div>

          <Link
            to="/missoes"
            className="block text-center mt-5 text-primary font-semibold hover:underline"
          >
            Ver todas as missões →
          </Link>
        </div>

        {/* ATIVIDADES RECENTES */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-dark mb-5">
            Atividades Recentes 🕒
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-3 font-medium">Data</th>
                  <th className="pb-3 font-medium">Tipo</th>
                  <th className="pb-3 font-medium">Distância</th>
                  <th className="pb-3 font-medium">Pontos</th>
                </tr>
              </thead>

              <tbody>
                {atividades.map((atividade, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-b-0"
                  >
                    <td className="py-4 text-sm text-dark">
                      {atividade.data}
                    </td>

                    <td className="py-4 text-sm text-dark">
                      {atividade.tipo}
                    </td>

                    <td className="py-4 text-sm text-dark">
                      {atividade.distancia}
                    </td>

                    <td className="py-4 text-sm font-semibold text-green-500">
                      {atividade.pontos}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}