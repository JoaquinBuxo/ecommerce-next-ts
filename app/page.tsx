import { SearchBar } from '@/components';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='mt-12 padding-x padding-y max-width'>
        <div className='home__title-container'>
          <h1 className='text-4xl font-extrabold'>CATALOGUE</h1>
        </div>
        <div className='home__filters'>
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
