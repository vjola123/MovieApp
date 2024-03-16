import React, { useState } from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { Movie } from "../../type";


interface CardProps {
  movie: Movie;
}

const MovieCard: React.FC<CardProps> = ({ movie }) => {
  const { id, title, director, image } = movie;
  const navigate = useNavigate();
  const [isFavorite, setFavorite] = useState(false);
  const [heartIcon, setHeartIcon] = useState(<HeartOutlined />);

  const toggleFavorite = () => {
    const newFavoriteState = !isFavorite;
    setFavorite(newFavoriteState);
    setHeartIcon(newFavoriteState ? <HeartFilled /> : <HeartOutlined />);
  };

  const handleImageError = () => {
    // Handle the image error here, could be setting a state or performing any action
    console.error("Error loading image:", image);
  };

  return (
    <Card
      hoverable
      onClick={() => navigate(id)}
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
          onClick={toggleFavorite}
        />
      </div>
    </Card>
  );
};

export default MovieCard;
