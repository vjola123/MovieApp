import { useParams } from 'react-router-dom';
import useGetSingleMovie from '../../api/request/hooks/useGetSingleMovie';
import MovieDescriptions from '../MovieDescription/Presentational';




const MovieDetails = () => {
    
  const { movieId } = useParams();  
  const {data: movieDetails} = useGetSingleMovie(movieId as string);
  return (
    <MovieDescriptions
    movieTitle={movieDetails?.[0]?.title}
     original_title={movieDetails?.[0]?.original_title}
      description={movieDetails?.[0]?.description}
      director={movieDetails?.[0]?.director}
      release_date={movieDetails?.[0]?.release_date}
      producer={movieDetails?.[0]?.producer}
      image={movieDetails?.[0]?.image}
      running_time={movieDetails?.[0]?.running_time}
    />
  )
};


export default MovieDetails;
