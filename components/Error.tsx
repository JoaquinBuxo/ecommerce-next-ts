import React from 'react';

interface ErrorProps {
  error: Error | null;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Sorry, something went wrong
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>
          Error: {error?.message}
        </p>
      </div>
    </main>
  );
};

export default Error;
