import React from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components';

interface ProductListProps {
  products: Product[];
  filters: {
    searchQuery: string;
    selectedBrand: string;
  };
}

const ProductList: React.FC<ProductListProps> = ({ products, filters }) => {
  const filteredProducts = products
    ?.filter((product: Product) =>
      product.sku.toLowerCase().includes(filters.searchQuery.toLowerCase())
    )
    .filter((product: Product) =>
      filters.selectedBrand === 'All Brands'
        ? true
        : product.brand_name === filters.selectedBrand
    );

  return (
    <div className='product-list mt-6 grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4'>
      {filteredProducts?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
