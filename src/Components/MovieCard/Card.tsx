import React, { useState } from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { Movie } from "../../type";

interface CardProps {
  movie: Movie;
  onSearch: (query: string) => void;
  onFavoriteChange: (movie: Movie, isFavorite: boolean) => void;
}

const MovieCard: React.FC<CardProps> = ({ movie, onSearch, onFavoriteChange }) => {
  const { id, title, director, image } = movie;
  const navigate = useNavigate();
  const [isFavorite, setFavorite] = useState(false);
  const [heartIcon, setHeartIcon] = useState(<HeartOutlined />);

  // Set the initial favorite state when the component mounts
  useState(() => {
    const isMovieFavorite = localStorage.getItem(id) === 'true';
    setFavorite(isMovieFavorite);
    setHeartIcon(isMovieFavorite ? <HeartFilled /> : <HeartOutlined />);
  }, []);

  const handleToggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const newFavoriteState = !isFavorite;
    setFavorite(newFavoriteState);
    setHeartIcon(newFavoriteState ? <HeartFilled /> : <HeartOutlined />);

    // Update local storage with the new favorite state
    localStorage.setItem(id, String(newFavoriteState));

    // Pass the updated favorite state to the parent component
    onFavoriteChange(movie, newFavoriteState);
  };

  const handleImageError = () => {
    console.error("Error loading image:", image);
  };

  const navigateToMovieDetails = () => {
    navigate(`/movie-details/${id}`);
    onSearch(""); // Clear the search query
  };

  return (
    <Card
      hoverable
      onClick={navigateToMovieDetails}
      className={styles.filmCard}
    >
      <Card.Meta title={title} description={director} />
      <div className={styles.imageContainer}>
        <img src={image} alt={title} onError={handleImageError} />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.likeButton}
          icon={heartIcon}
          onClick={handleToggleFavorite}
          style={{ color: isFavorite ? 'red' : 'black' }}
        />
      </div>
    </Card>
  );
};

export default MovieCard;
