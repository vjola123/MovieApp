
import React from 'react';
import { useMoviePreferences } from './useMoviePreferences';


const Fave: React.FC = () => {
  const { favoriteMovies } = useMoviePreferences();

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteMovies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Fave;
