'use client';

import FavoriteProducts from '@/components/FavoriteProducts';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Product } from '@/types';
import React, { createContext, useState } from 'react';

interface FavoriteProductsContextType {
  openFavoriteProducts: () => void;
  closeFavoriteProducts: () => void;
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
  const [open, setOpen] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useLocalStorage(
    'favoriteProducts',
    []
  );

  const openFavoriteProducts = () => setOpen(true);
  const closeFavoriteProducts = () => setOpen(false);

  const isProductFavorite = (product: Product) =>
    favoriteProducts.some((p: Product) => p.id === product.id);

  const toggleFavorite = (product: Product) => {
    if (isProductFavorite(product)) {
      setFavoriteProducts(
        favoriteProducts.filter((p: Product) => p.id !== product.id)
      );
    } else {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  const numFavoriteProducts = favoriteProducts.length;

  return (
    <FavoriteProductsContext.Provider
      value={{
        openFavoriteProducts,
        closeFavoriteProducts,
        favoriteProducts,
        toggleFavorite,
        isProductFavorite,
        numFavoriteProducts,
      }}
    >
      {children}
      <FavoriteProducts open={open} />
    </FavoriteProductsContext.Provider>
  );
};
