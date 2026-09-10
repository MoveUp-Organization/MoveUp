import { useState } from 'react';
import Botao from '../../components/Botao/Botao';

interface Passagem {
  id: number;
  titulo: string;
  custoUnitario: number;
}

interface HistoricoItem {
  id: string;
  data: string;
  transporte: string;
  quantidade: number;
  pontos: number;
}

const opcoesPassagens: Passagem[] = [
  { id: 1, titulo: 'Passagem de Ônibus', custoUnitario: 705 },
  { id: 2, titulo: 'Passagem de Trem / Metrô', custoUnitario: 600 },
  { id: 3, titulo: 'Passagem Integrada', custoUnitario: 222 },
];

export default function Voucher() {
  const [saldo, setSaldo] = useState(5000);
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);
  const [quantidades, setQuantidades] = useState<Record<number, number>>({ 1: 1, 2: 1, 3: 1 });

  const handleQuantidadeChange = (id: number, value: string) => {
    let num = parseInt(value, 10);
    if (isNaN(num) || num < 1) num = 1;
    if (num > 50) num = 50;
    setQuantidades((prev) => ({ ...prev, [id]: num }));
  };

  const handleResgatar = (passagem: Passagem) => {
    const qtd = quantidades[passagem.id];
    const totalCusto = qtd * passagem.custoUnitario;

    if (saldo < totalCusto) {
      alert(`❌ GreenPoints insuficientes! Este resgate precisa de ${totalCusto} pts, mas você tem apenas ${saldo} pts.`);
      return;
    }

    const confirmar = window.confirm(
      `CONFIRMAÇÃO DE RESGATE:\n\nTipo: ${passagem.titulo}\nQuantidade: ${qtd} passagem(ns)\nTotal de Pontos: ${totalCusto} pts\n\nClique em OK para confirmar o débito ou Cancelar para desistir.`
    );

    if (confirmar) {
      setSaldo((prev) => prev - totalCusto);
      
      const novoHistoricoItem: HistoricoItem = {
        id: Math.random().toString(36).substr(2, 9),
        data: new Date().toLocaleDateString('pt-BR'),
        transporte: passagem.titulo,
        quantidade: qtd,
        pontos: totalCusto,
      };

      setHistorico((prev) => [novoHistoricoItem, ...prev]);
      setQuantidades((prev) => ({ ...prev, [passagem.id]: 1 })); // Reseta input

      alert(`✓ Sucesso! Foram creditadas ${qtd} passagens para você.`);
    }
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-10">
      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">Resgate de Passagens</h1>
        <p className="text-gray-500 text-lg">
          Converta seus GreenPoints acumulados em créditos para seu cartão de transporte.
        </p>
      </section>

      <section className="bg-gradient-to-br from-cyan to-blue-500 text-white p-8 rounded-3xl text-center max-w-[400px] mx-auto mb-12 shadow-lg shadow-cyan/20">
        <h2 className="text-white/90 text-lg font-medium mb-2">Seus GreenPoints</h2>
        <p className="text-4xl sm:text-5xl font-bold">
          {saldo.toLocaleString('pt-BR')} <span className="text-2xl font-normal opacity-80">pts</span>
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {opcoesPassagens.map((passagem) => {
          const qtd = quantidades[passagem.id];
          const total = qtd * passagem.custoUnitario;

          return (
            <article key={passagem.id} className="bg-white p-8 rounded-3xl shadow-md text-center flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">{passagem.titulo}</h3>
                <p className="text-secondary font-bold text-sm mb-6">{passagem.custoUnitario} pts / viagem</p>

                <div className="flex flex-col items-center gap-2 mb-6">
                  <label htmlFor={`qtd-${passagem.id}`} className="text-sm font-medium text-gray-500">Quantidade:</label>
                  <input
                    id={`qtd-${passagem.id}`}
                    type="number"
                    min="1"
                    max="50"
                    value={qtd}
                    onChange={(e) => handleQuantidadeChange(passagem.id, e.target.value)}
                    className="w-20 px-3 py-2 border-2 border-gray-200 rounded-lg text-center font-bold focus:border-cyan outline-none"
                  />
                </div>

                <p className="font-bold text-dark mb-6">
                  Total: <span className="text-cyan text-xl">{total.toLocaleString('pt-BR')}</span> pts
                </p>
              </div>

              <Botao
                texto="Resgatar Créditos"
                larguraTotal
                className="bg-cyan hover:bg-[#009ecf] text-dark shadow-[0_3px_10px_rgba(0,194,255,0.2)]"
                onClick={() => handleResgatar(passagem)}
              />
            </article>
          );
        })}
      </section>

      <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-md">
        <h2 className="text-2xl font-bold text-dark mb-6">Histórico de Geração de Vouchers</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 border-b-2 border-gray-100">
              <tr>
                <th className="py-4 px-4 font-semibold">Data</th>
                <th className="py-4 px-4 font-semibold">Transporte</th>
                <th className="py-4 px-4 font-semibold">Quantidade</th>
                <th className="py-4 px-4 font-semibold">Pontos</th>
                <th className="py-4 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {historico.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400">
                    Nenhum voucher gerado ainda.
                  </td>
                </tr>
              ) : (
                historico.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 bg-[#e6fcf5] transition-colors">
                    <td className="py-4 px-4">{item.data}</td>
                    <td className="py-4 px-4 font-bold">{item.transporte}</td>
                    <td className="py-4 px-4 font-bold text-purple">{item.quantidade}</td>
                    <td className="py-4 px-4 font-bold text-danger">-{item.pontos} pts</td>
                    <td className="py-4 px-4 font-bold text-green">✓ Gerado</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}