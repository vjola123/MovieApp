import React, { createContext, useContext, useState, ReactNode } from "react";


interface FavoritesContextType {
  favorites: string[]; 
  toggleFavorite: (movieId: string) => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}


const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);


export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};


export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (movieId: string) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter(id => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };


  const value: FavoritesContextType = {
    favorites,
    toggleFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};