'use client';

import { Product } from '@/types';
import { useState } from 'react';

interface SearchBarProps {
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setFilteredProducts }) => {
  const [query, setQuery] = useState('');
  let timer: NodeJS.Timeout | null = null;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      setFilteredProducts((prevProducts) =>
        prevProducts.filter((product) =>
          product.name.toLowerCase().includes(newQuery.toLowerCase())
        )
      );
    }, 300);
  };

  return <input type='search' value={query} onChange={handleSearch} />;
};

export default SearchBar;
