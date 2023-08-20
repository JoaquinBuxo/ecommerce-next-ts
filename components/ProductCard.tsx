import React from 'react';
import { Product } from '@/types';
import { useFavoriteProducts } from '../hooks/useFavoriteProducts';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartFilledIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleFavorite, isProductFavorite } = useFavoriteProducts();

  console.log();

  return (
    <div className='product-card group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img
          src={`https://media.sivasdescalzo.com/media/catalog/product${product.small_image.url}`}
          alt={product.name}
          loading='lazy'
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>{product.name}</h3>
          <p className='mt-1 text-sm text-gray-500'>{product.brand_name}</p>
          <p className='mt-1 text-sm text-gray-500'>{product.final_price} €</p>
        </div>
        <button
          className='favorite-button text-sm font-medium text-gray-900'
          onClick={() => toggleFavorite(product)}
        >
          {isProductFavorite(product) ? (
            <HeartFilledIcon className='h-5 w-5 text-gray-400' />
          ) : (
            <HeartOutlineIcon className='h-5 w-5 text-gray-400' />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
