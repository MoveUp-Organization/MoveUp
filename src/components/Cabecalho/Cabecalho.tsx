import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 hover:text-secondary ${
      isActive ? 'text-secondary font-extrabold' : 'text-dark font-bold'
    }`;

  return (
    <header className="w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between flex-wrap">
        <Link to="/" onClick={fecharMenu}>
          <img
            src={logo}
            alt="Logo MoveUp"
            className="w-36 sm:w-48 h-auto transition-transform duration-300 hover:scale-[1.03]"
          />
        </Link>

        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={toggleMenu}
        >
          <span
            className={`block w-7 h-[3px] bg-dark rounded-lg transition-all duration-300 ${
              menuAberto ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-7 h-[3px] bg-dark rounded-lg transition-all duration-300 ${
              menuAberto ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-7 h-[3px] bg-dark rounded-lg transition-all duration-300 ${
              menuAberto ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        <ul
          className={`md:flex md:gap-5 lg:gap-6 md:items-center list-none ${
            menuAberto
              ? 'flex flex-col items-center gap-3 w-full mt-4 p-5 bg-white rounded-2xl shadow-lg'
              : 'hidden'
          }`}
        >
          <li>
            <NavLink to="/" className={linkClasses} onClick={fecharMenu} end>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/home" className={linkClasses} onClick={fecharMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/missoes" className={linkClasses} onClick={fecharMenu}>
              Missões
            </NavLink>
          </li>
          <li>
            <NavLink to="/conversao" className={linkClasses} onClick={fecharMenu}>
              Conversão
            </NavLink>
          </li>
          <li>
            <NavLink to="/voucher" className={linkClasses} onClick={fecharMenu}>
              Voucher
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={linkClasses} onClick={fecharMenu}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to="/integrantes" className={linkClasses} onClick={fecharMenu}>
              Integrantes
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={linkClasses} onClick={fecharMenu}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" className={linkClasses} onClick={fecharMenu}>
              Contato
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm transition-transform duration-200 hover:-translate-y-0.5 shadow-md"
              onClick={fecharMenu}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}