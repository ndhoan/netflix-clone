import Image from 'next/image';
import NavbarItem from './NavbarItem';
import { BsChevronDown } from 'react-icons/bs';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <div className='w-full fixed z-40'>
      <div className='px-4 md:px-16 py-6 flex items-center transition bg-zinc-900 bg-opacity-90'>
        <Image
          className='h-4 lg:h-7'
          src={'/images/logo.png'}
          alt='Logo'
          width={100}
          height={100}
        />
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavbarItem label='Home' />
          <NavbarItem label='Series' />
          <NavbarItem label='Films' />
          <NavbarItem label='New & Popular' />
          <NavbarItem label='My List' />
          <NavbarItem label='Browse by languages' />
        </div>
        <div className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown className='text-white transition' />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
