'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { getFoodsSearch } from '@/app/services/mealsApi';

export default function Foods() {
  const { data } = useQuery('foods', () => getFoodsSearch());

  return (
    <div className='mx-auto mt-10 flex flex-wrap items-center justify-center gap-4 border border-red-500'>
      {data?.meals.map((food: any) => (
        <div className='flex flex-col items-center' key={food.idMeal}>
          <Image
            src={food.strMealThumb}
            alt={food.strMeal}
            width={300}
            height={300}
            quality={75}
          />
          <p className='text-zinc-300'>{food.strMeal}</p>
        </div>
      ))}
    </div>
  );
}
