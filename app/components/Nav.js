import React from 'react';
import Image from 'next/image';
import logoPesu from '../images/PESlogo.jpg';
import { SolidButton } from './Button';
import Link from 'next/link';

export default function Nav({disable}) {
  return (
    <nav className='w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-1 fixed top-0 border-b-[1px] max-h-[4.5rem] bg-white z-50'>
      {/* TODO: Discard changes before commiting */}
        {/* <Link href='/' className='h-16'><Image src={logoPesu} alt='PES Logo' className='h-full w-full' priority/></Link> */}
        {disable ? <div></div> : <SolidButton text='Login' link='/pages/login'></SolidButton>}
    </nav>
  )
}
