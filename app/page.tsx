'use client';

import { ProductList, SearchProduct, SelectProduct } from '@/components';
import { useFetch } from '@/hooks/useFetch';
import { Product } from '@/types';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const graphqlAPI = process.env.NEXT_PUBLIC_API_URL || '';

export default function Home() {
  const { data, loading, error } = useFetch(graphqlAPI);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(data?.data.products.items);
  }, [data?.data.products.items]);

  return (
    <main className='overflow-hidden'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <section className='home__title-container '>
          <h1 className='text-2xl font-bold tracking-tight text-gray-900'>
            CATALOGUE
          </h1>
        </section>
        <section className='home__filters mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <SearchProduct
              products={data?.data.products.items}
              setFilteredProducts={setFilteredProducts}
            />
          </div>
          <div className='sm:col-span-3'>
            <SelectProduct
              products={data?.data.products.items}
              setFilteredProducts={setFilteredProducts}
            />
          </div>
        </section>
        <section className='products-container'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ErrorBoundary
              fallback={<div>Error fetching data: {error?.message}</div>}
            >
              <ProductList products={filteredProducts} />
            </ErrorBoundary>
          )}
        </section>
      </div>
    </main>
  );
}
