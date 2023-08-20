import { useContext } from 'react';
import { FavoriteProductsContext } from '../context/FavoriteProductsContext';

export const useFavoriteProducts = () => {
  return useContext(FavoriteProductsContext);
};
