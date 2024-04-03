import React, { createContext, useContext, useState } from 'react';
import { Movie } from '../type';

interface MoviePreferencesContextType {
  favoriteMovies: Movie[];
  toggleFavorite: (movie: Movie) => void;
}

const MoviePreferencesContext = createContext<MoviePreferencesContextType | undefined>(undefined);

export const useMoviePreferences = () => {
  const context = useContext(MoviePreferencesContext);
  if (!context) {
    throw new Error("useMoviePreferences must be used within a MoviePreferencesProvider");
  }
  return context;
};

export const MoviePreferencesProvider: React.FC = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const toggleFavorite = (movie: Movie) => {
    const isFavorite = favoriteMovies.some(fav => fav.id === movie.id);
    if (isFavorite) {
      setFavoriteMovies(favoriteMovies.filter(fav => fav.id !== movie.id));
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  const value: MoviePreferencesContextType = {
    favoriteMovies,
    toggleFavorite,
  };

  return (
    <MoviePreferencesContext.Provider value={value}>
      {children}
    </MoviePreferencesContext.Provider>
  );
};
