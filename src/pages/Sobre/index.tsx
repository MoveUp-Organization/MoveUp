import Card from '../../components/Card/Card';

export default function Sobre() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-10">

      {/* INTRODUÇÃO */}
      <section className="text-center mb-16 max-w-[900px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
          Sustentabilidade em Movimento
        </h2>

        <p className="text-lg text-gray-500 mb-8 font-medium">
          Transformando o engajamento digital em benefícios reais para a
          mobilidade urbana sustentável.
        </p>

        <div className="space-y-4 text-gray-600 leading-relaxed text-left bg-white p-8 rounded-3xl shadow-sm">
          <p>
            A <strong className="text-primary">MoveUP</strong> é uma solução
            integrada à plataforma SoulUp que busca conectar tecnologia,
            sustentabilidade e mobilidade urbana.
          </p>

          <p>
            A proposta é transformar os pontos acumulados pelos usuários
            através de suas interações e ações na plataforma em benefícios
            concretos, especialmente para o uso do transporte público.
          </p>

          <p>
            Dessa forma, a MoveUP aproxima o ambiente digital do mundo físico,
            incentivando hábitos mais sustentáveis e contribuindo para a
            redução dos impactos ambientais causados pelo uso excessivo de
            veículos individuais.
          </p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-6 text-center">
            O problema que queremos resolver
          </h3>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              O transporte público é um dos principais meios para reduzir as
              emissões de carbono quando comparado ao uso de veículos
              individuais. Porém, os custos relacionados à mobilidade ainda
              representam uma barreira para muitas pessoas.
            </p>

            <p>
              Ao mesmo tempo, o uso excessivo de veículos individuais contribui
              para a saturação das vias e para o aumento das emissões de
              carbono nas cidades.
            </p>

            <p>
              Atualmente, os pontos acumulados pelos usuários possuem valor
              principalmente dentro do ambiente digital. A proposta da
              MoveUP é permitir que esses pontos sejam utilizados para
              subsidiar parcial ou totalmente os custos do transporte público.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE É O PROJETO */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl">
        <div className="max-w-[900px] mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            O que é a MoveUP?
          </h3>

          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              A MoveUP funciona como uma nova área dentro da plataforma
              SoulUp, com uma experiência semelhante a uma carteira digital.
              Nela, o usuário consegue acompanhar seus pontos, suas
              conversões e os benefícios relacionados à mobilidade.
            </p>

            <p>
              O principal objetivo é permitir que os GreenPoints acumulados
              sejam convertidos em créditos ou vouchers destinados ao
              transporte público.
            </p>

            <p>
              A solução foi pensada para ser rápida, segura, acessível e
              capaz de evoluir gradualmente conforme novas integrações sejam
              desenvolvidas.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-8 text-center">
          Como funciona?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Card
            icone="🎯"
            titulo="1. Participe"
            descricao="O usuário participa de missões, campanhas, comunidades e outras ações dentro da plataforma."
          />

          <Card
            icone="⭐"
            titulo="2. Acumule pontos"
            descricao="As ações realizadas geram pontos que ficam disponíveis para o usuário."
          />

          <Card
            icone="🔄"
            titulo="3. Converta"
            descricao="Os pontos acumulados podem ser convertidos em créditos ou vouchers de mobilidade."
          />

          <Card
            icone="🚌"
            titulo="4. Utilize"
            descricao="O benefício pode ser utilizado para auxiliar no pagamento do transporte público."
          />

        </div>
      </section>

      {/* CONVERSÃO */}
      <section className="mb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-6 text-center">
            Conversão de GreenPoints
          </h3>

          <p className="text-gray-600 leading-relaxed text-center max-w-[800px] mx-auto mb-8">
            A proposta estabelece uma relação entre os pontos acumulados e o
            valor utilizado na mobilidade. Atualmente, a referência definida
            no projeto é de <strong>5.000 pontos equivalendo a R$ 45,00</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[800px] mx-auto">

            <div className="bg-blue-50 rounded-2xl p-5 text-center">
              <p className="text-2xl font-extrabold text-primary">
                1.189 pts
              </p>
              <p className="text-gray-600 mt-1">
                ≈ R$ 10,70
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-5 text-center">
              <p className="text-2xl font-extrabold text-secondary">
                5.000 pts
              </p>
              <p className="text-gray-600 mt-1">
                = R$ 45,00
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-5 text-center">
              <p className="text-2xl font-extrabold text-primary">
                10.000 pts
              </p>
              <p className="text-gray-600 mt-1">
                = R$ 90,00
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FORMAS DE UTILIZAÇÃO */}
      <section className="mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-8 text-center">
          Como o benefício pode ser utilizado?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card
            icone="🎫"
            titulo="Cartão físico"
            descricao="Em uma segunda fase, o cartão MoveUP poderá ser utilizado em validadores de transporte, de forma semelhante aos cartões tradicionais."
          />

          <Card
            icone="📱"
            titulo="Cartão digital"
            descricao="A proposta também prevê um cartão digital que poderá ser utilizado diretamente pelo celular através da tecnologia de aproximação."
          />

          <Card
            icone="📲"
            titulo="QR Code"
            descricao="Na primeira fase, a solução prevê vouchers e QR Codes próprios para permitir a utilização do benefício de forma prática."
          />

        </div>
      </section>

      {/* IMPACTO AMBIENTAL */}
      <section className="bg-gradient-to-br from-[#2563eb] to-[#6366f1] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl">
        <div className="max-w-[900px] mx-auto text-center">

          <div className="text-5xl mb-5">
            🌱
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold mb-5">
            Impacto ambiental
          </h3>

          <p className="text-white/90 leading-relaxed">
            A MoveUP não busca apenas oferecer um benefício ao usuário.
            A plataforma também pretende mensurar o impacto ambiental
            provocado pelo uso do transporte público.
          </p>

          <p className="text-white/90 leading-relaxed mt-4">
            Sempre que um crédito for utilizado, o sistema poderá estimar a
            redução de CO₂ em comparação ao uso de veículos individuais.
            Esses resultados podem ser apresentados em painéis, rankings e
            metas coletivas para estimular ainda mais a participação dos
            usuários.
          </p>

        </div>
      </section>

      {/* MISSÕES */}
      <section className="mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-8 text-center">
          Missões Sustentáveis
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card
            icone="🚲"
            titulo="Viagens sustentáveis"
            descricao="Incentivo à realização de deslocamentos utilizando alternativas mais sustentáveis."
          />

          <Card
            icone="📍"
            titulo="Check-in"
            descricao="Participação em atividades como check-ins em estações e ações relacionadas à mobilidade."
          />

          <Card
            icone="🏆"
            titulo="Desafios e rankings"
            descricao="Metas individuais e colaborativas que estimulam o engajamento e a participação da comunidade."
          />

        </div>
      </section>

      <section className="text-center mb-10 max-w-[900px] mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
          Como a MoveUp incentiva a mobilidade sustentável?
        </h3>

        <p className="text-gray-500 text-lg leading-relaxed">
          A MoveUp busca tornar a mobilidade sustentável mais acessível e
          participativa. Por meio da plataforma, o usuário pode realizar
          deslocamentos mais sustentáveis, participar de atividades relacionadas
          à mobilidade e cumprir desafios que incentivam hábitos mais conscientes.
          Essas ações ajudam a transformar a rotina de deslocamento em uma
          experiência mais sustentável, interativa e colaborativa.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <Card

          icone="🌱"
          titulo="Mobilidade Real"
          descricao="Transformamos benefícios digitais em incentivos concretos para o transporte público."

        />

        <Card

          icone="💡"
          titulo="Solução Inteligente"
          descricao="Utilizamos tecnologias modernas para criar uma experiência prática, segura e acessível."

        />

        <Card

          icone="🌍"
          titulo="Consciência Verde"
          descricao="Incentivamos hábitos sustentáveis e a redução da pegada de carbono nas grandes cidades."

        />

      </section>

    </main>

  );

}