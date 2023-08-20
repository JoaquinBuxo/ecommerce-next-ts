'use client';

import FavoriteProducts from '@/components/FavoriteProducts';
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
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  const openFavoriteProducts = () => setOpen(true);
  const closeFavoriteProducts = () => setOpen(false);

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
