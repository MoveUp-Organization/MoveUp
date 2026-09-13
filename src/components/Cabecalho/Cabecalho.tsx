import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import logo from '../../img/logo.png';

interface Usuario {
  nome: string;
  email: string;
  senha?: string;
}

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuAberto((prev) => !prev);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const carregarUsuario = () => {
    const usuarioSalvo = localStorage.getItem('moveupUsuario');
    const estaLogado = localStorage.getItem('moveupLogado');

    if (usuarioSalvo && estaLogado === 'true') {
      try {
        setUsuario(JSON.parse(usuarioSalvo));
      } catch {
        setUsuario(null);
      }
    } else {
      setUsuario(null);
    }
  };

  useEffect(() => {
    carregarUsuario();

    const atualizarPerfil = () => {
      carregarUsuario();
    };

    window.addEventListener('loginAtualizado', atualizarPerfil);

    return () => {
      window.removeEventListener('loginAtualizado', atualizarPerfil);
    };
  }, []);

  const fazerLogout = () => {
    localStorage.removeItem('moveupLogado');

    setUsuario(null);
    setPerfilAberto(false);
    fecharMenu();

    navigate('/cadastro');
  };

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 hover:text-secondary ${
      isActive
        ? 'text-secondary font-extrabold'
        : 'text-dark font-bold'
    }`;

  return (
    <header className="w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-8 py-2 flex items-center justify-between flex-wrap">

        <Link
          to="/inicio"
          onClick={() => {
            fecharMenu();
            setPerfilAberto(false);
          }}
        >
          <img
            src={logo}
            alt="Logo MoveUp"
            className="w-28 sm:w-36 h-auto scale-[2.0] transition-transform duration-300 hover:scale-[2.05]"
          />
        </Link>

        <button
          type="button"
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
            <NavLink
              to="/inicio"
              className={linkClasses}
              onClick={() => {
                fecharMenu();
                setPerfilAberto(false);
              }}
              end
            >
              Início
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/home"
              className={linkClasses}
              onClick={() => {
                fecharMenu();
                setPerfilAberto(false);
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/missoes"
              className={linkClasses}
              onClick={() => {
                fecharMenu();
                setPerfilAberto(false);
              }}
            >
              Missões
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/conversao"
              className={linkClasses}
              onClick={() => {
                fecharMenu();
                setPerfilAberto(false);
              }}
            >
              Conversão
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/voucher"
              className={linkClasses}
              onClick={() => {
                fecharMenu();
                setPerfilAberto(false);
              }}
            >
              Voucher
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sobre"
              className={linkClasses}
              onClick={() => {
                fecharMenu();
                setPerfilAberto(false);
              }}
            >
              Sobre
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/integrantes"
              className={linkClasses}
              onClick={() => {
                fecharMenu();
                setPerfilAberto(false);
              }}
            >
              Integrantes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/faq"
              className={linkClasses}
              onClick={() => {
                fecharMenu();
                setPerfilAberto(false);
              }}
            >
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contato"
              className={linkClasses}
              onClick={() => {
                fecharMenu();
                setPerfilAberto(false);
              }}
            >
              Contato
            </NavLink>
          </li>

          <li
            className="
              relative
              w-full
              md:w-auto
              flex
              flex-col
              items-center
            "
          >

            <button
              type="button"
              onClick={() => setPerfilAberto((prev) => !prev)}
              className="
                inline-flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                bg-gradient-to-r
                from-primary
                to-secondary
                text-white
                transition-transform
                duration-200
                hover:-translate-y-0.5
                shadow-md
                cursor-pointer
                flex-shrink-0
              "
              aria-label="Abrir perfil"
              aria-expanded={perfilAberto}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.5 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z"
                />
              </svg>
            </button>

            {perfilAberto && (
              <div
                className="
                  relative
                  mt-3
                  w-[calc(100vw-2rem)]
                  max-w-[320px]

                  bg-white
                  rounded-2xl
                  shadow-xl
                  border
                  border-gray-100
                  overflow-hidden
                  z-50

                  md:absolute
                  md:top-full
                  md:right-0
                  md:left-auto
                  md:mt-3
                  md:w-72
                  md:max-w-none
                "
              >

                <div
                  className="
                    bg-gradient-to-r
                    from-primary
                    to-secondary
                    px-5
                    py-6
                    text-center
                  "
                >
                  <div
                    className="
                      mx-auto
                      w-16
                      h-16
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-md
                      text-secondary
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-9 h-9"
                    >
                      <path
                        d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.5 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="px-5 py-5 text-center">

                  <p
                    className="
                      text-dark
                      font-extrabold
                      text-lg
                      break-words
                    "
                  >
                    {usuario?.nome || 'Meu perfil'}
                  </p>

                  <p
                    className="
                      text-gray-500
                      text-sm
                      mt-1
                      break-all
                    "
                  >
                    {usuario?.email || 'Conta MoveUp'}
                  </p>

                  <button
                    type="button"
                    onClick={fazerLogout}
                    className="
                      inline-block
                      mt-4
                      px-6
                      py-2
                      rounded-lg
                      bg-gradient-to-r
                      from-primary
                      to-secondary
                      text-white
                      font-bold
                      text-sm
                      hover:opacity-90
                      transition-opacity
                      cursor-pointer
                    "
                  >
                    Sair
                  </button>

                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}