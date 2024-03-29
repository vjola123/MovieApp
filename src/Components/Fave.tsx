import React, { useEffect, useState } from 'react';
import { Movie } from '../type';
import MovieCard from './MovieCard/Card';



const Fave: React.FC = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Retrieve stored favorite movie IDs from local storage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');

    // Fetch movie details for each favorite movie ID
    const fetchFavoriteMovies = async () => {
      const promises = storedFavorites.map(async (movieId: string) => {
        const response = await fetch(`https://ghibliapi.vercel.app/films/${params.id}`);
        return await response.json();
      });
      const favoriteMoviesData = await Promise.all(promises);
      setFavoriteMovies(favoriteMoviesData);
    };

    fetchFavoriteMovies();
  }, []);

  return (
    <div>
      {favoriteMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSearch={function (query: string): void {
          throw new Error('Function not implemented.');
        } } />
      ))}
    </div>
  );
};

export default Fave;
