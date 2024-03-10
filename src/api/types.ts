export type Movie = {
    id: string;
    title: string;
    original_title: string;
    description: string;
    director: string;
    release_date: string;
    producer: string;
    image: string;
    running_time : number;
  };

  export type GenericError = {
    errors: {
      source: string;
      title: string;
    }[];
  } & string;
  