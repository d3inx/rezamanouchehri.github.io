
import "../styles/globals.css";

import { Lalezar } from '@next/font/google';

import { ThemeProvider } from 'next-themes'

const lalezar = Lalezar({
  weight: '400',
  subsets: ['arabic'],
  variable: '--font-lalezar',
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='system' attribute="class">
      <main className={`${lalezar.variable} font-sans`} dir='rtl'>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>

  );
}

export default MyApp;
