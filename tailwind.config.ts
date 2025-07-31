// tailwind.config.ts
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      
      colors: {
        background: 'var(--background, #f8fafc)',
        foreground: 'var(--foreground, #0f172a)',
        primary: 'var(--primary, #1e3a8a)',
        'primary-foreground': 'var(--primary-foreground, #ffffff)',
        secondary: 'var(--secondary, #64748b)',
        'secondary-foreground': 'var(--secondary-foreground, #ffffff)',
        muted: 'var(--muted, #f1f5f9)',
        'muted-foreground': 'var(--muted-foreground, #475569)',
        accent: 'var(--accent, #6366f1)',
        'accent-foreground': 'var(--accent-foreground, #ffffff)',
        destructive: 'var(--destructive, #ef4444)',
        border: 'var(--border, #e2e8f0)',
        input: 'var(--input, #cbd5e1)',
        ring: 'var(--ring, #3b82f6)',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
      },
          'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
      },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),

    // Utilitário personalizado de animação
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.fade-in': {
          animation: 'fadeInUp 0.8s ease-out forwards',
        },
      })
    }),
  ],
}

export default config
