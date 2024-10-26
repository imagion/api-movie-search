'use client';

import { useEffect, useReducer } from 'react';
import Header from '@/components/Header';
import Movie from '@/components/Movie';
import Search from '@/components/Search';
import { Action, State } from '@/types/globals';

const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

const initialState: State = {
  loading: true,
  error: null,
  movies: [],
};

const reducer = (state: State, action: Action): State => {
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
        movies: action.payload || [],
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error || null,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default function Home() {
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

  const search = (searchValue: string) => {
    dispatch({ type: 'SEARCH_MOVIES_REQUEST' });

    fetch(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    )
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
          <span>Loading...</span>
        ) : error ? (
          <div className='error m-auto font-bold text-red-800'>{error}</div>
        ) : (
          movies?.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}
