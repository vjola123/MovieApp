import React, { useState, useEffect } from 'react';
import './MovieList.css';
import Card from '../MovieCard/Card';
import { fetchAllMovies } from '../../api';
import { Movie } from '../../type';


interface MovieListProps {
  movies:Movies[];
}


interface MovieData {
  id: string;
  title: string;

}


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
