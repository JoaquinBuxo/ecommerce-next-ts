import { Product } from '@/types';
import React from 'react';

interface ProductListProps {
  product: Product;
}

const FavoriteProductCard: React.FC<ProductListProps> = ({ product }) => {
  return (
    <li key={product.id} className='flex py-6'>
      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <img
          src={`https://media.sivasdescalzo.com/media/catalog/product${product.small_image.url}`}
          alt={product.name}
          loading='lazy'
          className='h-full w-full object-cover object-center'
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>{product.name}</h3>
            <p className='ml-4'>{product.final_price}€</p>
          </div>
          <p className='mt-1 text-sm text-gray-500'>{product.brand_name}</p>
        </div>
      </div>
    </li>
  );
};

export default FavoriteProductCard;
