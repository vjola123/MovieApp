import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { HeartOutlined, CalendarOutlined } from '@ant-design/icons';
import "./Navbar.css"

const { Search } = Input;

const Navbar: React.FC = () => {
  const handleSearch = (value: string) => {
    // Handle search functionality here
    console.log('Search query:', value);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="logo1" src="http://teemato.com/wp-content/uploads/studio-ghibli-collection-514a30138ff15.png" alt="Logo" />
        </Link>
      </div>
      <div className="search-bar">
        <Search placeholder="Search movies" onSearch={handleSearch} enterButton />
      </div>
      <div className="nav-buttons">
        <Link to="/favorites">
          <Button className='fav-button' icon={<HeartOutlined />} type="text">Favorites</Button>
        </Link>
        <Link to="/booked">
          <Button className='book-button' icon={<CalendarOutlined />} type="text">Booked</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
