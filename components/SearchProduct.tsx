'use client';

import { Product } from '@/types';

interface SearchProductProps {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SearchProduct: React.FC<SearchProductProps> = ({
  products,
  setFilteredProducts,
}) => {
  let timer: NodeJS.Timeout | null = null;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      const filteredProducts =
        query === ''
          ? products
          : products?.filter((product) =>
              product.sku.toLowerCase().includes(query.toLowerCase())
            );
      setFilteredProducts(filteredProducts);
    }, 300);
  };

  return (
    <>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Search Sku
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <input
          type='text'
          name='search'
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Search sku Product'
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchProduct;
