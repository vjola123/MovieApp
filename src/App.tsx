import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Homepage/Homepage';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Form from './Components/TicketForm/Form';
import Banner from './Components/Banner/Banner';

const App: React.FC = () => {
  const bannerImages = [
    'https://ghibliapi.vercel.app/films/2baf70d1-42bb-4437-b551-e5fed5a87abe',
    'https://ghibliapi.vercel.app/people/ba924631-068e-4436-b6de-f3283fa848f0',
    'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/08/studioghibliranked.jpg'
 
  ]
  return (
    <div className="App">
      <Navbar />
      <Banner bannerImages={bannerImages} />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie-details/:id' element={<MovieDetails />} />
          <Route path='/movie-details/:id/book-ticket' element={<Form />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
