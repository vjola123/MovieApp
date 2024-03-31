import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard/Card';
import { Movie } from '../type';

const Booked: React.FC = () => {
  const [bookedMovies, setBookedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const storedBookedMovies = JSON.parse(localStorage.getItem('bookedMovies') || '[]');
    setBookedMovies(storedBookedMovies);
  }, []);

  const removeFromBooked = (movieId: string) => {
    const updatedBookedMovies = bookedMovies.filter(movie => movie.id !== movieId);
    setBookedMovies(updatedBookedMovies);
    localStorage.setItem('bookedMovies', JSON.stringify(updatedBookedMovies));
  };

  return (
    <div>
      <h2>Booked Movies</h2>
      {bookedMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onSearch={() => { }} onBookedChange={removeFromBooked} />
      ))}
    </div>
  );
};

export default Booked;
