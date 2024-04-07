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

const Navbar: React.FC<NavbarProps> = ({movies}) => {

  return (
    <header>
      <nav className="navbar">
        <div className="logo">

          <Link to="/">
            <img
              className="logo1"
              src="https://u.cubeupload.com/Totoro/kkfg.png"
              alt="Logo"
            />

          </Link>
        </div>
        <h1 className='title-nav'>Ghibli Studio</h1>
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
