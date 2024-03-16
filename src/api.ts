import axios from "axios";
import { Movie } from "./type";

export const fetchAllMovies = async ():Promise<Movie[] | undefined> => {
    try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');
        return response.data;
    } catch (error){
        console.error(error);
    }
}