import { useQuery } from '@tanstack/react-query';
import Keys from '../../keys';
import getSingleMovies from '../getSingleMovies';

const useGetSingleMovie = (characterId: string) =>
  useQuery({
    queryKey: [Keys.GET_SINGLE_MOVIE],
    queryFn: () => getSingleMovies(characterId),
  });

export default useGetSingleMovie;
