<p align="center">
    <img src="./public/favicons/icon_moveup.png" width="180" alt="Logo MoveUp">
</p>

<h1 align="center">MoveUp — Plataforma de Mobilidade Sustentável</h1>

<p align="center">
  Challenge — Turma 1TDSPH (2026)
</p>

<p align="center">
  Projeto desenvolvido para o Challenge da FIAP em parceria com a SoulUp,
  utilizando gamificação para incentivar a mobilidade sustentável,
  a inclusão social e a redução da pegada de carbono.
</p>

---

## Descrição do Projeto

“A SoulUp é uma plataforma digital inovadora que propõe transformar interações  online em benefícios reais para os usuários e impacto positivo para o planeta. Por meio  de seu aplicativo, os usuários participam de atividades como assistir a conteúdos e  interagir em comunidades, acumulando pontos que podem ser convertidos em  vantagens concretas, como descontos na fatura de energia, selos de impacto  socioambiental e experiências sustentáveis. Dessa forma, a SoulUp conecta pessoas, tecnologia e sustentabilidade, reforçando o propósito da Prospera de gerar valor econômico e ambiental de forma integrada.”

A **MoveUP**, integrada à plataforma SoulUp, tem como objetivo transformar engajamento digital em benefícios reais para a mobilidade urbana sustentável.

A solução permitirá que usuários convertam pontos acumulados dentro da plataforma em créditos de transporte público, incentivando:

* Redução da emissão de carbono;
* Uso consciente de mobilidade urbana;
* Participação ativa em ações sustentáveis;

A proposta é estimular os usuários a adotarem alternativas de transporte coletivo e sustentáveis, acumulando **MovePoints** por meio de suas atividades e utilizando esses pontos para obter benefícios dentro da plataforma.

O projeto busca unir **tecnologia, sustentabilidade e mobilidade urbana**, oferecendo uma experiência digital simples, interativa e acessível.

---

## Objetivo

O principal objetivo do MoveUP é **incentivar uma mobilidade urbana mais sustentável**, utilizando elementos de gamificação e conversão de pontos em passagens de transporte público para transformar comportamentos cotidianos em uma experiência de engajamento.

A plataforma busca:

* Incentivar o uso de transportes mais sustentáveis;
* Valorizar o transporte público;
* Contribuir para a redução da pegada de carbono;
* Utilizar gamificação para aumentar o engajamento;
* Recompensar hábitos sustentáveis;
* Transformar pontos acumulados em benefícios;
* Promover uma mobilidade urbana mais consciente e inclusiva.

---

## Tecnologias Utilizadas

O MoveUp foi desenvolvido utilizando uma arquitetura moderna baseada em **React e TypeScript**, com Vite como ferramenta de desenvolvimento e Tailwind CSS para a construção da interface. O `package.json` atual do projeto confirma React, React DOM, React Router DOM, React Hook Form, Tailwind CSS e Vite como parte da stack.

### React

Biblioteca utilizada para construção da interface da aplicação por meio de componentes reutilizáveis e páginas independentes.

### TypeScript

Utilizado para adicionar tipagem estática ao projeto, proporcionando maior segurança e organização durante o desenvolvimento.

### Vite

Ferramenta utilizada para desenvolvimento e build da aplicação, proporcionando inicialização rápida e Hot Module Replacement (HMR).

### Tailwind CSS

Utilizado para a estilização das páginas e componentes, permitindo a criação de interfaces responsivas por meio de classes utilitárias.

### React Router DOM

Responsável pelo gerenciamento das rotas e navegação entre as páginas da aplicação.

Entre as rotas disponíveis estão:

* `/cadastro`
* `/login`
* `/inicio`
* `/home`
* `/missoes`
* `/missoes/:id`
* `/conversao`
* `/voucher`
* `/sobre`
* `/integrantes`
* `/faq`
* `/contato`
* `/transferir-pontos`
* `/historico`
* `/meu-cartao`

A configuração atual dessas rotas está centralizada no `main.tsx`.

### React Hook Form

Utilizado para auxiliar na criação e gerenciamento de formulários da aplicação.

### Session Storage e Local Storage

Utilizados para armazenar informações relacionadas à sessão e dados locais da aplicação.

