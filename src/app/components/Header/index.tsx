/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import Link from 'next/link';

import { faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../../../public/logo.png';

export function Header() {
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
              type='text'
              placeholder='search recipes...'
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
    </header>
  );
}
