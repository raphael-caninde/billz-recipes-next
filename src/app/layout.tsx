import { Inter } from 'next/font/google';

import { Header } from './components/Header';
import { Providers } from './providers/Providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bilz - Recipes',
  description: 'Aplicativo de receitas'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br' className='bg-recipe-app'>
      <body className={`${inter.className}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
