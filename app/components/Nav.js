import React from 'react';
import Image from 'next/image';
import logoPesu from '../images/PESlogo.jpg';
import { SolidButton } from './Button';

export default function Nav() {
  return (
    <nav className='w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-1 relative border-b-[1px]'>
        <div className='h-16'><Image src={logoPesu} alt='PES Logo' className='h-full w-full'/></div>
        <SolidButton text='Login' link='#'></SolidButton>
    </nav>
  )
}
