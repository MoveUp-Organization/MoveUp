import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface DadosCarteira {
  nome: string;
  saldo: number;
  greenPoints: number;
  numeroCartao: string;
}

export default function MeuCartao() {
  const [saldoVisivel, setSaldoVisivel] = useState(true);

  const [dados, setDados] = useState<DadosCarteira>({
    nome: 'EcoViajante',
    saldo: 0,
    greenPoints: 2450,
    numeroCartao: '**** **** **** 4827',
  });

  useEffect(() => {
    const usuarioSalvo = sessionStorage.getItem('moveup_user');

    if (usuarioSalvo) {
      try {
        const usuario = JSON.parse(usuarioSalvo);

        setDados((prev) => ({
          ...prev,
          nome: usuario.nome || 'EcoViajante',
        }));
      } catch {
        console.log('Não foi possível carregar os dados do usuário.');
      }
    }

    const saldoSalvo = sessionStorage.getItem('moveup_saldo');

    if (saldoSalvo) {
      try {
        const dadosSaldo = JSON.parse(saldoSalvo);

        setDados((prev) => ({
          ...prev,
          saldo: dadosSaldo.saldo ?? prev.saldo,
          greenPoints:
            dadosSaldo.greenPointsAcumulados ?? prev.greenPoints,
        }));
      } catch {
        console.log('Não foi possível carregar o saldo.');
      }
    }
  }, []);

  const toggleSaldo = () => {
    setSaldoVisivel((prev) => !prev);
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-8">

        <Link
        to="/conversao"
        className="inline-flex items-center gap-2 mb-6 text-primary font-semibold hover:text-secondary transition-colors"
        >
        <span className="text-2xl leading-none">←</span>
        Voltar
        </Link>

      {/* CABEÇALHO DA PÁGINA */}
      <section className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-1">
          Meu Cartão
        </h1>

        <p className="text-gray-500 text-base sm:text-lg">
          Gerencie seu Bilhete MoveUp e sua carteira digital.
        </p>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

        {/* BILHETE MOVEUP */}
        <div>
          <h2 className="text-lg font-bold text-dark mb-4">
            Bilhete MoveUp
          </h2>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-6 sm:p-8 text-white shadow-xl min-h-[280px]">

            {/* Decorações */}
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10" />

            <div className="absolute -right-10 bottom-[-70px] w-56 h-56 rounded-full bg-white/10" />

            {/* Logo / nome */}
            <div className="relative z-10 flex items-center justify-between mb-10">

              <div>
                <p className="text-sm font-medium text-white/70">
                  BILHETE
                </p>

                <h3 className="text-2xl font-extrabold tracking-tight">
                  MoveUp
                </h3>
              </div>

              {/* Chip */}
              <div className="w-12 h-9 rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center shadow-md">
                <div className="w-7 h-5 border-2 border-yellow-700/40 rounded-md" />
              </div>

            </div>

            {/* Número do cartão */}
            <div className="relative z-10 mb-8">

              <p className="text-xs text-white/60 mb-1">
                Número do cartão
              </p>

              <p className="text-xl sm:text-2xl font-semibold tracking-[0.18em]">
                {dados.numeroCartao}
              </p>

            </div>

            {/* Usuário */}
            <div className="relative z-10 flex items-end justify-between">

              <div>
                <p className="text-xs text-white/60 mb-1">
                  TITULAR
                </p>

                <p className="font-semibold uppercase">
                  {dados.nome}
                </p>
              </div>

              <div className="text-right">

                <p className="text-xs text-white/60 mb-1">
                  STATUS
                </p>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-green-300" />
                  Ativo
                </span>

              </div>

            </div>

          </div>
        </div>

        {/* CARTEIRA */}
        <div>

          <h2 className="text-lg font-bold text-dark mb-4">
            Minha carteira
          </h2>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md min-h-[280px] flex flex-col justify-between">

            {/* Saldo */}
            <div>

              <div className="flex items-center justify-between mb-3">

                <p className="text-sm text-gray-500">
                  Saldo disponível
                </p>

                <button
                  onClick={toggleSaldo}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label={
                    saldoVisivel
                      ? 'Ocultar saldo'
                      : 'Mostrar saldo'
                  }
                >

                  {saldoVisivel ? (

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zM12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
                    </svg>

                  ) : (

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path d="M2 4.3l2.3 2.3.4.4C3.2 8.3 2 10 1 12c1.7 4.4 6 7.5 11 7.5 1.5 0 3-.3 4.4-.8l2.9 2.9 1.3-1.3L3.3 3 2 4.3zM12 17c-2.8 0-5-2.2-5-5 0-.8.2-1.5.6-2.2l1.5 1.5c0 .2-.1.5-.1.7 0 1.7 1.3 3 3 3 .2 0 .5 0 .7-.1l1.5 1.5c-.7.3-1.4.6-2.2.6zm0-10c5 0 9.3 3.1 11 7.5-.8 1.8-2 3.4-3.5 4.7l-1.5-1.5c.8-.9 1.5-2 2-3.2-1.7-3-4.7-5-8-5-.8 0-1.6.1-2.4.3L8 8.2C9.2 7.4 10.5 7 12 7z" />
                    </svg>

                  )}

                </button>

              </div>

              {saldoVisivel ? (

                <p className="text-4xl sm:text-5xl font-extrabold text-dark tracking-tight">
                  {dados.saldo.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>

              ) : (

                <p className="text-4xl sm:text-5xl font-extrabold text-dark tracking-tight">
                  R$ •••••
                </p>

              )}

              <p className="text-sm text-gray-400 mt-2">
                Valor disponível na carteira
              </p>

            </div>

            {/* GreenPoints */}
            <div className="mt-6 p-4 rounded-2xl bg-purple-50 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/10 text-2xl">
                  ⭐
                </span>

                <div>

                  <p className="text-sm text-gray-500">
                    GreenPoints disponíveis
                  </p>

                  <p className="font-bold text-dark">
                    {dados.greenPoints.toLocaleString('pt-BR')} pts
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONVERTER GREENPOINTS */}
      <section className="mb-8">

        <div className="bg-gradient-to-r from-dark to-[#2a2f7e] rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-center gap-5">

          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-3xl shrink-0">
            💰
          </div>

          <div className="flex-1 text-center sm:text-left">

            <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
              Transforme seus GreenPoints em saldo
            </h2>

            <p className="text-white/70 text-sm sm:text-base">
              Converta seus pontos e utilize o saldo na sua carteira MoveUp.
            </p>

          </div>

          <Link
            to="/transferir-pontos"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-dark font-bold hover:bg-gray-100 transition-colors"
          >
            Converter GreenPoints

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-.02 1.06z"
                clipRule="evenodd"
              />
            </svg>

          </Link>

        </div>

      </section>

      {/* INFORMAÇÕES DO BILHETE */}
      <section>

        <h2 className="text-lg font-bold text-dark mb-4">
          Informações do bilhete
        </h2>

        <div className="bg-white rounded-3xl shadow-md divide-y divide-gray-100">

          <div className="flex items-center justify-between p-5">

            <div>

              <p className="text-sm text-gray-500">
                Tipo de cartão
              </p>

              <p className="font-semibold text-dark mt-1">
                Bilhete Único MoveUp
              </p>

            </div>

            <span className="text-2xl">
              🎫
            </span>

          </div>

          <div className="flex items-center justify-between p-5">

            <div>

              <p className="text-sm text-gray-500">
                Situação
              </p>

              <p className="font-semibold text-green-600 mt-1">
                Cartão ativo
              </p>

            </div>

            <span className="w-3 h-3 rounded-full bg-green-500" />

          </div>

          <div className="flex items-center justify-between p-5">

            <div>

              <p className="text-sm text-gray-500">
                Número do cartão
              </p>

              <p className="font-semibold text-dark mt-1 tracking-wider">
                {dados.numeroCartao}
              </p>

            </div>

            <span className="text-2xl">
              💳
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}