### Oxlint

Ferramenta utilizada para análise e padronização do código durante o desenvolvimento.

---

## 📁 Estrutura de Pastas

O projeto está organizado de forma modular, separando os componentes reutilizáveis das páginas da aplicação e dos arquivos de configuração.

<pre>
MOVEUP/
├── public/
│   └── favicons/
│       └── icon_moveup.png          # Ícone/favicon do MoveUp
│
├── src/
│   ├── components/                  # Componentes reutilizáveis
│   │   ├── Botao/
│   │   │   └── Botao.tsx            # Componente de botão
│   │   ├── Cabecalho/
│   │   │   └── Cabecalho.tsx        # Cabeçalho e menu de navegação
│   │   ├── Card/
│   │   │   └── Card.tsx             # Componente de cards
│   │   ├── Rodape/
│   │   │   └── Rodape.tsx           # Rodapé da aplicação
│   │   └── WatsonAssistant/
│   │       └── WatsonAssistant.tsx   # Assistente virtual
│   │
│   ├── img/                         # Imagens utilizadas no projeto
│   │   ├── fotoAndre.png
│   │   ├── fotoEduardo.png
│   │   ├── fotoIsa.png
│   │   ├── fotoMarina.png
│   │   ├── fotoMih.png
│   │   ├── g.png
│   │   ├── github.png
│   │   ├── lkd.png
│   │   └── logo.png
│   │
│   ├── pages/                       # Páginas da aplicação
│   │   ├── Cadastro/
│   │   │   └── index.tsx            # Cadastro do usuário
│   │   ├── Cartao/
│   │   │   └── index.tsx            # Cartão/Bilhete MoveUp
│   │   ├── Contato/
│   │   │   └── index.tsx            # Página de contato
│   │   ├── Conversao/
│   │   │   └── index.tsx            # Conversão de MovePoints
│   │   ├── Error/
│   │   │   └── index.tsx            # Página de erro
│   │   ├── FAQ/
│   │   │   └── index.tsx            # Perguntas frequentes
│   │   ├── Historico/
│   │   │   └── index.tsx            # Histórico de movimentações
│   │   ├── Home/
│   │   │   └── index.tsx            # Página principal após login
│   │   ├── Inicio/
│   │   │   └── index.tsx            # Página inicial/apresentação
│   │   ├── Integrantes/
│   │   │   └── index.tsx            # Integrantes da equipe
│   │   ├── Login/
│   │   │   └── index.tsx            # Login do usuário
│   │   ├── MissaoDetalhe/
│   │   │   └── index.tsx            # Detalhes de uma missão
│   │   ├── Missoes/
│   │   │   └── index.tsx            # Lista de missões
│   │   ├── Sobre/
│   │   │   └── index.tsx            # Informações sobre o MoveUp
│   │   ├── TransferirPontos/
│   │   │   └── index.tsx            # Transferência/conversão de pontos
│   │   └── Voucher/
│   │       └── index.tsx            # Vouchers e benefícios
│   │
│   ├── App.tsx                      # Estrutura principal da aplicação
│   ├── globals.css                  # Estilos globais e Tailwind CSS
│   └── main.tsx                     # Entrada da aplicação e configuração das rotas
│
├── .gitignore                       # Arquivos ignorados pelo Git
├── .oxlintrc.json                   # Configuração do Oxlint
├── index.html                       # HTML principal da aplicação
├── package.json                     # Dependências e scripts do projeto
├── package-lock.json                # Controle das versões das dependências
├── README.md                        # Documentação do projeto
├── tsconfig.app.json                # Configuração TypeScript da aplicação
├── tsconfig.json                    # Configuração geral do TypeScript
├── tsconfig.node.json               # Configuração TypeScript para o Node
└── vite.config.ts                   # Configuração do Vite
</pre>

---

## Principais Funcionalidades

### Cadastro e Login

Permite que o usuário realize seu cadastro e posteriormente entre na plataforma para acessar suas funcionalidades.

### Home

Apresenta as principais informações e ações disponíveis para o usuário dentro do MoveUp.

### Missões

O usuário pode participar de missões relacionadas à mobilidade sustentável e acumular **MovePoints**.

