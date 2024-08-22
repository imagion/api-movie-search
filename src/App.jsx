import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';

const MOVIE_API_URL = import.meta.env.VITE_API_KEY;

const initialState = {
  loading: true,
  movies: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({ type: 'SEARCH_MOVIES_REQUEST' });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, error, loading } = state;

  return (
    <div className='text-center'>
      <Header text='MOVIE SEARCHER' />
      <Search search={search} />
      <p className='intro text-xl'>Sharing a few of our favourite movies</p>

      <div
        className='movies
      flex flex-wrap flex-row justify-center xl:max-w-7xl xl:m-auto'>
        {loading && !error ? (
          <span>loading...</span>
        ) : error ? (
          <div className='error m-auto font-bold text-red-800'>{error}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}
