import { useForm } from 'react-hook-form';

interface ContatoFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export default function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>();

  const onSubmit = (data: ContatoFormData) => {
    console.log('Mensagem de contato:', data);
    alert('✅ Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.');
    reset();
  };

  return (
    <main className="max-w-[800px] mx-auto px-4 sm:px-8 py-12">
      <section className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">Contato</h2>
        <p className="text-gray-500 text-lg">
          Envie sua dúvida, sugestão ou mensagem para a equipe MoveUp.
        </p>
      </section>

      <section className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label htmlFor="contatoNome" className="block text-sm font-semibold text-dark mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="contatoNome"
                placeholder="Ex: João da Silva"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm ${
                  errors.nome ? 'border-danger bg-red-50 focus:border-danger' : 'border-gray-200 focus:border-primary bg-gray-50'
                }`}
                {...register('nome', {
                  required: 'O nome é obrigatório.',
                  minLength: { value: 3, message: 'Mínimo de 3 caracteres.' },
                })}
              />
              {errors.nome && <p className="text-danger text-xs mt-1 font-medium">{errors.nome.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contatoEmail" className="block text-sm font-semibold text-dark mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="contatoEmail"
                placeholder="Ex: joao@email.com"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm ${
                  errors.email ? 'border-danger bg-red-50 focus:border-danger' : 'border-gray-200 focus:border-primary bg-gray-50'
                }`}
                {...register('email', {
                  required: 'O e-mail é obrigatório.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'E-mail inválido.',
                  },
                })}
              />
              {errors.email && <p className="text-danger text-xs mt-1 font-medium">{errors.email.message}</p>}
            </div>
          </div>

          {/* Assunto */}
          <div>
            <label htmlFor="contatoAssunto" className="block text-sm font-semibold text-dark mb-2">
              Assunto
            </label>
            <input
              type="text"
              id="contatoAssunto"
              placeholder="Sobre o que deseja falar?"
              className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm ${
                errors.assunto ? 'border-danger bg-red-50 focus:border-danger' : 'border-gray-200 focus:border-primary bg-gray-50'
              }`}
              {...register('assunto', { required: 'O assunto é obrigatório.' })}
            />
            {errors.assunto && <p className="text-danger text-xs mt-1 font-medium">{errors.assunto.message}</p>}
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="contatoMensagem" className="block text-sm font-semibold text-dark mb-2">
              Mensagem
            </label>
            <textarea
              id="contatoMensagem"
              rows={5}
              placeholder="Escreva sua mensagem aqui..."
              className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none text-sm resize-y ${
                errors.mensagem ? 'border-danger bg-red-50 focus:border-danger' : 'border-gray-200 focus:border-primary bg-gray-50'
              }`}
              {...register('mensagem', {
                required: 'A mensagem é obrigatória.',
                minLength: { value: 10, message: 'A mensagem deve ter pelo menos 10 caracteres.' },
              })}
            ></textarea>
            {errors.mensagem && <p className="text-danger text-xs mt-1 font-medium">{errors.mensagem.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </section>
    </main>
  );
}