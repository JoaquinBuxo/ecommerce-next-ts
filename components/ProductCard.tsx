import React from 'react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
      </div>
    </div>
  );
};

export default ProductCard;
