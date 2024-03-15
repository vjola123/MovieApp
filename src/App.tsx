import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Homepage/Homepage';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Form from './Components/TicketForm/Form';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
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
