import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types/interfaces for your context and provider props
interface FavoritesContextType {
  favorites: string[]; // Assuming movieId is of type string
  toggleFavorite: (movieId: string) => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

// Create context with specified type
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Custom hook to consume context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

// FavoritesProvider component with defined props type
export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (movieId: string) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter(id => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  // Provide value with specified type
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
