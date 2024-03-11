import { useQuery } from '@tanstack/react-query';
import Keys from '../../keys';
import getMovies from '../getMovies';



const useGetMovies = () =>
  useQuery({
    queryKey: [Keys.GET_MOVIES],
    queryFn: getMovies,
    refetchOnMount: false,
  });

export default useGetMovies;


