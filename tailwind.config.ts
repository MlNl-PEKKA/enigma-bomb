import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-color))',
        secondary: 'rgb(var(--secondary-color))',
        tertiary: 'rgb(var(--tertiary-color))',
      },
      width: {
        '120': '30rem',
      },
      screens: {
        tablet: '640px',
        desktop: '1024px',
      },
      flexGrow: {
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },
    },
  },
  plugins: [],
}
export default config
