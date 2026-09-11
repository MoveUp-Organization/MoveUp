import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';

interface CadastroFormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

export default function Cadastro() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CadastroFormData>();

  const senhaAtual = watch('senha');

  const onSubmit = (data: CadastroFormData) => {
    sessionStorage.setItem(
      'moveup_cadastro',
      JSON.stringify({ nome: data.nome, email: data.email })
    );
    navigate('/login');
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-light via-[#d7e9ff] to-[#cbb6ff]">
      <section className="w-full max-w-[900px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Lado Esquerdo — Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-secondary to-purple p-8 sm:p-12 flex flex-col justify-center items-center text-white text-center">
          <img src={logo} alt="Logo MoveUp" className="w-40 mb-6 drop-shadow-lg" />
          <p className="text-white/90 text-lg leading-relaxed">
            Crie sua conta para acessar a plataforma e começar a acumular GreenPoints.
          </p>
        </div>

        {/* Lado Direito — Formulário */}
        <div className="md:w-1/2 p-8 sm:p-12">
          <h1 className="text-3xl font-extrabold text-dark mb-6">Criar Conta</h1>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <div>
              <label htmlFor="cadNome" className="block text-sm font-semibold text-dark mb-1">
                Nome
              </label>
              <input
                type="text"
                id="cadNome"
                placeholder="Digite seu nome completo"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm ${
                  errors.nome
                    ? 'border-danger bg-red-50 focus:border-danger'
                    : 'border-gray-200 focus:border-secondary bg-gray-50'
                }`}
                {...register('nome', {
                  required: 'O nome é obrigatório.',
                  minLength: { value: 3, message: 'O nome deve ter pelo menos 3 caracteres.' },
                  maxLength: { value: 80, message: 'O nome deve ter no máximo 80 caracteres.' },
                })}
              />
              {errors.nome && (
                <p className="text-danger text-xs mt-1 font-medium">{errors.nome.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="cadEmail" className="block text-sm font-semibold text-dark mb-1">
                Email
              </label>
              <input
                type="email"
                id="cadEmail"
                placeholder="Digite seu email"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm ${
                  errors.email
                    ? 'border-danger bg-red-50 focus:border-danger'
                    : 'border-gray-200 focus:border-secondary bg-gray-50'
                }`}
                {...register('email', {
                  required: 'O email é obrigatório.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Formato de email inválido.',
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger text-xs mt-1 font-medium">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="cadSenha" className="block text-sm font-semibold text-dark mb-1">
                Senha
              </label>
              <input
                type="password"
                id="cadSenha"
                placeholder="Crie uma senha"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm ${
                  errors.senha
                    ? 'border-danger bg-red-50 focus:border-danger'
                    : 'border-gray-200 focus:border-secondary bg-gray-50'
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

            <div>
              <label htmlFor="cadConfirmarSenha" className="block text-sm font-semibold text-dark mb-1">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="cadConfirmarSenha"
                placeholder="Confirme sua senha"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm ${
                  errors.confirmarSenha
                    ? 'border-danger bg-red-50 focus:border-danger'
                    : 'border-gray-200 focus:border-secondary bg-gray-50'
                }`}
                {...register('confirmarSenha', {
                  required: 'A confirmação de senha é obrigatória.',
                  validate: (value) =>
                    value === senhaAtual || 'As senhas não coincidem.',
                })}
              />
              {errors.confirmarSenha && (
                <p className="text-danger text-xs mt-1 font-medium">
                  {errors.confirmarSenha.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary to-purple text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? 'Criando conta...' : 'Cadastrar'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Já possui uma conta?{' '}
            <Link to="/login" className="text-secondary font-bold hover:underline">
              Fazer Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}