import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Slider from "react-slick";
import MovieList from "../MovieList/MovieList";

interface Movie {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rating: number;
  price: number;
  image: {
    medium: string;
    original: string;
    banner: string;
  }
}
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
    //fetching movie data
    const getData = () => {
      fetch(`https://ghibliapi.vercel.app`)
        .then((res) => res.json())
        .then((data: Movie[]) => setData(data));
    };
    getData();
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
        {data?.map((movie: Movie, index: number) => (
          <img
            key={index}
            src={movie.image ? movie.title : ""}
            alt=""
          />
        ))}
      </Slider>
      <h1 className="heading">Movies</h1>
      <MovieList />
    </>
  );
};

export default HomePage;
