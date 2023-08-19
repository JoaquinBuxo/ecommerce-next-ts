import React from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='product-list mt-6 grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4'>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
