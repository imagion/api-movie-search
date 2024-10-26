import { MovieProps } from '@/types/globals';

const defaultPlaceholderImage = 'https://loremflickr.com/300/445/animal';

export default function Movie({ movie }: MovieProps) {
  const poster =
    movie.Poster === 'N/A' ? defaultPlaceholderImage : movie.Poster;

  return (
    <div
      className='movie
      px-6 py-4 flex flex-col items-center justify-start
      sm:max-w-2/4 sm:basis-2/4
      md:max-w-1/3 md:basis-1/3
      lg:max-w-1/4 lg:basis-1/4'>
      <div className='sm:aspect-poster sm:overflow-hidden'>
        <img src={poster} alt={movie.Title} />
      </div>
      <h2 className='font-bold text-lg'>{movie.Title}</h2>
      <p>({movie.Year})</p>
    </div>
  );
}
