import { useState } from 'react';
import Botao from '../../components/Botao/Botao';

export default function Conversao() {
  const [saldoAtual, setSaldoAtual] = useState(1450);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const opcoes = [
    {
      id: 1,
      icone: '🎟️',
      titulo: 'Voucher de Desconto',
      descricao: 'Troque por um cupom de 20% de desconto em parceiros.',
      custo: 500,
    },
    {
      id: 2,
      icone: '🌱',
      titulo: 'Destaque no Ranking',
      descricao: 'Use seus pontos para destacar seu perfil no ranking semanal da MoveUp.',
      custo: 800,
    },
    {
      id: 3,
      icone: '💳',
      titulo: 'Cashback na Carteira',
      descricao: 'Transforme seus pontos em R$ 15,00 de saldo na plataforma.',
      custo: 1200,
    },
  ];

  const handleConverter = (id: number, custo: number) => {
    if (saldoAtual < custo) {
      alert(`Saldo insuficiente! Você precisa de ${custo} pts, mas tem apenas ${saldoAtual} pts.`);
      return;
    }

    setLoadingId(id);
    
    // Simula uma chamada de API
    setTimeout(() => {
      setSaldoAtual((prev) => prev - custo);
      setLoadingId(null);
      alert('✅ Conversão realizada com sucesso! Verifique seu email para mais detalhes.');
    }, 800);
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-10">
      <section className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">Vouchers</h2>
        <p className="text-gray-500 text-lg">Transforme suas conquistas em benefícios reais!</p>
      </section>

      <section className="bg-gradient-to-br from-purple to-blue-500 text-white p-8 rounded-3xl text-center max-w-[400px] mx-auto mb-12 shadow-lg shadow-purple/20">
        <h3 className="text-white/90 text-lg font-medium mb-2">Seu Saldo Atual</h3>
        <p className="text-4xl sm:text-5xl font-bold">
          {saldoAtual.toLocaleString('pt-BR')} <span className="text-2xl font-normal opacity-80">pts</span>
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-dark mb-6 text-center">Escolha como deseja converter:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opcoes.map((opcao) => (
            <article
              key={opcao.id}
              className="bg-white p-8 rounded-3xl text-center shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl mb-4">{opcao.icone}</div>
                <h4 className="text-xl font-bold text-dark mb-3">{opcao.titulo}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{opcao.descricao}</p>
                <span className="inline-block px-4 py-1.5 bg-gray-100 text-dark font-bold rounded-full mb-6 text-sm">
                  {opcao.custo} pts
                </span>
              </div>
              <Botao
                texto={loadingId === opcao.id ? 'Convertendo...' : 'Converter'}
                desabilitado={loadingId !== null}
                larguraTotal
                onClick={() => handleConverter(opcao.id, opcao.custo)}
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}