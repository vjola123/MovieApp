import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Components/Homepage/Homepage";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import LikedMovies from "./Components/LikedMovies/LikedMovies";
import { LikedMoviesProvider } from "./Components/LikedMovies/LikedMovieContext";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Form from './Components/TicketForm/Form';

const App: React.FC = () => {
  const bannerImages = [
    'https://i.pinimg.com/736x/46/e8/4e/46e84e948b0e52540d3e8e173af604da.jpg',
    'https://ghibliapi.vercel.app/people/ba924631-068e-4436-b6de-f3283fa848f0',
    'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/08/studioghibliranked.jpg'
  ];

  return (
    <LikedMoviesProvider>
      
        <Router>
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                  <Navbar />
                  <Banner bannerImages={bannerImages} />
                    <HomePage />

                  </>
                }
              />
              <Route path="/movie-details/:id" element={<MovieDetails />} />
              <Route path='/movie-details/:id/book-ticket' element={<Form />} />
              <Route path="/liked-movies" element={<LikedMovies />} />
            </Routes>
          </div>
        </Router>
     
    </LikedMoviesProvider>
  );
};

export default App;
