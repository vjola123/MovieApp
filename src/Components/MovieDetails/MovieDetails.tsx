import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

interface Movie {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  image: {
    original: string;
  };
}

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://ghibliapi.vercel.app");
      const data: Movie[] = await response.json();
      const movie = data.find((movie) => movie.id === params.id);
      setMovie(movie);
    };
    fetchData();
  }, [params.id]);

  const PassDate = () => {
    navigate(`/movie-details/${movie?.id}/book-ticket`, {
      state: {
        movieName: movie?.title,
        movieId: movie?.id,
      },
    });
  };

  return (
    <div className="movie-details-container">
      <h1 className="heading">Movie Details</h1>
      {movie && (
        <div className="movie-details">
          <div className="poster">
            <img src={movie.image.original} alt="Poster" />
          </div>
          <div className="movie-info">
            <h1 className="movie-name">{movie.title}</h1>
            <div className="movie-summary">{movie.description}</div>
            <div className="movie-genre detail-item">
              <span className="details-heading">Director :</span>{" "}
              <span className="detail-Title">{movie.director}</span>
            </div>
            <div className="release-date detail-item">
              <span className="details-heading">Release Date :</span>
              <span className="detail-Title">{movie.release_date}</span>
            </div>
            <div className="running-time detail-item">
              <span className="details-heading">Running Time :</span>
              <span className="detail-Title">{movie.running_time} mins</span>
            </div>
            <div className="rating detail-item">
              <span className="details-heading">Rating :</span>
              <span className="detail-Title">{movie.rt_score}</span>
            </div>
            <button className="book-btn" onClick={PassDate}>
              Book Ticket
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;