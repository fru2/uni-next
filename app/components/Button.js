import React from 'react';

function OutlineButton({link, text}) {
  return (
    <a href={link} className='border border-white px-3 py-2 w-max'><span>{text}</span></a>
  )
}

function SolidButton({link, text, style, click}) {
  return (
    <a href={link} onClick={click} className={`bg-deep-blue px-3 py-2 w-max rounded text-sm font-medium flex items-center justify-center hover:bg-deep-blue-hover ${style}`}><span className='text-white'>{text}</span></a>
  )
}

export {OutlineButton, SolidButton};