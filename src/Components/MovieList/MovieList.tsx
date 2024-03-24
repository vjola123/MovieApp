import React, { useState, useEffect } from 'react';
import './MovieList.css';
import Card from '../MovieCard/Card';
import { fetchAllMovies } from '../../api';
import { Movie } from '../../type';

// Define type/interface for MovieList component
interface MovieListProps {
  movies:Movies[];
}

// Define type/interface for the movie data fetched from API
interface MovieData {
  id: string;
  title: string;
  // Add other properties as needed
}

// MovieList component with specified props type
const MovieList: React.FC<MovieListProps> = () => {
  const [movieList, setMovieList] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies: Movie[] | null = await fetchAllMovies();
      if (movies) {
        setMovieList(movies);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='movie-list'>
      {movieList.map((movie: MovieData) => (
        <div key={movie.id} className="movie-card-container">
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
