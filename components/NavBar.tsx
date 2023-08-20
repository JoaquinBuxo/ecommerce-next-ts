import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useFavoriteProducts } from '@/hooks/useFavoriteProducts';

const NavBar = () => {
  const { numFavoriteProducts } = useFavoriteProducts();

  return (
    <nav className='bg-gray-900 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10'>
      <h1 className='text-2xl font-bold tracking-tight text-white'>
        CATALOGUE
      </h1>

      <button className='text-white flex items-center'>
        <HeartIcon className='h-8 w-8 text-white' />
        <span className=' px-2 py-1 text-white'>{numFavoriteProducts}</span>
      </button>
    </nav>
  );
};

export default NavBar;
