'use client';

import {
  ProductList,
  SearchProduct,
  SelectProduct,
  Error,
  Loading,
} from '@/components';
import NavBar from '@/components/NavBar';
import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const graphqlAPI = process.env.NEXT_PUBLIC_API_URL || '';

export default function Home() {
  const { data, loading, error } = useFetch(graphqlAPI);

  const [products, setProducts] = useState(data?.data.products.items || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');

  useEffect(() => {
    if (data && data.data.products.items) {
      setProducts(data?.data.products.items);
    }
  }, [data]);

  return (
    <main className='overflow-hidden'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-full lg:px-8'>
        <NavBar />
        <section className='home__filters mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <SearchProduct setSearchQuery={setSearchQuery} />
          </div>
          <div className='sm:col-span-3'>
            <SelectProduct
              products={products}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
            />
          </div>
        </section>
        <section className='products-container'>
          {loading ? (
            <Loading />
          ) : (
            <ErrorBoundary fallback={<Error error={error} />}>
              <ProductList
                products={products}
                filters={{ searchQuery, selectedBrand }}
              />
            </ErrorBoundary>
          )}
        </section>
      </div>
    </main>
  );
}
