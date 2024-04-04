import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useLikedMovies } from './LikedMovieContext';
import { Movie } from '../../type';
import Banner from '../Banner/Banner';

const bannerImages = [
  'https://i.pinimg.com/736x/46/e8/4e/46e84e948b0e52540d3e8e173af604da.jpg',
  'https://ghibliapi.vercel.app/people/ba924631-068e-4436-b6de-f3283fa848f0',
  'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/08/studioghibliranked.jpg'
];


const LikedMovies: React.FC = () => {
  const { likedMovies } = useLikedMovies();
  const [filteredLikedMovies, setFilteredLikedMovies] = React.useState(likedMovies);

  const handleSearch = (filteredMovies: Movie[]) => {
    setFilteredLikedMovies(filteredMovies);
  };

  return (
    <div>
      
      <Navbar movies={likedMovies} setFilteredMovies={handleSearch} />
      <Banner bannerImages={bannerImages} />
      <h2>Liked Movies</h2>
      <ul>
        {filteredLikedMovies.map((movie, index) => (
          <li key={index}>
            <img src={movie.image} alt={movie.title} />
            <div>
              <h3>{movie.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedMovies;
