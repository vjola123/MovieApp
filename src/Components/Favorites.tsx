import React from "react";
import { useFavorites } from "./FavoritesProvider";
 

const Favorites: React.FC = () => {
  const { favorites } = useFavorites(); 

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((movieId: string) => (
          <li key={movieId}>{movieId}</li> {}
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
