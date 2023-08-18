'use client';

import { ProductList, SearchBar } from '@/components';
import { useFetch } from '@/hooks/useFetch';
import { ErrorBoundary } from 'react-error-boundary';

const graphqlAPI = process.env.NEXT_PUBLIC_API_URL || '';

export default function Home() {
  const { data, loading, error } = useFetch(graphqlAPI);

  return (
    <main className='overflow-hidden'>
      <div className='mt-12 padding-x padding-y max-width'>
        <section className='home__title-container'>
          <h1 className='text-4xl font-extrabold'>CATALOGUE</h1>
        </section>
        <section className='home__filters'>
          <SearchBar />
        </section>
        <section className='products-container'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ErrorBoundary
              fallback={<div>Error fetching data: {error?.message}</div>}
            >
              <ProductList products={data?.data.products.items} />
            </ErrorBoundary>
          )}
        </section>
      </div>
    </main>
  );
}
