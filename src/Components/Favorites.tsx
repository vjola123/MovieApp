import React from "react";
import { Movie } from "../type";



interface FavoritesProps {
  favorites: Movie[];
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;