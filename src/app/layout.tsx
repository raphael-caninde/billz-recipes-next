'use client';

import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Header } from './components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bilz - Recipes',
  description: 'Aplicativo de receitas'
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br' className='bg-recipe-app'>
      <body className={`${inter.className} h-screen w-screen`}>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
