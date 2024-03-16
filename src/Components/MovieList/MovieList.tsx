import React, { useState, useEffect } from 'react';
import './MovieList.css';
import Card from '../MovieCard/Card';


import { fetchAllMovies } from '../../api';
import { Movie } from '../../type';

const MovieList: React.FC = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchAllMovies();
      if (movies) {
        setMovieList(movies);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='movie-list'>
      {movieList.map((movie: Movie) => (
        <div key={movie.id}>
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
