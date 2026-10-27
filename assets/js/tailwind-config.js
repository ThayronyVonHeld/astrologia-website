/*
 * Configuração ÚNICA do Tailwind (compartilhada por todas as páginas).
 * Carregada logo após o script do Tailwind CDN.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: '#1A2341',
        cosmic: '#4B2A63',
        // "deep" = variantes mais escuras, para TEXTO pequeno (contraste AA sobre branco)
        twilight: { DEFAULT: '#D88D93', deep: '#B0555F' },
        gold: { DEFAULT: '#D4AF37', deep: '#8A6D12' },
        offwhite: '#FAFAFA',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-slow-reverse': 'spin 35s linear infinite reverse',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // "both" aplica o estado inicial (opacity 0) durante o delay -> sem "piscar"
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
      },
    },
  },
}
