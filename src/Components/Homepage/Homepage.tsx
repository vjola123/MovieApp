// HomePage.tsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchAllMovies } from "../../api";
import { Movie } from "../../type";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Navbar/SearchBar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieList from "../MovieList/MovieList";
import MovieCard from "../MovieCard/Card";

interface SliderSettings {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  arrows: boolean;
}

const HomePage: React.FC = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [searchResult, setSearchResult] = useState<Movie | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchAllMovies();
      if (movies) {
        setData(movies);
      }
    };

    fetchData();
  }, []);

  const settings: SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
  };

  const handleSearch = async (searchTerm: string) => {
    try {
      const filteredMovies = data.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredMovies.length > 0) {
        setSearchResult(filteredMovies[0]);
      } else {
        console.error('Movie not found');
      }
    } catch (error) {
      console.error('Error searching for movie:', error);
    }
  };

  return (
    <div className="homepage-container">
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
      </div>

      {searchResult && (
        <div className="search-result-container">
          <h2>Search Result:</h2>
          <MovieCard 
          movie={searchResult}
        
           />
        </div>
      )}

      <div className="slider-container">
        <Slider {...settings}>
          {data.map((movie: Movie, index: number) => (
            <div key={index} className="movie-slide">
              <img
                src={movie.image}
                alt={movie.title}
                style={{ width: "300px", height: "400px" }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="movie-list-container">
        <MovieList />
      </div>
    </div>
  );
};

export default HomePage;
