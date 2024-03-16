import React from 'react'

export default function CardContainer({title, element}) {
  return (
    <div className='bg-white border-[1px] rounded-lg py-4 w-fit'>
        <span className='mb-6 block px-4 sm:px-6 lg:px-8 font-semibold'>{title}</span>
        {element}
    </div>
  )
}
