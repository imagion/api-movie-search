import { SearchProps } from '@/types/globals';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Search({ search }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e: FormEvent) => {
    e.preventDefault();
    search(searchValue);
    setSearchValue('');
  };

  return (
    <form className='search flex justify-center p-1 mt-3'>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type='text'
        className='w-2/5 px-4 py-1 min-w-10
        border-solid border-2 border-gray-600'
      />
      <button
        onClick={callSearchFunction}
        className='p-1 bg-transparent text-black uppercase w-20 ml-1
        border-solid border-2 border-black cursor-pointer
        hover:bg-gray-600 hover:text-gray-50'>
        Search
      </button>
    </form>
  );
}
