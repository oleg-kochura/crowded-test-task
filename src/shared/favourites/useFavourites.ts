import { useContext } from 'react';
import { FavouritesContext } from './FavouritesContext';

export const useFavourites = () => {
  const ctx = useContext(FavouritesContext);
  if (!ctx) throw new Error('useFavourites must be used inside FavouritesProvider');
  return ctx;
};
