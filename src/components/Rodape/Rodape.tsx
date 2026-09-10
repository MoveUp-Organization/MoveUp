import { Link } from 'react-router-dom';

export default function Rodape() {
  return (
    <footer className="bg-white py-6 text-center text-gray-500 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MoveUp. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/sobre" className="hover:text-secondary transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="hover:text-secondary transition-colors">
              Contato
            </Link>
            <Link to="/faq" className="hover:text-secondary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}