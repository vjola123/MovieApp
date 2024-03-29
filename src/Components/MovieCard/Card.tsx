// MovieCard.tsx
import React, { useState } from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { Movie } from "../../type";

interface CardProps {
  movie: Movie;
  onSearch: (query: string) => void; // Add onSearch prop
}

const MovieCard: React.FC<CardProps> = ({ movie, onSearch }) => {
  const { id, title, director, image } = movie;
  const navigate = useNavigate();
  const [isFavorite, setFavorite] = useState(false);
  const [heartIcon, setHeartIcon] = useState(<HeartOutlined />);

  const handleToggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const newFavoriteState = !isFavorite;
    setFavorite(newFavoriteState);
    setHeartIcon(newFavoriteState ? <HeartFilled /> : <HeartOutlined />);

    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = newFavoriteState ? [...storedFavorites, movie] : storedFavorites.filter((fav: Movie) => fav.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleImageError = () => {
    console.error("Error loading image:", image);
  };

  const navigateToMovieDetails = () => {
    navigate(`/movie-details/${id}`);
    onSearch(""); // Call onSearch function with an empty string
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