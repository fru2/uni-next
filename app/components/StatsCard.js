import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import iconStats from '../icons/equalizer.svg';
import iconPending from '../icons/equalizer.svg';
import CardContainer from './CardContainer';

export default function StatsCard({ icon, heading, subhead, route, id }) {

  const [products, setProducts] = useState({ count: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${route}`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <CardContainer element={
      <div className='flex flex-col justify-between h-full'>
        <div className='flex justify-between mb-4 items-center'>
          <span className='total-count font-semibold text-xl'>{products.count}</span>
          <div className='w-6 h-6 p-1 rounded-full bg-slate-100'>
            <Image src={icon} className='w-full' alt=''></Image>
          </div>
        </div>
        <div>
          <span className='block text-sm font-medium'>{heading}</span>
          <span className='text-gray-400 text-xs'>{subhead}</span>
        </div>
      </div>
    }>
    </CardContainer>

  )
}
