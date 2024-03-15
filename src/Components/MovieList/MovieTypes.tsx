

export interface Movie {
    id: string;
    title: string;
    description: string;
    release_date: string;
    original_title: string;
    director: string;
    running_time: string;
    rating: string | number;
    image: {
      medium: string;
    };
  }
  