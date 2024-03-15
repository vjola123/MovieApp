import React from "react";
import { Link } from "react-router-dom";

interface Movie {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rating: number;
  image: {
    original: string;
    banner: string;
  };
}

interface CardProps {
  movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <div className="CardContainer" key={movie.id}>
      <div className="Card">
        <div className="movie-poster">
          <img src={movie.image.original} alt={movie.title} />
        </div>
        <div className="details">
          <h2 className="movie-name">{movie.title}</h2>
          <h3 className="movie-original-title">{movie.original_title}</h3>
          <div className="director">Director: {movie.director}</div>
          <div className="release-date">Release Date: {movie.release_date}</div>
          <div className="running-time">Running Time: {movie.running_time}</div>
          <div className="rating">Rating: {movie.rating}</div>
          <div className="description">{movie.description}</div>
          <div className="view-btn">
            <Link to={`/movie-details/${movie.id}`}>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
