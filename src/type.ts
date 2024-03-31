export interface Movie {
    isFavorite: unknown;
    id: string;
    title: string;
    original_title: string;
    image: string;
    movie_banner: string;
    description: string;
    director: string;
    release_date: string;
    running_time: string;
    rt_score: string;
    moviePrice: '700 ALL'; // This seems to be a string literal type, not sure if you intended this
}
