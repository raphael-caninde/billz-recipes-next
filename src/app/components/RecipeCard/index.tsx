import Image from 'next/image';
import Link from 'next/link';

interface RecipeCardProps {
  strMealThumb: string;
  strMeal: string;
}

export function RecipeCard({ strMealThumb, strMeal }: RecipeCardProps) {
  return (
    <div
      className='
        relative flex items-center justify-center bg-transparent
        px-3 pb-6 pt-14 md:px-12
      '
    >
      <Link href='/details'>
        <div
          className='
          group relative flex h-80 w-80 max-w-full items-center justify-center
          rounded-lg bg-white shadow-lg transition md:w-80 md:rounded-2xl
        '
        >
          <div
            className='
            absolute top-4 h-56 w-72 overflow-hidden rounded-xl bg-slate-950
            transition-all duration-500 ease-out md:group-hover:-top-24 
            md:group-hover:scale-75
          '
          >
            <Image src={strMealThumb} alt={strMeal} fill={true} />
          </div>
          <div
            className='
            absolute top-64 h-8 w-full overflow-hidden text-center
            transition-all duration-500 ease-out
            md:group-hover:top-40 md:group-hover:h-32
          '
          >
            <p className='text-2xl font-bold'>{strMeal}</p>
            <Link
              className='
              relative top-7 rounded-lg bg-yellow-500
              px-6 py-3 font-medium text-white
              transition-all hover:opacity-80
            '
              href='/details'
            >
              Detalhes
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
