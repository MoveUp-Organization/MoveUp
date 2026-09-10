import Card from '../../components/Card/Card';

export default function Sobre() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-10">
      <section className="text-center mb-16 max-w-[800px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
          Sustentabilidade em Movimento
        </h2>
        <p className="text-lg text-gray-500 mb-8 font-medium">
          Transformando boas ações virtuais em impactos reais na mobilidade urbana.
        </p>
        
        <div className="space-y-4 text-gray-600 leading-relaxed text-left bg-white p-8 rounded-3xl shadow-sm">
          <p>
            Todos os dias, milhões de pessoas dependem do transporte público para estudar e trabalhar,
            mas o custo da mobilidade ainda é uma barreira expressiva.
          </p>
          <p>
            Ao mesmo tempo, o excesso de veículos individuais satura as vias e eleva as emissões de carbono.
          </p>
          <p>
            A <strong className="text-primary">MoveUp</strong> nasce como uma solução inteligente para conectar sustentabilidade
            e acessibilidade diretamente na rotina das pessoas.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">O que é o Projeto?</h3>
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              Desenvolvemos uma solução inovadora que transforma pontos acumulados na plataforma
              em créditos reais para transporte coletivo.
            </p>
            <p>
              O usuário pode converter seus pontos de forma simples e prática,
              utilizando QR Code, pagamento por aproximação ou cartão físico.
            </p>
            <p>
              Nosso objetivo é incentivar a mobilidade sustentável e reduzir
              os impactos ambientais causados pelo excesso de veículos.
            </p>
          </div>
        </div>
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