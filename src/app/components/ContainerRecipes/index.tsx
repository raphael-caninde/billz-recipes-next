'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { getSearchFoods } from '@/app/services/mealsApi';

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
        mt-6 flex w-full flex-wrap items-center justify-center gap-8
        md:w-[90%]
      '
    >
      {data?.meals.map((recip: IRecipes) => (
        <div
          className='
            m-2 flex h-[20rem] w-[90%] flex-col bg-zinc-100
            sm:h-[28rem] sm:w-[80%] md:h-72 md:w-[20rem]
        '
          key={recip.idMeal}
        >
          <Link
            className='
              flex h-full w-full flex-col items-center justify-center'
            href={'/details'}
          >
            <div className='relative w-full flex-1 md:h-4/5'>
              <Image src={recip.strMealThumb} alt={recip.strMeal} fill={true} />
            </div>
            <p
              className='
                ml-3 w-full py-4 text-xl font-medium text-zinc-800'
            >
              {recip.strMeal}
            </p>
          </Link>
        </div>
      ))}
    </section>
  );
}