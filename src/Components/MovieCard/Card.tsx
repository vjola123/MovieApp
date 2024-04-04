import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import LikeButton from '../LikeButton/LikeButton';
import { Movie } from '../../type';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <LikeButton movie={movie} />
      <Link to={`/movie-details/${movie.id}`} >
        <img src={movie.image} alt={movie.title} />
        <h2>{movie.title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;
