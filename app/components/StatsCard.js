import React from 'react';
import Image from 'next/image';
import iconStats from '../icons/equalizer.svg';
import iconPending from '../icons/equalizer.svg';
import CardContainer from './CardContainer';

export default function StatsCard({ icon, count, heading, subhead }) {
    return (
        <CardContainer element={
            <div className='flex flex-col justify-between h-full'>
                <div className='flex justify-between mb-4 items-center'>
                    <span className='total-count font-semibold text-xl'>{count}</span>
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
