'use client';

import { Product } from '@/types';
import React, { createContext, useState } from 'react';

interface FavoriteProductsContextType {
  favoriteProducts: Product[];
  toggleFavorite: (product: Product) => void;
  isProductFavorite: (product: Product) => boolean;
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

  return (
    <FavoriteProductsContext.Provider
      value={{ favoriteProducts, toggleFavorite, isProductFavorite }}
    >
      {children}
    </FavoriteProductsContext.Provider>
  );
};
