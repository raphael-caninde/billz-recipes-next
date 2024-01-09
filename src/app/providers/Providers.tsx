'use client';

import { RecipesProvider } from '../context/RecipesContext';
import { ReactQueryProvider } from './ReactQueryProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactQueryProvider>
        <RecipesProvider>{children}</RecipesProvider>
      </ReactQueryProvider>
    </>
  );
}
