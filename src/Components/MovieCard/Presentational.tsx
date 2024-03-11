import React from 'react';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './Styles.module.css';

interface Props {
  id: string;
  movieTitle: string;
  original_title: string;
  imageUrl: string;
}

const MovieCard: React.FC<Props> = ({
  id,
  movieTitle,
  original_title,
  imageUrl
}) => {
  const { Meta } = Card;

  const navigate = useNavigate();

  const movieInitials = movieTitle?.split(" ").map((n) => n[0]).join(".");

  return (
    <Card 
      hoverable
      onClick={() => navigate(id)}
      className={styles.movieCard}
    >
      <Meta
        avatar={
          imageUrl
          ? <Avatar src={imageUrl} />
          : <Avatar>{movieInitials}</Avatar>
        }
        title={original_title}
        description={original_title}
      />
    </Card>
  );
};

export default MovieCard;

  