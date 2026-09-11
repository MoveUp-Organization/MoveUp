import fotoAndre from '../../img/fotoAndre.png';
import fotoEduardo from '../../img/fotoEduardo.png';
import fotoIsa from '../../img/fotoIsa.png';
import fotoMih from '../../img/fotoMih.png';
import fotoMarina from '../../img/fotoMarina.png';

import githubIcon from '../../img/github.png';
import linkedinIcon from '../../img/lkd.png';

export default function Integrantes() {
  const equipe = [
    {
      nome: 'Andre Luiz Ramos Forastieri',
      rm: '572203',
      cargo: 'Desenvolvedor Front-end',
      foto: fotoAndre,
      github: 'https://github.com/AndreL050690',
      linkedin: 'https://www.linkedin.com/in/andr%C3%A9-ramos-a029913b1/',
    },
    {
      nome: 'Eduardo Damasio',
      rm: '569960',
      cargo: 'Desenvolvedor Back-end',
      foto: fotoEduardo,
      github: 'https://github.com/Eduardoguelere',
      linkedin: 'https://www.linkedin.com/in/eduardo-guelere-0902753b8/',
    },
    {
      nome: 'Isabelle Ferreira',
      rm: '573507',
      cargo: 'Analista de Dados',
      foto: fotoIsa,
      github: 'https://github.com/isabelleferreiraa',
      linkedin: 'https://www.linkedin.com/in/isabelle-ferreira-8844593ab',
    },
    {
      nome: 'Milena Conegin',
      rm: '568923',
      cargo: 'Desenvolvedora Back-end',
      foto: fotoMih,
      github: 'https://github.com/MilenaConegin',
      linkedin: 'https://www.linkedin.com/in/milena-conegin-996b22269',
    },
    {
      nome: 'Marina Fernandes',
      rm: '571265',
      cargo: 'Especialista em IA',
      foto: fotoMarina,
      github: 'https://github.com/marifernandesgm',
      linkedin: 'https://www.linkedin.com/in/marifernandesgm-58460a40a',
    },
  ];

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-10">

      <section className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">
          Integrantes da Equipe
        </h2>

        <p className="text-gray-500 text-lg">
          Conheça os membros responsáveis pelo projeto MoveUp.
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-8">

        {equipe.map((integrante, index) => (

          <article
            key={index}
            className="bg-white rounded-3xl p-8 w-full max-w-[320px] text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center"
          >

            <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-white shadow-md bg-gray-100">
              <img
                src={integrante.foto}
                alt={`Foto de ${integrante.nome}`}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-dark mb-1 h-[56px] flex items-center justify-center">
              {integrante.nome}
            </h3>

            <p className="text-primary font-bold mb-1">
              RM: {integrante.rm}
            </p>

            <p className="text-gray-500 text-sm mb-6">
              {integrante.cargo}
            </p>

            <div className="flex gap-3 w-full mt-auto">

              {/* GitHub */}
              <a
                href={integrante.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-gray-800 text-white font-bold text-sm hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-5 h-5 object-contain"
                />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href={integrante.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-[#0077b5] text-white font-bold text-sm hover:bg-[#005e93] transition-colors flex items-center justify-center gap-2"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-5 h-5 object-contain"
                />
                LinkedIn
              </a>

            </div>

          </article>

        ))}

      </section>

    </main>
  );
}