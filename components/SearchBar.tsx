'use client';

import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const handleSearch = () => {};

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'></div>
    </form>
  );
};

export default SearchBar;
