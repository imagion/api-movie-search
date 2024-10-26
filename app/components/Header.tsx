import { HeaderProps } from '@/types/globals';

export default function Header({ text }: HeaderProps) {
  return (
    <header
      className='header
      bg-gray-600 h-16 flex flex-col items-center justify-center
      text-xl text-white p-5 cursor-pointer'>
      <h1 className='text-3xl sm:text-4xl uppercase m-0'>{text}</h1>
    </header>
  );
}
