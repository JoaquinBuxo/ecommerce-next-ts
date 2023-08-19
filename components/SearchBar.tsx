'use client';

import { Product } from '@/types';
import { useState } from 'react';

interface SearchBarProps {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  products,
  setFilteredProducts,
}) => {
  const [query, setQuery] = useState('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    setFilteredProducts((prevProducts) =>
      prevProducts.filter((product) =>
        product.name.toLowerCase().includes(newQuery.toLowerCase())
      )
    );
  };

  return <input type='search' value={query} onChange={handleSearch} />;
};

export default SearchBar;
