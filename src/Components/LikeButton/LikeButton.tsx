import React, { useEffect } from 'react';

import './LikeButton.css'
import { Movie } from '../../type';
import { useLikedMovies } from '../LikedMovies/LikedMovieContext';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';


interface LikeButtonProps {
  movie: Movie;
}

const LikeButton: React.FC<LikeButtonProps> = ({ movie }) => {
  const { addToLikedMovies, removeFromLikedMovies, likedMovies } = useLikedMovies();
  const [liked, setLiked] = React.useState(false);

  useEffect(() => {
    setLiked(likedMovies.some(m => m.id === movie.id));
  }, [movie.id, likedMovies]);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      addToLikedMovies(movie);
    } else {
      removeFromLikedMovies(movie.id);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`like-button ${liked ? 'liked' : ''}`}

    >
      {liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
    </button>
  );
};

export default LikeButton;
