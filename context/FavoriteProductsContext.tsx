'use client';

import { Product } from '@/types';
import React, { createContext, useState } from 'react';

interface FavoriteProductsContextType {
  favoriteProducts: Product[];
  toggleFavorite: (product: Product) => void;
  isProductFavorite: (product: Product) => boolean;
  numFavoriteProducts: number;
}

export const FavoriteProductsContext = createContext(
  {} as FavoriteProductsContextType
);

export const FavoriteProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  const toggleFavorite = (product: Product) => {
    if (favoriteProducts.includes(product)) {
      setFavoriteProducts(favoriteProducts.filter((p) => p !== product));
    } else {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  const isProductFavorite = (product: Product) =>
    favoriteProducts.includes(product);

  const numFavoriteProducts = favoriteProducts.length;

  return (
    <FavoriteProductsContext.Provider
      value={{
        favoriteProducts,
        toggleFavorite,
        isProductFavorite,
        numFavoriteProducts,
      }}
    >
      {children}
    </FavoriteProductsContext.Provider>
  );
};
