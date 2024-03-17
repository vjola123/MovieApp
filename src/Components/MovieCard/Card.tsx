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

  const handleToggleFavorite = () => {
    const newFavoriteState = !isFavorite;
    setFavorite(newFavoriteState);
    setHeartIcon(newFavoriteState ? <HeartFilled /> : <HeartOutlined />);
    toggleFavorite(id); 
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
