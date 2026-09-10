interface BotaoProps {
  texto: string;
  onClick?: () => void;
  tipo?: 'button' | 'submit' | 'reset';
  variante?: 'primario' | 'secundario' | 'sucesso' | 'perigo';
  desabilitado?: boolean;
  larguraTotal?: boolean;
  className?: string;
}

export default function Botao({
  texto,
  onClick,
  tipo = 'button',
  variante = 'primario',
  desabilitado = false,
  larguraTotal = false,
  className = '',
}: BotaoProps) {
  const estilosBase =
    'inline-block px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer shadow-md';

  const estilosVariante = {
    primario:
      'bg-gradient-to-r from-primary to-secondary text-white hover:-translate-y-1 hover:opacity-90 shadow-[0_10px_25px_rgba(0,102,255,0.25)]',
    secundario:
      'bg-white text-dark border-2 border-primary hover:bg-primary hover:text-white',
    sucesso:
      'bg-green text-white hover:-translate-y-1 hover:opacity-90',
    perigo:
      'bg-danger text-white hover:-translate-y-1 hover:opacity-90',
  };

  const estilosDesabilitado = 'opacity-50 cursor-not-allowed hover:transform-none';

  return (
    <button
      type={tipo}
      onClick={onClick}
      disabled={desabilitado}
      className={`${estilosBase} ${estilosVariante[variante]} ${
        desabilitado ? estilosDesabilitado : ''
      } ${larguraTotal ? 'w-full text-center' : ''} ${className}`}
    >
      {texto}
    </button>
  );
}
