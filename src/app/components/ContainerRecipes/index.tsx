'use client';

import { useQuery } from 'react-query';

import { getSearchFoods } from '@/app/services/mealsApi';

import { RecipeCard } from '../RecipeCard';

interface IRecipes {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

export default function ContainerRecipes() {
  const { data } = useQuery('foods', () => getSearchFoods());

  return (
    <section
      className='
        relative mt-10 flex w-full flex-wrap items-center justify-center
        gap-2 md:w-[90%]
      '
    >
      {data?.meals.map((recipe: IRecipes) => (
        <RecipeCard
          key={recipe.idMeal}
          strMealThumb={recipe.strMealThumb}
          strMeal={recipe.strMeal}
        />
      ))}
    </section>
  );
}
