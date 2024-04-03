import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Homepage/Homepage';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Form from './Components/TicketForm/Form';
import Banner from './Components/Banner/Banner';
import { MoviePreferencesProvider } from './Components/useMoviePreferences';
import Fave from './Components/Fave';

const App: React.FC = () => {
  const bannerImages = [
    'https://i.pinimg.com/736x/46/e8/4e/46e84e948b0e52540d3e8e173af604da.jpg',
    'https://ghibliapi.vercel.app/people/ba924631-068e-4436-b6de-f3283fa848f0',
    'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/08/studioghibliranked.jpg'
  ];

  return (
    <div className="App">
      <Router>
        <MoviePreferencesProvider>
          <Navbar />
          <Banner bannerImages={bannerImages} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie-details/:id' element={<MovieDetails />} />
            <Route path='/movie-details/:id/book-ticket' element={<Form />} />
            <Route path='/fave' element={<Fave />} />
          </Routes>
          <Footer />
        </MoviePreferencesProvider>
      </Router>
    </div>
  );
}

export default App;
