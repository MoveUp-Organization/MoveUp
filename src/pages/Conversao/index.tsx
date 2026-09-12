import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

interface DadosUsuario {
  nome: string;
  saldo: number;
  co2Evitado: number;
  distanciaPercorrida: number;
  movePointsAcumulados: number;
}

export default function Conversao() {
  const [saldoVisivel, setSaldoVisivel] = useState(false);

  const [dados, setDados] = useState<DadosUsuario>({
    nome: 'EcoViajante',
    saldo: 1450,
    co2Evitado: 12.5,
    distanciaPercorrida: 42.5,
    movePointsAcumulados: 2450,
  });

  useEffect(() => {
    // Pega o nome verdadeiro informado no cadastro
    const cadastroSalvo = localStorage.getItem('moveupUsuario');

    if (cadastroSalvo) {
      try {
        const parsed = JSON.parse(cadastroSalvo);

        setDados((prev) => ({
          ...prev,
          nome: parsed.nome || 'EcoViajante',
        }));
      } catch (error) {
        console.error('Erro ao recuperar dados do cadastro:', error);
      }
    }

    // Recupera os dados de saldo
    const saldoSalvo = sessionStorage.getItem('moveup_saldo');

    if (saldoSalvo) {
      try {
        const parsedSaldo = JSON.parse(saldoSalvo);

        setDados((prev) => ({
          ...prev,
          saldo: parsedSaldo.saldo ?? prev.saldo,
          co2Evitado: parsedSaldo.co2Evitado ?? prev.co2Evitado,
          distanciaPercorrida:
            parsedSaldo.distanciaPercorrida ?? prev.distanciaPercorrida,
          movePointsAcumulados:
            parsedSaldo.movePointsAcumulados ??
            prev.movePointsAcumulados,
        }));
      } catch (error) {
        console.error('Erro ao recuperar dados de saldo:', error);
      }
    }
  }, []);

  const toggleSaldo = () => {
    setSaldoVisivel((prev) => !prev);
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6">
      {/* Saudação */}
      <section className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-1">
          Olá, {dados.nome}!
        </h1>

        <p className="text-gray-500 text-base sm:text-lg">
          Gerencie sua mobilidade de forma simples e sustentável.
        </p>
      </section>

      {/* Dois blocos principais lado a lado */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Bloco Saldo */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white shadow-lg relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-medium opacity-90">
              Saldo disponível
            </h2>

            <button
              type="button"
              onClick={toggleSaldo}
              className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
              aria-label={
                saldoVisivel
                  ? 'Ocultar saldo de MovePoints'
                  : 'Mostrar saldo de MovePoints'
              }
            >
              {saldoVisivel ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zM12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 7c2.8 0 5 2.2 5 5 0 .6-.1 1.3-.4 1.8l2.9 2.9c1.5-1.3 2.7-2.9 3.5-4.7-1.7-4.4-6-7.5-11-7.5-1.4 0-2.7.3-4 .7l2.2 2.2c.5-.3 1.2-.4 1.8-.4zM2 4.3l2.3 2.3.4.4C3.2 8.3 2 10 1 12c1.7 4.4 6 7.5 11 7.5 1.5 0 3-.3 4.4-.8l.4.4 2.9 2.9 1.3-1.3L3.3 3 2 4.3zm5.5 5.5 1.5 1.5c0 .2-.1.5-.1.7 0 1.7 1.3 3 3 3 .2 0 .5 0 .7-.1l1.5 1.5c-.7.3-1.4.6-2.2.6-2.8 0-5-2.2-5-5 0-.8.2-1.5.6-2.2zm4.3-.8 3.2 3.2V12c0-1.7-1.3-3-3-3h-.2z" />
                </svg>
              )}
            </button>
          </div>

          <div className="mb-6">
            {saldoVisivel ? (
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                {dados.saldo.toLocaleString('pt-BR')}{' '}
                <span className="text-lg sm:text-xl font-medium opacity-80">
                  MovePoints
                </span>
              </p>
            ) : (
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                ••••••••
              </p>
            )}
          </div>

          <Link
            to="/meu-cartao"
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            Ver conta

            <span className="text-lg leading-none">
              →
            </span>
          </Link>
        </div>

        {/* Bloco Indicadores */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
          <h2 className="text-lg font-bold text-dark mb-5">
            Indicadores
          </h2>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green/10 text-2xl shrink-0">
                🌿
              </span>

              <div className="flex-1">
                <p className="text-sm text-gray-500">
                  CO₂ evitado
                </p>

                <p className="text-xl font-bold text-dark">
                  {dados.co2Evitado.toFixed(1).replace('.', ',')} kg
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 text-2xl shrink-0">
                🚲
              </span>

              <div className="flex-1">
                <p className="text-sm text-gray-500">
                  Distância percorrida
                </p>

                <p className="text-xl font-bold text-dark">
                  {dados.distanciaPercorrida
                    .toFixed(1)
                    .replace('.', ',')}{' '}
                  km
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-2xl shrink-0">
                ⭐
              </span>

              <div className="flex-1">
                <p className="text-sm text-gray-500">
                  MovePoints acumulados
                </p>

                <p className="text-xl font-bold text-dark">
                  {dados.movePointsAcumulados.toLocaleString('pt-BR')} pts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ações Rápidas */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-dark mb-4">
          Ações rápidas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Transferir pontos */}
          <Link
            to="/transferir-pontos"
            className="block cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <Card
              icone="🔄"
              titulo="Transferir pontos"
              descricao="Envie MovePoints para outros usuários da plataforma."
            />
          </Link>

          {/* Meu cartão */}
          <Link
            to="/meu-cartao"
            className="block cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <Card
              icone="💳"
              titulo="Meu cartão"
              descricao="Gerencie seu cartão de transporte vinculado ao MoveUp."
            />
          </Link>

          {/* Histórico */}
          <Link
            to="/historico"
            className="block cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <Card
              icone="📊"
              titulo="Histórico de geração"
              descricao="Veja o histórico completo de MovePoints gerados."
            />
          </Link>
        </div>
      </section>

      {/* Bloco de Destaque */}
      <section className="bg-gradient-to-r from-dark to-[#2a2f7e] rounded-2xl p-6 sm:p-8 flex items-center gap-6 shadow-lg">
        <span className="text-4xl shrink-0">
          🛡️
        </span>

        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
            Sua mobilidade é nossa prioridade
          </h2>

          <p className="text-white/70 text-sm sm:text-base">
            Segurança, sustentabilidade e praticidade.
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 text-white/60 shrink-0 hidden sm:block"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 011.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </section>
    </main>
  );
}
