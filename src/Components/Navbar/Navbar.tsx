import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { HeartOutlined, CalendarOutlined } from "@ant-design/icons";
import "./Navbar.css";
import MovieCard from "../MovieCard/Card";
import { Movie } from "../../type";
import { useMoviePreferences } from "../useMoviePreferences";

const { Search } = Input;

const Navbar: React.FC = () => {
  const [searchResult, setSearchResult] = useState<Movie[] | null>(null);
  const { favoriteMovies } = useMoviePreferences();

  const handleSearch = async (value: string) => {
    try {
      const response = await fetch(
        `https://ghibliapi.vercel.app/films?title=${value}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResult(data);
      } else {
        console.error("Failed to fetch movie data");
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            className="logo1"
            src="http://teemato.com/wp-content/uploads/studio-ghibli-collection-514a30138ff15.png"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="nav-buttons">
        <Link to="/fave">
          <Button
            className="fav-button"
            icon={<HeartOutlined />}
            type="text"
          >
            Favorites ({favoriteMovies.length})
          </Button>
        </Link>
        <Link to="/booked">
          <Button
            className="book-button"
            icon={<CalendarOutlined />}
            type="text"
          >
            Booked
          </Button>
        </Link>
      </div>
      {searchResult &&
        searchResult.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </nav>
  );
};

export default Navbar;
