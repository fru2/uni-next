import React from 'react';
import Image from 'next/image';
import logoPesu from './images/PESLogo.jpg';

export default function Nav() {
  return (
    <nav className='w-screen flex justify-between'>
        <Image src={logoPesu} alt='PES Logo'/>
        <div className='bg-slate-900 text-white'><span>Login</span></div>
    </nav>
  )
}
