'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { useRecipesContext } from '@/app/context/RecipesContext';
import { faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { latters } from '@/app/constants/latters';

import logo from '../../../../public/logo.png';
import { getCategory } from '../../services/mealsApi';

interface ICategory {
  idCategory: string;
  strCategory: string;
}

export function Header() {
  const { data } = useQuery('category', getCategory);
  const { search, setSearch } = useRecipesContext();

  return (
    <header className='w-full border-b border-zinc-300'>
      <div
        className='
          flex w-full flex-wrap items-center justify-evenly
          md:flex-nowrap
        '
      >
        <Link className='-order-2 md:order-1' href={'/'}>
          <div
            className='
            flex w-60 cursor-pointer flex-col 
            items-center py-2 md:ml-2
          '
          >
            <Image
              className='mb-1 hidden md:block'
              src={logo}
              alt='logo'
              width={150}
              height={150}
              quality={75}
            />
            <h1 className='w-full text-center text-2xl tracking-wider text-white'>
              Billz Recipes
            </h1>
          </div>
        </Link>
        <div className='mx-2 w-full py-2 md:order-2 md:mx-6 md:w-[40rem]'>
          <form className='flex w-full'>
            <input
              className='w-full rounded-l p-2 tracking-wider outline-none'
              name='search'
              value={search}
              type='text'
              placeholder='search recipes...'
              onChange={({ target }) => setSearch(target.value)}
            />
            <button
              className='
                rounded-r bg-recipe-app-yellow px-4 
                transition-colors hover:bg-yellow-500
              '
              type='button'
            >
              <FontAwesomeIcon className='text-xl' icon={faSearch} />
            </button>
          </form>
        </div>
        <div
          className='
            -order-1 flex cursor-pointer flex-col
            px-4 py-2 text-white md:order-3 md:mr-2
            
          '
        >
          <FontAwesomeIcon className='text-3xl' icon={faUserAlt} />
          <p className={`hidden md:block`}>Login</p>
        </div>
      </div>
      <div
        className='
          flex w-full gap-4 overflow-x-auto
          py-4 md:flex-wrap md:justify-center
        '
      >
        {data?.categories.map((category: ICategory) => (
          <div className='p-2' key={category.idCategory}>
            <Link
              className='
                relative h-full font-medium text-white 
                before:absolute before:-bottom-1 before:h-0.5 before:w-full
                before:scale-x-0 before:bg-recipe-app-yellow before:transition
                hover:before:scale-x-100'
              href={`/category/${category.strCategory}`}
            >
              {category.strCategory}
            </Link>
          </div>
        ))}
      </div>
      <div
        className='
          flex w-full flex-wrap items-center justify-center divide-x
        '
      >
        {latters.map((latter, i) => (
          <div className='hidden md:block' key={i + latter}>
            <Link
              href={`/teste/${latter}`}
              className='
                px-3 py-2 uppercase text-recipe-app-yellow
                transition-colors hover:text-yellow-600
              '
            >
              {latter}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
}
