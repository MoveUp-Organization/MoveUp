import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Botao from '../../components/Botao/Botao';

interface Passagem {
  id: number;
  titulo: string;
  valorReais: number;
  custoUnitario: number;
}

interface HistoricoItem {
  id: string;
  data: string;
  transporte: string;
  quantidade: number;
  pontos: number;
  valorReais: number;
}

/*
  REGRA DA MOVEUP
  5.000 pontos = R$ 45,00

  A regra é usada internamente para calcular
  quantos pontos correspondem ao valor da passagem.
*/
const PONTOS_BASE = 5000;
const VALOR_BASE = 45;

const reaisParaPontos = (valorReais: number): number => {
  return Math.round((valorReais / VALOR_BASE) * PONTOS_BASE);
};

const pontosParaReais = (pontos: number): number => {
  return (pontos / PONTOS_BASE) * VALOR_BASE;
};

/*
  Tarifas reais de São Paulo:

  Ônibus: R$ 5,30
  Metrô/Trem: R$ 5,40
  Integrada: R$ 10,70

  Os pontos são calculados pela regra da MoveUP.
*/
const opcoesPassagens: Passagem[] = [
  {
    id: 1,
    titulo: 'Passagem de Ônibus',
    valorReais: 5.30,
    custoUnitario: reaisParaPontos(5.30),
  },
  {
    id: 2,
    titulo: 'Passagem de Trem / Metrô',
    valorReais: 5.40,
    custoUnitario: reaisParaPontos(5.40),
  },
  {
    id: 3,
    titulo: 'Passagem Integrada',
    valorReais: 10.70,
    custoUnitario: reaisParaPontos(10.70),
  },
];

