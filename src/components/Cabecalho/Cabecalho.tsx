import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export default function Cabecalho() {

  const [menuAberto, setMenuAberto] = useState(false);

  const [perfilAberto, setPerfilAberto] = useState(false);

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

      <nav className="max-w-[1200px] mx-auto px-4 sm:px-8 py-2 flex items-center justify-between flex-wrap">

        <Link to="/" onClick={fecharMenu}>

          <img
            src={logo}
            alt="Logo MoveUp"
            className="w-28 sm:w-36 h-auto scale-[2.0] transition-transform duration-300 hover:scale-[2.05]"
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
          className={`md:flex md:gap-5 lg:gap-6 md:items-center list-none md:translate-x-12 ${
            menuAberto
              ? 'flex flex-col items-center gap-2 w-full mt-3 p-4 bg-white rounded-2xl shadow-lg'
              : 'hidden'
          }`}
        >

          <li>
            <NavLink to="/inicio" className={linkClasses} onClick={fecharMenu} end>
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

          {/* Perfil */}
          <li className="relative">

            <button
              type="button"
              onClick={() => setPerfilAberto(!perfilAberto)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary text-white transition-transform duration-200 hover:-translate-y-0.5 shadow-md cursor-pointer"
              aria-label="Abrir perfil"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >

                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.5 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z" />

              </svg>

            </button>

            {/* Card do perfil */}
            {perfilAberto && (

              <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">

                {/* Parte superior do perfil */}
                <div className="bg-gradient-to-r from-primary to-secondary px-5 py-6 text-center">

                  <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md text-secondary">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-9 h-9"
                    >

                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.5 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z" />

                    </svg>

                  </div>

                </div>

                {/* Informações do perfil */}
                <div className="px-5 py-4 text-center">

                  <p className="text-dark font-extrabold text-lg">
                    Meu perfil
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Conta MoveUp
                  </p>

                  {/* Botão Sair */}
                  <Link
                    to="/cadastro"
                    onClick={() => {
                      setPerfilAberto(false);
                      fecharMenu();
                    }}
                    className="inline-block mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:opacity-90 transition-opacity"
                  >
                    Sair
                  </Link>

                </div>

              </div>

            )}

          </li>

        </ul>

      </nav>

    </header>

  );

}