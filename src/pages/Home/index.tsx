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
  const [greenPoints, setGreenPoints] = useState(2450);
  const [co2Economizado, setCo2Economizado] = useState(14.8);
  const [distanciaSustentavel, setDistanciaSustentavel] = useState(42.5);

  const [missoesSemana, setMissoesSemana] = useState<MissaoSemana[]>([
    { id: 1, titulo: 'Vá de Bike', descricao: 'Pedale um total de 10 km nesta semana.', concluida: true },
    { id: 2, titulo: 'Deixa o Carro em Casa', descricao: 'Use transporte público em 3 dias úteis.', concluida: false },
    { id: 3, titulo: 'Passos Verdes', descricao: 'Caminhe pelo menos 5.000 passos em um único dia.', concluida: false },
  ]);

  const [atividades, setAtividades] = useState<Atividade[]>([
    { data: '22/05/2026', tipo: '🚲 Bicicleta', distancia: '5.2 km', pontos: '+150 pts' },
    { data: '20/05/2026', tipo: '🚌 Ônibus', distancia: '12.0 km', pontos: '+80 pts' },
    { data: '19/05/2026', tipo: '🚶 Caminhada', distancia: '1.8 km', pontos: '+60 pts' },
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
  }, []);

  const concluirMissao = (id: number) => {
    setMissoesSemana((prev) =>
      prev.map((m) => (m.id === id ? { ...m, concluida: true } : m))
    );

    const pontosMap: Record<number, number> = { 1: 300, 2: 500, 3: 200 };
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

    alert(`🎉 Missão Concluída! Você ganhou +${pontosGanhos} GreenPoints!`);
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6">
      {/* Welcome */}
      <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Olá, EcoViajante!</h1>
        <p className="text-white/80">
          Seu impacto positivo em mobilidade sustentável hoje está ajudando a construir o amanhã.
        </p>
      </section>

      {/* Métricas */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {metricas.map((m) => (
          <div
            key={m.titulo}
            className={`bg-gradient-to-br ${m.cor} rounded-2xl p-6 text-white text-center shadow-lg`}
          >
            <h2 className="text-sm font-medium opacity-90 mb-1">{m.titulo}</h2>
            <p className="text-3xl sm:text-4xl font-extrabold mb-1 transition-transform duration-200">
              {m.valor}
            </p>
            <p className="text-xs opacity-80">{m.label}</p>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Desafios da Semana */}
        <section className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-dark mb-4">Desafios da Semana 🎯</h2>
          <ul className="space-y-4">
            {missoesSemana.map((missao) => (
              <li
                key={missao.id}
                className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                  missao.concluida ? 'bg-emerald-50' : 'bg-gray-50 hover:bg-blue-50 cursor-pointer'
                }`}
                onClick={() => !missao.concluida && concluirMissao(missao.id)}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold shrink-0 ${
                    missao.concluida
                      ? 'bg-emerald-100 text-green'
                      : 'bg-amber-100 text-amber-600'
                  }`}
                >
                  {missao.concluida ? '✓' : '⏳'}
                </span>
                <div>
                  <h3 className="font-semibold text-dark">{missao.titulo}</h3>
                  <p className="text-sm text-gray-500">{missao.descricao}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/missoes"
            className="inline-block mt-4 text-secondary font-semibold text-sm hover:underline"
          >
            Ver todas as missões →
          </Link>
        </section>

        {/* Atividades Recentes */}
        <section className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-dark mb-4">Atividades Recentes 🕒</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">Data</th>
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">Tipo</th>
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">Distância</th>
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">Pontos</th>
                </tr>
              </thead>
              <tbody>
                {atividades.map((a, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-2">{a.data}</td>
                    <td className="py-3 px-2">{a.tipo}</td>
                    <td className="py-3 px-2">{a.distancia}</td>
                    <td className="py-3 px-2 font-semibold text-green">{a.pontos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}