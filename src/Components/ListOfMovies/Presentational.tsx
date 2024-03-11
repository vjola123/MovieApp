
import useGetMovies from "../../api/request/hooks/useGetMovies";
import MovieCard from "../MovieCard/Presentational"; // Assuming MovieCard component exists
import styles from './Styles.module.css';

const ListOfMovie = () => {
    const { data: listOfMovies } = useGetMovies();

    return (
        <div className={styles.listOfMoviesContainer}>
            <h1 className={styles.title}>Ghibli Movies</h1>
            <div className={styles.movieGrid}>
                {listOfMovies?.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        movieTitle={movie.title}
                        original_title={movie.original_title}
                        imageUrl={movie.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListOfMovie;