### Conversão de MovePoints

Área destinada à conversão dos pontos acumulados em benefícios relacionados à mobilidade urbana.

### Bilhete MoveUp

O **Meu Cartão** funciona como uma carteira digital, permitindo visualizar informações relacionadas aos benefícios e valores convertidos pelo usuário.

### Histórico

Permite consultar movimentações realizadas durante a utilização da plataforma.

### Voucher

Área destinada à visualização dos benefícios e vouchers obtidos pelo usuário.

### Assistente Virtual

O projeto também possui o componente **Watson Assistant**, integrado à estrutura principal da aplicação para oferecer suporte e interação com o usuário.

---

## 👥 Integrantes & Autores

Abaixo encontram-se os integrantes responsáveis pelo desenvolvimento do projeto MoveUP:


* <img src="src/img/fotoIsa.png" width="120px" alt="Foto de Isabelle Ferreira"/><br/>
  **Isabelle Ferreira Neri Feitoza** — RM 573507 (Desenvolvedora Front-End) - Turma: 1TDSPH
  * [LinkedIn](https://www.linkedin.com/in/isabelle-ferreira-8844593ab/) | [GitHub](https://github.com/isabelleferreiraa)

* <img src="src/img/fotoAndre.png" width="120px" alt="Foto de André Luiz"/><br/>
  **André Luiz Ramos Forastieri** — RM 572203 (Desenvolvedor de Interface) - Turma: 1TDSPH
  * [LinkedIn](https://www.linkedin.com/in/andré-forastieri-a029913b1?utm_source=share_via&utm_content=profile&utm_medium=member_android) | [GitHub](https://github.com/AndreL050690)

* <img src="src/img/fotoMih.png" width="120px" alt="Foto de Milena Silva"/><br/>
  **Milena Silva Conegin** — RM 568923 (Desenvolvedora de Componentes) - Turma: 1TDSPH
  * [LinkedIn](https://www.linkedin.com/in/milena-conegin-996b22269?utm_source=share_via&utm_content=profile&utm_medium=member_ios) | [GitHub](https://github.com/MilenaConegin)

* <img src="src/img/fotoEduardo.png" width="120px" alt="Foto de Eduardo Damasio"/><br/>
  **Eduardo Damasio Guelere** — RM 569960 (Desenvolvedora Visual) - Turma: 1TDSPH
  * [LinkedIn](https://www.linkedin.com/in/eduardo-guelere-0902753b8/) | [GitHub](https://github.com/Eduardoguelere)

* <img src="src/img/fotoMarina.png" width="120px" alt="Foto de Marina Fernandes"/><br/>
  **Marina Fernandes Gomes Mesquita** — RM 571265 (Desenvolvedora de Arquitetura) - Turma: 1TDSPH
  * [LinkedIn](https://www.linkedin.com/in/marifernandesgm-58460a40a) | [GitHub](https://github.com/marifernandesgm)

---

## Repositório Oficial

👉 **GitHub — MoveUp**

[Acessar o repositório oficial do MoveUp](https://github.com/MoveUp-Organization/MoveUp)

---

## Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/MoveUp-Organization/MoveUp.git
```

### 2. Acesse a pasta do projeto

```bash
cd MoveUp
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento e disponibilizará a aplicação no endereço informado pelo terminal.

### 5. Build para produção

Para gerar a versão de produção:

```bash
npm run build
```

O projeto também possui scripts configurados para `lint` e `preview`.

---

## Scripts Disponíveis

| Comando           | Descrição                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento   |
| `npm run build`   | Gera a build de produção               |
| `npm run lint`    | Executa a análise do código com Oxlint |
| `npm run preview` | Executa uma prévia da build            |

Esses scripts estão definidos no `package.json` atual do projeto.

---

## 📞 Contato

Para dúvidas, sugestões, identificação de problemas ou contribuições, entre em contato com a equipe de desenvolvimento ou abra uma **Issue** diretamente no repositório oficial.

[Abrir uma Issue no repositório do MoveUp no GitHub](https://github.com/MoveUp-Organization/MoveUp)

---

<p align="center">
  <strong>MoveUP</strong><br>
  FIAP Challenge — Turma 1TDSPH - 2026
</p>
