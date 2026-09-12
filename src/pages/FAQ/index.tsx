import { useState } from 'react';

interface FaqItemData {
  id: number;
  pergunta: string;
  resposta: string;
}

const faqData: FaqItemData[] = [
  {
    id: 1,
    pergunta: 'Qual é o objetivo do projeto?',
    resposta: 'O objetivo do MoveUp é incentivar a mobilidade sustentável por meio de missões, pontos e recompensas.',
  },
  {
    id: 2,
    pergunta: 'Quais tecnologias foram utilizadas?',
    resposta: 'React, Vite, TypeScript e TailwindCSS foram utilizados no desenvolvimento desta aplicação.',
  },
  {
    id: 3,
    pergunta: 'Como funcionam as missões?',
    resposta: 'As missões permitem que os usuários completem tarefas sustentáveis e acumulem GreenPoints para trocar por passagens ou benefícios.',
  },
  {
    id: 4,
    pergunta: 'Como posso resgatar passagens?',
    resposta: 'Acesse a página de Voucher, escolha o tipo de transporte e converta seus GreenPoints em créditos de passagem.',
  },
  {

  id: 5,
  pergunta: 'Como acumulo MovePoints?',
  resposta:
    'Os MovePoints são acumulados ao realizar atividades e missões relacionadas à mobilidade sustentável dentro da plataforma. Esses pontos podem posteriormente ser utilizados para resgatar benefícios disponíveis no MoveUp.',
},
];

export default function FAQ() {
  const [busca, setBusca] = useState('');
  const [abertoId, setAbertoId] = useState<number | null>(1); // 1 starts open

  const toggleAccordion = (id: number) => {
    setAbertoId(abertoId === id ? null : id);
  };

  const filteredFaqs = faqData.filter((item) =>
    item.pergunta.toLowerCase().includes(busca.toLowerCase()) ||
    item.resposta.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className="max-w-[800px] mx-auto px-4 sm:px-8 py-10 min-h-[60vh]">
      <section className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">Perguntas Frequentes</h2>
        <p className="text-gray-500 text-lg">
          Encontre respostas para as dúvidas mais comuns sobre a plataforma MoveUp.
        </p>
      </section>

      {/* Search box */}
      <div className="relative mb-10 shadow-sm rounded-xl overflow-hidden">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
        <input
          type="text"
          placeholder="Buscar por uma pergunta..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full py-4 pl-12 pr-4 bg-white border-2 border-transparent focus:border-primary outline-none transition-colors text-dark"
        />
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <p className="text-center text-gray-500 py-8 bg-white rounded-xl">
            Nenhuma pergunta encontrada para "{busca}".
          </p>
        ) : (
          filteredFaqs.map((item, index) => {
            const isOpen = abertoId === item.id;
            return (
              <article
                key={item.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border-2 ${
                  isOpen ? 'border-primary shadow-md' : 'border-transparent'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-300 font-bold text-xl w-8">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-dark'}`}>
                      {item.pergunta}
                    </h3>
                  </div>
                  <span className={`text-2xl text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}>
                    ⌄
                  </span>
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <p className="text-gray-500 pl-12">{item.resposta}</p>
                </div>
              </article>
            );
          })
        )}
      </div>
    </main>
  );
}