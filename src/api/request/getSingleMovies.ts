import Axios, {
    AxiosError,
    AxiosResponse,
  } from 'axios';

  import {
    Movie,
    GenericError,
  } from '../types';


  const getSingleMovies = async (movieId: string): Promise<Movie[]> => {
    const url = `https://ghibliapi.vercel.app/films/movie${movieId}`;

    try {
        const response: AxiosResponse<Movie[]> = await Axios({
          method: 'get',
          url,
        });
    
        return response.data;
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errorData: AxiosError<GenericError> = error as any;
        const errorResponse: AxiosResponse<GenericError> | undefined = errorData.response;
    
        throw errorResponse;
      }
    };
    
    export default getSingleMovies;