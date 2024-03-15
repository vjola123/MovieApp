import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

interface Movie {
  show: {
    id: string;
    name: string;
    image: {
      original: string;
    };
    summary: string;
    genres: string[];
    premiered: string;
    rating: {
      average: number;
    };
  };
}

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null); // Change to single Movie instead of array
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching movie data
    const getData = () => {
      fetch(`https://ghibliapi.vercel.app/films`)
        .then((res) => res.json())
        .then((data: Movie[]) => {
          const foundMovie = data.find((currentMovie) => currentMovie.show.id === params.id);
          if (foundMovie) {
            setMovie(foundMovie);
          } else {
            setMovie(null); // Set null if movie is not found
          }
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
          setMovie(null); // Set null if an error occurs
        });
    };
    getData();
  }, [params.id]);
  

  const PassDate = () => {
    navigate(`/movie-details/${movie?.show.id}/book-ticket`, {
      state: {
        movieName: movie?.show.name,
        movieId: movie?.show.id,
      },
    });
  };

  return (
    <div className="movie-details-container">
      <h1 className="heading">Movie Details</h1>
      {movie && (
        <div className="movie-details">
          <div className="poster">
            <img src={movie.show.image.original} alt="Poster" />
          </div>
          <div className="movie-info">
            <h1 className="movie-name">{movie.show.name}</h1>
            <div className="movie-summary">
              {movie.show.summary.replace(/(<([^>]+)>)/gi, "")}
            </div>
            <div className="movie-genre detail-item">
              <span className="details-heading">Genre :</span>{" "}
              {movie.show.genres.map((genre, index) => (
                <span key={index} className="detail-Title">
                  {genre}{" "}
                </span>
              ))}
            </div>
            <div className="release-date detail-item">
              <span className="details-heading">Release Date :</span>
              <span className="detail-Title">{movie.show.premiered}</span>
            </div>
            <div className="rating detail-item">
              <span className="details-heading">Rating :</span>
              <span className="detail-Title">{movie.show.rating.average}</span>
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
