import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

interface Movie {
  id: string;
  title: string;
  original_title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  moviePrice: '700 ALL'; // Adjust this type according to your requirement
}

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ghibliapi.vercel.app/films/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const data: Movie = await response.json();
        console.log("Image URL:", data.image); // Add this line to log the image URL
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
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
            {/* Ensure the image URL is accessed correctly */}
            <img src={movie.image} alt="Poster" />
          </div>
          <div className="movie-info">
            <h1 className="movie-name">{movie.title}</h1>
            <h2 className="movie-title-japanese">{movie.original_title}</h2>
            <div className="movie-summary">{movie.description}</div>
            <div className="director detail-item">
              <span className="details-heading">Director :</span>{" "}
              <span className="detail-Title">{movie.director}</span>
            </div>
            <div className="release-date detail-item">
              <span className="details-heading">Release Date :</span>
              <span className="detail-Title">{movie.release_date}</span>
            </div>
        
            {/* Adjust the rating and price accordingly */}
            <div className="rating detail-item">
              <span className="details-heading">Rating :</span>
              <span className="detail-Title">{movie.rt_score}</span>
            </div>
            <div className="price detail-item">
              <span className="details-heading">Price :</span>
              <span className="detail-Title">{movie.moviePrice}700L</span>
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