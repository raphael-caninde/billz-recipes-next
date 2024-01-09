import { createContext, useContext, useState } from 'react';
import { useQuery } from 'react-query';

import { getSearchFoods } from '../services/mealsApi';

interface IRecipes {
  strMeal: string;
  meals: [
    {
      idMeal: string;
      strMealThumb: string;
      strMeal: string;
    }
  ];
}

interface RecipesContextValue {
  receitas: IRecipes | null;
  filter: IRecipes | null;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<IRecipes | null>>;
}

export const RecipesContext = createContext<RecipesContextValue>({
  receitas: null,
  filter: null,
  setFilter: () => undefined,
  search: '',
  setSearch: () => undefined
});

export function RecipesProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<IRecipes | null>(null);
  const [search, setSearch] = useState('');
  const { data: recipes } = useQuery(['foods', search], () =>
    getSearchFoods(search)
  );

  const data = {
    receitas: filter?.meals ? filter : recipes,
    filter,
    setFilter,
    search,
    setSearch
  };

  return (
    <RecipesContext.Provider value={data}>{children}</RecipesContext.Provider>
  );
}

export const useRecipesContext = () => useContext(RecipesContext);
