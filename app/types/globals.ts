export interface MovieType {
  Title: string;
  Year: string;
  Poster: string;
}

export interface State {
  loading: boolean;
  error: string | null;
  movies: MovieType[] | null;
}

export interface Action {
  type:
    | 'SEARCH_MOVIES_REQUEST'
    | 'SEARCH_MOVIES_SUCCESS'
    | 'SEARCH_MOVIES_FAILURE';
  payload?: MovieType[];
  error?: string;
}

export interface HeaderProps {
  text: string;
}

export interface MovieProps {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
  };
}

export interface SearchProps {
  search: (searchValue: string) => void;
}
