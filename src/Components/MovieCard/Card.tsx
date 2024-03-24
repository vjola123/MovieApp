import React, { useState } from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { Movie } from "../../type";

interface CardProps {
  movie: Movie;
  toggleFavorite: (movieId: string) => void;
}

const MovieCard: React.FC<CardProps> = ({ movie, toggleFavorite }) => {
  const { id, title, director, image } = movie;
  const navigate = useNavigate();
  const [isFavorite, setFavorite] = useState(false);
  const [heartIcon, setHeartIcon] = useState(<HeartOutlined />);

  const handleToggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Stop propagation of the click event
    const newFavoriteState = !isFavorite;
    setFavorite(newFavoriteState);
    setHeartIcon(newFavoriteState ? <HeartFilled /> : <HeartOutlined />);
    toggleFavorite(id);

    // Save movie details to local storage
    const path = `/movie-details/${id}`;
    const storedPaths = JSON.parse(localStorage.getItem('movieDetailsPaths') || '[]');
    const updatedPaths = newFavoriteState ? [...storedPaths, path] : storedPaths.filter(p => p !== path);
    localStorage.setItem('movieDetailsPaths', JSON.stringify(updatedPaths));
  };

  const handleImageError = () => {
    console.error("Error loading image:", image);
  };

  const navigateToMovieDetails = () => {
    navigate(`/movie-details/${id}`);
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
        />
      </div>
    </Card>
  );
};

export default MovieCard;
