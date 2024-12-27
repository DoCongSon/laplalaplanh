import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        background: 'hsl(var(--background))',
        'cool-gray': '#F2F2F2',
        foreground: 'hsl(var(--foreground))',
        'floral-white': '#FBF8F0',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          '1': '#ECEFEF',
          '3': '#C4CDCE',
          '4': '#29433E',
          '6': '#344B4E',
          '9': '#1D2A2C',
          10: '#172122',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          '1': '#FFFDF9',
          '2': '#FFFCF5',
          '4': '#FBF8F0',
          '5': '#F8F1E1',
          '6': '#CCBE99',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        neutral: {
          '1': '#FFFFFF',
          '2': '#F5F5F5',
          '3': '#EAEAEB',
          '4': '#BBBCBF',
          '5': '#D9D9D9',
          '6': '#8A8B8C',
          '7': '#8C8D8F',
          '10': '#121212',
        },
        error: {
          '2': '#FEDEE0',
          '4': '#F5222D',
          '6': '#C41B24',
        },
        info: {
          '4': '#0089B6',
        },
      },
      boxShadow: {
        header: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'floating-button': '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
        'button-secondary': '0px 2px 0px 0px rgba(0, 0, 0, 0.02)',
        'basic-top': '2px 4px 14px 0px rgba(0, 43, 39, 0.04)',
        'basic-bottom': '2px -4px 14px 0px rgba(0, 43, 39, 0.04)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
