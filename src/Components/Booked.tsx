// booked.tsx
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard/Card';
import { Movie } from '../type';

const Booked: React.FC = () => {
  const [bookedMovies, setBookedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch booked movies from local storage
    const storedBookedMovies = JSON.parse(localStorage.getItem('bookedMovies') || '[]');
    setBookedMovies(storedBookedMovies);
  }, []);

  // Handle removing a booked movie
  const removeFromBooked = (movieId: string) => {
    const updatedBookedMovies = bookedMovies.filter(movie => movie.id !== movieId);
    setBookedMovies(updatedBookedMovies);
    // Update local storage
    localStorage.setItem('bookedMovies', JSON.stringify(updatedBookedMovies));
  };

  return (
    <div>
      <h2>Booked Movies</h2>
      {bookedMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} toggleFavorite={removeFromBooked} />
      ))}
    </div>
  );
};

export default Booked;
