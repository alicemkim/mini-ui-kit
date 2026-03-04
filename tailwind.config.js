/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', 'Avenir Next', 'Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  colors: {
    bg: 'var(--color-bg)',
    surface: {
      DEFAULT: 'var(--color-surface)',
      hover: 'var(--color-surface-hover)',
    },

    primary: {
      DEFAULT: 'var(--color-primary)',
      hover: 'var(--color-primary-hover)',
    },
    danger: 'var(--color-danger)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    fg: {
      DEFAULT: 'var(--color-fg)',
      muted: 'var(--color-fg-muted)',
      disabled: 'var(--color-fg-disabled)',
    },
  },
  borderRadius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
  },
  boxShadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  },
  transitionTimingFunction: {
    fast: 'var(--motion-fast)',
  },
  fontFamily: {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
  },
  zIndex: {
    dropdown: 'var(--z-dropdown)',
    sticky: 'var(--z-sticky)',
    modal: 'var(--z-modal)',
    toast: 'var(--z-toast)',
  },
  plugins: [],
};
