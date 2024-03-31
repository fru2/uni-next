import React from 'react'


export default function CardContainer({title, children, disablePd, disableHover, style}) {
  return (
    <div className={`bg-white border-[1px] rounded-lg w-full 
      ${disablePd == null ? 'px-4 py-4' : ''}  
      ${disableHover == null ? "hover:bg-blue-50 hover:border-blue-500" : ''}
      ${style != null ? style : ''}`
    }>
        {title ? <span className='mb-6 block font-medium'>{title}</span> : null}
        {children}
    </div>
  )
}
