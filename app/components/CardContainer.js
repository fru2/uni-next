import React from 'react'

export default function CardContainer({title, element}) {
  return (
    <div className='bg-white border-[1px] rounded-lg px-4 py-4 w-full'>
        {title ? <span className='mb-6 block font-semibold'>{title}</span> : null}
        {element}
    </div>
  )
}
