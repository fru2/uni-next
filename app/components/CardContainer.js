import React from 'react'

export default function CardContainer({title, element}) {
  return (
    <div className='bg-white border-[1px] rounded-lg px-4 py-4 w-full hover:border-blue-500 hover:bg-blue-50'>
        {title ? <span className='mb-6 block font-medium'>{title}</span> : null}
        {element}
    </div>
  )
}
