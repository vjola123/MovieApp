import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Homepage/Homepage';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Form from './Components/TicketForm/Form';
import Banner from './Components/Banner/Banner';

import { fetchAllMovies } from './api';
import { Movie } from './type';
import Fave from './Components/Fave';
import SearchBar from './Components/Navbar/SearchBar';



const App: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Fetch favorites from local storage on initial load
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const bannerImages = [
    'https://i.pinimg.com/736x/46/e8/4e/46e84e948b0e52540d3e8e173af604da.jpg',
    'https://ghibliapi.vercel.app/people/ba924631-068e-4436-b6de-f3283fa848f0',
    'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/08/studioghibliranked.jpg'
  ];

  const handleToggleFavorite = (movie: Movie) => {
    const index = favorites.findIndex((fav) => fav.id === movie.id);
    if (index === -1) {
      // Add to favorites
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Banner bannerImages={bannerImages} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie-details/:id' element={<MovieDetails />} />
          <Route path='/movie-details/:id/book-ticket' element={<Form />} />
          <Route path='/favorites' element={<Fave favorites={favorites} />} /> {/* Route for the Favorites page */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