export default function TransferirPontos() {
  const [saldo, setSaldo] = useState(5000);

  const [quantidades, setQuantidades] = useState<
    Record<number, number>
  >({
    1: 1,
    2: 1,
    3: 1,
  });

  useEffect(() => {
    const saldoSalvo = localStorage.getItem('greenPointsSaldo');

    if (saldoSalvo) {
      const saldoNumerico = Number(saldoSalvo);

      if (!isNaN(saldoNumerico)) {
        setSaldo(saldoNumerico);
      }
    }
  }, []);

  const handleQuantidadeChange = (
    id: number,
    value: string
  ) => {
    let num = parseInt(value, 10);

    if (isNaN(num) || num < 1) {
      num = 1;
    }

    if (num > 50) {
      num = 50;
    }

    setQuantidades((prev) => ({
      ...prev,
      [id]: num,
    }));
  };

  const handleResgatar = (passagem: Passagem) => {
    const qtd = quantidades[passagem.id];

    const totalCusto =
      qtd * passagem.custoUnitario;

    const totalEmReais =
      qtd * passagem.valorReais;

    if (saldo < totalCusto) {
      alert(
        `❌ GreenPoints insuficientes!\n\n` +
        `Este resgate precisa de ${totalCusto.toLocaleString(
          'pt-BR'
        )} pts.\n\n` +
        `Você tem apenas ${saldo.toLocaleString(
          'pt-BR'
        )} pts.`
      );

      return;
    }

    const confirmar = window.confirm(
      `CONFIRMAÇÃO DE RESGATE:\n\n` +
      `Tipo: ${passagem.titulo}\n` +
      `Quantidade: ${qtd} passagem(ns)\n` +
      `Valor: ${totalEmReais.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}\n` +
      `Total de Pontos: ${totalCusto.toLocaleString(
        'pt-BR'
      )} pts\n\n` +
      `Clique em OK para confirmar o débito.`
    );

    if (!confirmar) {
      return;
    }

    const novoSaldo = saldo - totalCusto;

    setSaldo(novoSaldo);

    localStorage.setItem(
      'greenPointsSaldo',
      novoSaldo.toString()
    );

    const novoHistoricoItem: HistoricoItem = {
      id: Math.random()
        .toString(36)
        .substring(2, 11),

      data: new Date().toLocaleDateString('pt-BR'),

      transporte: passagem.titulo,

      quantidade: qtd,

      pontos: totalCusto,

      valorReais: totalEmReais,
    };

    const historicoAtual = JSON.parse(
      localStorage.getItem('voucherHistorico') || '[]'
    );

    const novoHistorico = [
      novoHistoricoItem,
      ...historicoAtual,
    ];

    localStorage.setItem(
      'voucherHistorico',
      JSON.stringify(novoHistorico)
    );

    setQuantidades((prev) => ({
      ...prev,
      [passagem.id]: 1,
    }));

    alert(
      `✓ Sucesso!\n\n` +
      `Foram creditadas ${qtd} passagem(ns).\n\n` +
      `Valor: ${totalEmReais.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}\n` +
      `Pontos utilizados: ${totalCusto.toLocaleString(
        'pt-BR'
      )} pts\n\n` +
      `Saldo restante: ${novoSaldo.toLocaleString(
        'pt-BR'
      )} pts`
    );
  };

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
          Transferir pontos
        </h1>

        <p className="text-gray-500 text-lg">
          Converta seus MovePoints em créditos para seu cartão de transporte.
        </p>

      </section>

      {/* Saldo */}
      <section className="bg-gradient-to-br from-cyan to-blue-500 text-white p-8 rounded-3xl text-center max-w-[400px] mx-auto mb-12 shadow-lg shadow-cyan/20">

        <h2 className="text-white/90 text-lg font-medium mb-2">
          Seus MovePoints
        </h2>

        <p className="text-4xl sm:text-5xl font-bold">
          {saldo.toLocaleString('pt-BR')}

          <span className="text-2xl font-normal opacity-80">
            {' '}pts
          </span>
        </p>

      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {opcoesPassagens.map((passagem) => {
          const qtd = quantidades[passagem.id];

          const total =
            qtd * passagem.custoUnitario;

          const totalReais =
            qtd * passagem.valorReais;

          return (
            <article
              key={passagem.id}
              className="bg-white p-8 rounded-3xl shadow-md text-center flex flex-col justify-between"
            >

              <div>

                <h2 className="text-xl font-bold text-dark mb-3">
                  {passagem.titulo}
                </h2>

                {/* Valor real da passagem */}
                <p className="text-gray-500 mb-2">
                  Valor da passagem:
                </p>

                <p className="text-cyan text-2xl font-bold mb-6">
                  {passagem.valorReais.toLocaleString(
                    'pt-BR',
                    {
                      style: 'currency',
                      currency: 'BRL',
                    }
                  )}
                </p>

                {/* Pontos correspondentes */}
                <p className="text-secondary font-bold text-sm mb-6">
                  {passagem.custoUnitario.toLocaleString(
                    'pt-BR'
                  )}{' '}
                  pts / viagem
                </p>

                {/* Quantidade */}
                <div className="flex flex-col items-center gap-2 mb-6">

                  <label
                    htmlFor={`qtd-${passagem.id}`}
                    className="text-sm font-medium text-gray-500"
                  >
                    Quantidade:
                  </label>

                  <input
                    id={`qtd-${passagem.id}`}
                    type="number"
                    min="1"
                    max="50"
                    value={qtd}
                    onChange={(e) =>
                      handleQuantidadeChange(
                        passagem.id,
                        e.target.value
                      )
                    }
                    className="w-20 px-3 py-2 border-2 border-gray-200 rounded-lg text-center font-bold focus:border-cyan outline-none"
                  />

                </div>

                {/* Total de pontos */}
                <p className="font-bold text-dark mb-2">
                  Total:{' '}

                  <span className="text-cyan text-xl">
                    {total.toLocaleString('pt-BR')}
                  </span>{' '}
                  pts
                </p>

                {/* Total em dinheiro */}
                <p className="text-gray-500 text-sm mb-6">
                  Total:{' '}

                  <span className="font-bold text-cyan">
                    {totalReais.toLocaleString(
                      'pt-BR',
                      {
                        style: 'currency',
                        currency: 'BRL',
                      }
                    )}
                  </span>
                </p>

              </div>

              <Botao
                texto="Resgatar Créditos"
                larguraTotal
                className="bg-cyan hover:bg-[#009ecf] text-dark shadow-[0_3px_10px_rgba(0,194,255,0.2)]"
                onClick={() =>
                  handleResgatar(passagem)
                }
              />

            </article>
          );
        })}

      </section>

    </main>
  );
}