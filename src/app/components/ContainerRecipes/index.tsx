'use client';

import { useRecipesContext } from '@/app/context/RecipesContext';

import { RecipeCard } from '../RecipeCard';

interface IRecipes {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

export default function ContainerRecipes() {
  const recipesContext = useRecipesContext();
  const recipes = recipesContext?.receitas;

  return (
    <section
      className='
        relative mt-10 flex w-full flex-wrap items-center
        justify-center gap-2 md:w-[90%]
      '
    >
      {recipes?.meals?.length &&
        recipes?.meals.map((recipe: IRecipes) => (
          <RecipeCard
            key={recipe.idMeal}
            strMealThumb={recipe.strMealThumb}
            strMeal={recipe.strMeal}
          />
        ))}
    </section>
  );
}
