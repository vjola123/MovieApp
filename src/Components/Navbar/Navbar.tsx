import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../type';
import { Button } from 'antd';
import { CalendarOutlined, HeartOutlined } from '@ant-design/icons';
import './Navbar.css';

interface NavbarProps {
  movies: Movie[];
  setFilteredMovies: (filteredMovies: Movie[]) => void;
}

const Navbar: React.FC<NavbarProps> = ({ movies, setFilteredMovies }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Movie[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery)
    );
    setSearchResult(filteredMovies);
  };

  return (
    <header>
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
          <Link to="/liked-movies">
            <Button
              className="fav-button"
              icon={<HeartOutlined />}
              type="text"
            >
              Favorites
            </Button>
          </Link>
         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
