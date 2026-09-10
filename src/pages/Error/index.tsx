import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-9xl mb-4">🛸</div>
      <h1 className="text-5xl font-extrabold text-dark mb-4">Erro 404</h1>
      <p className="text-xl text-gray-500 mb-8 max-w-[500px]">
        Ops! Parece que você se perdeu no caminho sustentável. 
        A página que você está procurando não existe.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold shadow-md hover:-translate-y-1 transition-transform"
      >
        Voltar para a Página Inicial
      </Link>
    </main>
  );
}