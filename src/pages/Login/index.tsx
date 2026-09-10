import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import googleIcon from '../../img/g.png';
import linkedinIcon from '../../img/lkd.png';

interface LoginFormData {
  email: string;
  senha: string;
}

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log('Login realizado:', data);
    alert(`Bem-vindo de volta! Login realizado com sucesso.`);
    navigate('/home');
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-light via-[#d7e9ff] to-[#cbb6ff]">
      <section className="w-full max-w-[900px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Lado Esquerdo — Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-primary to-secondary p-8 sm:p-12 flex flex-col justify-center items-center text-white text-center">
          <img src={logo} alt="Logo MoveUp" className="w-40 mb-6 drop-shadow-lg" />
          <p className="text-white/90 text-lg leading-relaxed">
            Acesse sua conta para continuar utilizando a plataforma.
          </p>
        </div>

        {/* Lado Direito — Formulário */}
        <div className="md:w-1/2 p-8 sm:p-12">
          <h1 className="text-3xl font-extrabold text-dark mb-2">Login</h1>

          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-3">Ou entre com:</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:shadow-md transition-shadow"
                aria-label="Entrar com Google"
              >
                <img src={googleIcon} alt="Google" className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:shadow-md transition-shadow"
                aria-label="Entrar com LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <div>
              <label htmlFor="loginEmail" className="block text-sm font-semibold text-dark mb-1">
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                placeholder="Digite seu email"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm ${
                  errors.email
                    ? 'border-danger bg-red-50 focus:border-danger'
                    : 'border-gray-200 focus:border-primary bg-gray-50'
                }`}
                {...register('email', {
                  required: 'O email é obrigatório.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Formato de email inválido.',
                  },
                  minLength: { value: 5, message: 'O email deve ter pelo menos 5 caracteres.' },
                })}
              />
              {errors.email && (
                <p className="text-danger text-xs mt-1 font-medium">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="loginSenha" className="block text-sm font-semibold text-dark mb-1">
                Senha
              </label>
              <input
                type="password"
                id="loginSenha"
                placeholder="Digite sua senha"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm ${
                  errors.senha
                    ? 'border-danger bg-red-50 focus:border-danger'
                    : 'border-gray-200 focus:border-primary bg-gray-50'
                }`}
                {...register('senha', {
                  required: 'A senha é obrigatória.',
                  minLength: { value: 5, message: 'A senha deve ter pelo menos 5 caracteres.' },
                  maxLength: { value: 30, message: 'A senha deve ter no máximo 30 caracteres.' },
                })}
              />
              {errors.senha && (
                <p className="text-danger text-xs mt-1 font-medium">{errors.senha.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Não tem uma conta?{' '}
            <Link to="/cadastro" className="text-secondary font-bold hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}