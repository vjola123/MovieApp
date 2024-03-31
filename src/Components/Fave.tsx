import React, { useEffect, useState } from 'react';
import { Movie } from '../type';
import MovieCard from './MovieCard/Card';

const Fave: React.FC = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavoriteMovies(storedFavorites);
  }, []);

  // Create a set to store unique movie IDs
  const uniqueMovieIds = new Set<string>();

  // Filter out duplicate movies based on unique IDs
  const uniqueFavoriteMovies = favoriteMovies.filter((movie) => {
    if (uniqueMovieIds.has(movie.id)) {
      return false;
    }
    uniqueMovieIds.add(movie.id);
    return true;
  });

  return (
    <div>
      {uniqueFavoriteMovies.map((movie) => (
        localStorage.getItem(movie.id) === 'true' && (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSearch={() => { }}
            onFavoriteChange={() => { }}
          />
        )
      ))}
    </div>
  );
};

export default Fave;
