/*
 * Configuração ÚNICA do Tailwind (compartilhada por TODAS as páginas, inclusive pages/maps/).
 * Carregada logo após o script do Tailwind CDN.
 *
 * Regra das cores: "DEFAULT" para elementos decorativos (bordas, ícones, fundos translúcidos);
 *                  "deep" para TEXTO e botões com texto branco (contraste mínimo AA).
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Paleta base
        navy: '#101B35',
        cosmic: { DEFAULT: '#4B2A63', deep: '#4B2A63' },
        offwhite: '#FAF9F6',
        twilight: { DEFAULT: '#D88D93', deep: '#B0555F' },
        gold: { DEFAULT: '#D4AF37', deep: '#8A6D12' },
        // Cores de apoio (um mapa = uma cor)
        ocean: { DEFAULT: '#0EA5E9', deep: '#0369A1' }, // Mapa Trânsito
        jade: { DEFAULT: '#10B981', deep: '#047857' }, // Mapa Direcional
        ruby: { DEFAULT: '#F43F5E', deep: '#BE123C' }, // Sinastria Amorosa
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      animation: {
        // Velocidade ÚNICA das órbitas em todo o site (valores maiores = mais lento)
        'spin-slow': 'spin 60s linear infinite',
        'spin-slow-reverse': 'spin 75s linear infinite reverse',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // "both" aplica o estado inicial (opacity 0) durante o delay -> sem "piscar"
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
      },
    },
  },
}
