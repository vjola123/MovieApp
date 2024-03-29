import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieList from "../MovieList/MovieList";
import { fetchAllMovies } from "../../api";
import { Movie } from "../../type";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Navbar/SearchBar";
import MovieCard from "../MovieCard/Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const navigate = useNavigate(); // Initialize the useNavigate hook

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

  const handleSearch = async (value: string) => {
    try {
      const response = await fetch(`https://ghibliapi.vercel.app/films?title=${value}`);
      if (response.ok) {
        const searchData: Movie[] = await response.json();
        if (searchData.length > 0) {
          // Set the search result and navigate to the movie details page in a new window
          setSearchResult(searchData[0]);
          navigate(`/movie-details/${searchData[0].id}`, { target: '_blank' });
        } else {
          console.error('Movie not found');
        }
      } else {
        console.error('Failed to fetch movie data');
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
          <MovieCard movie={searchResult} />
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
