interface CardProps {
  icone: string;
  titulo: string;
  descricao: string;
  className?: string;
}

export default function Card({ icone, titulo, descricao, className = '' }: CardProps) {
  return (
    <article
      className={`bg-white p-7 rounded-3xl text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] ${className}`}
    >
      <div className="text-4xl mb-4">{icone}</div>
      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {titulo}
      </h3>
      <p className="text-gray-500 leading-relaxed">{descricao}</p>
    </article>
  );
}
