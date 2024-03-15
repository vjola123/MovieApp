import React, { useState, useEffect } from 'react';
import './MovieList.css';
import Card from '../MovieCard/Card';
import { Movie } from './MovieTypes'; // Import Movie type from movieTypes.ts

const MovieList: React.FC = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ghibliapi.vercel.app/films');
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const data: Movie[] = await response.json();
        setMovieList(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='movie-list'>
      {movieList.map((movie: Movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
