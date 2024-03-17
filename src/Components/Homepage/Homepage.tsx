import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Slider from "react-slick";
import MovieList from "../MovieList/MovieList";
import { fetchAllMovies } from "../../api";
import { Movie } from "../../type";

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

  return (
    <>
      <Slider {...settings}>
        {data.map((movie: Movie, index: number) => (
          <img
            key={index}
            src={movie.image} 
            alt={movie.title}
            style={{ width: "300px", height: "400px" }} 
          />
        ))}
      </Slider>

      <MovieList />
    </>
  );
};

export default HomePage;
