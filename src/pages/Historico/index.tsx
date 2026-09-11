import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HistoricoItem {
  id: string;
  data: string;
  transporte: string;
  quantidade: number;
  pontos: number;
}

export default function Historico() {
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);

  useEffect(() => {
    const historicoSalvo = localStorage.getItem(
      'voucherHistorico'
    );

    if (historicoSalvo) {
      setHistorico(
        JSON.parse(historicoSalvo)
      );
    }
  }, []);

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-10">

      {/* Botão voltar */}
      <Link
        to="/conversao"
        className="inline-flex items-center gap-2 mb-6 text-primary font-semibold hover:text-secondary transition-colors"
      >
        <span className="text-2xl leading-none">
          ←
        </span>

        Voltar
      </Link>

      {/* Título */}
      <section className="text-center mb-10">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">
          Histórico de Geração
        </h1>

        <p className="text-gray-500 text-lg">
          Confira o histórico dos seus GreenPoints convertidos.
        </p>

      </section>

      {/* Histórico */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-md">

        <h2 className="text-2xl font-bold text-dark mb-6">
          Histórico de Geração de Vouchers
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full text-sm text-left">

            <thead className="bg-gray-50 text-gray-600 border-b-2 border-gray-100">

              <tr>

                <th className="py-4 px-4 font-semibold">
                  Data
                </th>

                <th className="py-4 px-4 font-semibold">
                  Transporte
                </th>

                <th className="py-4 px-4 font-semibold">
                  Quantidade
                </th>

                <th className="py-4 px-4 font-semibold">
                  Pontos
                </th>

                <th className="py-4 px-4 font-semibold">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {historico.length === 0 ? (

                <tr>

                  <td
                    colSpan={5}
                    className="py-8 text-center text-gray-400"
                  >
                    Nenhum voucher gerado ainda.
                  </td>

                </tr>

              ) : (

                historico.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b border-gray-50 bg-[#e6fcf5] transition-colors"
                  >

                    <td className="py-4 px-4">
                      {item.data}
                    </td>

                    <td className="py-4 px-4 font-bold">
                      {item.transporte}
                    </td>

                    <td className="py-4 px-4 font-bold text-purple">
                      {item.quantidade}
                    </td>

                    <td className="py-4 px-4 font-bold text-danger">
                      -{item.pontos} pts
                    </td>

                    <td className="py-4 px-4 font-bold text-green">
                      ✓ Gerado
                    </td>

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