import React, { useState, useEffect } from "react";
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

 
  useEffect(() => {
    const isMovieFavorite = localStorage.getItem(id) === 'true';
    setFavorite(isMovieFavorite);
    setHeartIcon(isMovieFavorite ? <HeartFilled /> : <HeartOutlined />);
  }, [id]); 

  const handleFavoriteButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleToggleFavorite(event);
  };
  const handleToggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
     const newFavoriteState = !isFavorite;
    setFavorite(newFavoriteState);
    if (newFavoriteState) {
      setHeartIcon(<HeartFilled />);
    } else {
      setHeartIcon(<HeartOutlined />);
    }

    localStorage.setItem(id, String(newFavoriteState));

  
    onFavoriteChange(movie, newFavoriteState);
  };

  const handleImageError = () => {
    console.error("Error loading image:", image);
  };

  const navigateToMovieDetails = () => {
    navigate(`/movie-details/${id}`);
    onSearch(""); 
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
  onClick={handleFavoriteButtonClick}
  style={{ color: isFavorite ? 'red' : 'black' }}
/>
      </div>
    </Card>
  );
};

export default MovieCard;
