import React from 'react';
import { Card, Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { Movie } from '../type';

interface FaveProps {
  favorites: Movie[];
  handleRemoveFavorite: (movie: Movie) => void;
}

const Fave: React.FC<FaveProps> = ({ favorites, handleRemoveFavorite }) => {
  return (
    <div>
      {favorites.map((movie) => (
        <Card key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.director}</p>
          <Button
            type="text"
            icon={<HeartFilled />}
            onClick={() => handleRemoveFavorite(movie)}
          >
            Remove from Favorites
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Fave;
