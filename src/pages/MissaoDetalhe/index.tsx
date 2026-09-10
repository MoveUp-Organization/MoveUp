import { useParams, useNavigate } from 'react-router-dom';
import Botao from '../../components/Botao/Botao';
import { useState } from 'react';

interface MissaoDetalheData {
  id: number;
  titulo: string;
  descricao: string;
  descricaoCompleta: string;
  recompensa: number;
  categoria: string;
  dificuldade: string;
  prazo: string;
}

const missoesData: MissaoDetalheData[] = [
  {
    id: 1,
    titulo: 'Check-in Diário',
    descricao: 'Abra a plataforma hoje para garantir seus pontos de presença.',
    descricaoCompleta:
      'Acesse a plataforma MoveUp diariamente para ganhar pontos de presença. Esta missão incentiva o uso regular da plataforma e mantém você atualizado sobre novas missões e recompensas disponíveis.',
    recompensa: 50,
    categoria: 'Diária',
    dificuldade: 'Fácil',
    prazo: 'Diário',
  },
  {
    id: 2,
    titulo: 'Primeiros Passos',
    descricao: 'Assista ao vídeo de introdução e aprenda a usar nossa plataforma sustentável.',
    descricaoCompleta:
      'Complete o tutorial de boas-vindas assistindo ao vídeo introdutório da MoveUp. Entenda como acumular GreenPoints, concluir missões e converter seus pontos em benefícios reais para o transporte público.',
    recompensa: 150,
    categoria: 'Conteúdo',
    dificuldade: 'Fácil',
    prazo: 'Sem prazo',
  },
  {
    id: 3,
    titulo: 'Perfil Completo',
    descricao: 'Preencha seus dados de usuário e adicione uma foto de perfil.',
    descricaoCompleta:
      'Complete todas as informações do seu perfil na plataforma MoveUp, incluindo foto, dados pessoais e preferências de mobilidade. Um perfil completo garante uma experiência personalizada e maior segurança.',
    recompensa: 300,
    categoria: 'Desafio',
    dificuldade: 'Média',
    prazo: 'Sem prazo',
  },
  {
    id: 4,
    titulo: 'Consciência Verde',
    descricao: 'Responda ao quiz semanal sobre reciclagem e descarte sustentável.',
    descricaoCompleta:
      'Teste seus conhecimentos sobre sustentabilidade respondendo ao quiz semanal. Acerte pelo menos 70% das perguntas sobre reciclagem, descarte responsável e práticas sustentáveis para ganhar os pontos.',
    recompensa: 500,
    categoria: 'Especial',
    dificuldade: 'Difícil',
    prazo: 'Semanal',
  },
  {
    id: 5,
    titulo: 'Pedale 5km',
    descricao: 'Use bicicleta para percorrer pelo menos 5 km em um dia.',
    descricaoCompleta:
      'Registre um trajeto de pelo menos 5 km utilizando bicicleta. Contribua para a redução de emissões de CO₂ e ganhe pontos extras por escolher um transporte limpo e saudável.',
    recompensa: 200,
    categoria: 'Desafio',
    dificuldade: 'Média',
    prazo: 'Diário',
  },
  {
    id: 6,
    titulo: 'Transporte Público',
    descricao: 'Utilize transporte público por 3 dias consecutivos.',
    descricaoCompleta:
      'Utilize ônibus, metrô ou trem no seu trajeto para o trabalho ou escola por 3 dias consecutivos. Cada dia registrado contribui para a redução da sua pegada de carbono na cidade.',
    recompensa: 350,
    categoria: 'Especial',
    dificuldade: 'Média',
    prazo: 'Semanal',
  },
];

export default function MissaoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [concluida, setConcluida] = useState(false);

  const missaoId = Number(id);
  const missao = missoesData.find((m) => m.id === missaoId);

  if (!missao) {
    return (
      <main className="max-w-[800px] mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-dark mb-4">Missão não encontrada</h1>
        <p className="text-gray-500 mb-6">A missão com ID "{id}" não existe.</p>
        <Botao texto="Voltar para Missões" onClick={() => navigate('/missoes')} />
      </main>
    );
  }

  const handleConcluir = () => {
    setConcluida(true);
    alert(`🎉 Missão "${missao.titulo}" concluída! Você ganhou +${missao.recompensa} GreenPoints!`);
  };

  return (
    <main className="max-w-[800px] mx-auto px-4 sm:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400">
        <button
          onClick={() => navigate('/missoes')}
          className="hover:text-secondary transition-colors cursor-pointer"
        >
          Missões
        </button>
        <span className="mx-2">›</span>
        <span className="text-dark font-medium">{missao.titulo}</span>
      </nav>

      {/* Conteúdo */}
      <article className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
            {missao.categoria}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
            {missao.dificuldade}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
            ⏰ {missao.prazo}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">{missao.titulo}</h1>

        <div className="bg-gradient-to-r from-green/10 to-emerald-50 rounded-xl p-4 mb-6 flex items-center gap-3">
          <span className="text-3xl">🏆</span>
          <div>
            <p className="text-sm text-gray-500">Recompensa</p>
            <p className="text-2xl font-bold text-green">+{missao.recompensa} pts</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-dark mb-3">Descrição da Missão</h2>
          <p className="text-gray-500 leading-relaxed">{missao.descricaoCompleta}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {concluida ? (
            <Botao texto="Missão Concluída ✓" variante="sucesso" desabilitado larguraTotal />
          ) : (
            <Botao
              texto="Concluir Missão"
              onClick={handleConcluir}
              larguraTotal
            />
          )}
          <Botao
            texto="← Voltar"
            variante="secundario"
            onClick={() => navigate('/missoes')}
          />
        </div>
      </article>
    </main>
  );
}
