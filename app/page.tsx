'use client';

import { SearchBar } from '@/components';
import { Product } from '@/types';
import { useFetch } from '@/hooks/useFetch';

const graphqlAPI = process.env.NEXT_PUBLIC_API_URL || '';

export default function Home() {
  const { data, loading } = useFetch(graphqlAPI);

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
            <div className='product-grid'>
              {data.data.products.items?.map((product: Product) => (
                <div key={product.id} className='product-card'>
                  {product.name}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
