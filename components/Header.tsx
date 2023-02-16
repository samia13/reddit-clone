import React from "react";
import Image from "next/image";
import {
  Bars3Icon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  PlusIcon,
  GlobeAltIcon,
  SparklesIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <div className='sticky top-0 z-10 flex items-center px-4 py-2 bg-white shadow-sm'>
      <div className='relative w-8 h-8 flex-shrink-0'>
        <Image
          alt='Logo'
          style={{ objectFit: "contain" }}
          src='/images/logo.png'
          fill
        />
      </div>

      <div className='flex items-center mx-5 xl:min-w-[300px]'>
        <HomeIcon className='headerIcons' />
        <p className='flex-1 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='w-5 h-5 cursor-pointer' />
      </div>

      <form className='flex items-center bg-gray-100 px-2 py-1 mr-3 rounded-sm flex-1 border-gray-200'>
        <MagnifyingGlassIcon className='w-5 h-5 text-gray-500 mx-1' />
        <input
          className='outline-none bg-transparent xs:w-[100%] sm:w-[100%]'
          type='text'
          placeholder='Search Reddit...'
        />
      </form>
      <Bars3Icon className='headerIcons lg:hidden cursor-pointer flex-shrink-0' />
      <div className='hidden lg:flex items-center space-x-2 ml-2 text-gray-700'>
        <SparklesIcon className='headerIcons' />
        <GlobeAltIcon className='headerIcons' />
        <VideoCameraIcon className='headerIcons' />
        <hr className='h-6 border border-gray-200 hidden lg:inline' />
        <ChatBubbleLeftEllipsisIcon className='headerIcons' />
        <BellIcon className='headerIcons' />
        <PlusIcon className='headerIcons bg-slate-100' />
      </div>
      <div className='flex items-center ml-2 lg:border border-gray-300 rounded-sm'>
        <UserCircleIcon className='headerIcons cursor-pointer' />
        <p className='hidden lg:inline pr-1 text-gray-500'>Sign In</p>
      </div>
    </div>
  );
};

export default Header;
