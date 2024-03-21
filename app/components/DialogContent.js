import { useState } from 'react';
import CardContainer from './CardContainer';
import { Dialog, DialogContentText, DialogTitle, DialogContent } from '@mui/material';
import icoClose from '@/app/icons/close.svg';
import Image from 'next/image';

export default function DialogData({ data, setDialog }) {

  const handleCloseEvent = () => {
    setDialog(false);
  }

  return (
    <>
      <DialogTitle id="scroll-dialog-title" className='relative mr-10'>{data.Title}</DialogTitle>
      <DialogContent dividers={true} className='scr'>
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={-1}
        >
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </DialogContentText>
      </DialogContent>
      <div className='h-10 w-10 mt-2 mr-2 bg-slate-100 absolute top-0 right-0 rounded-full p-2 flex align-middle justify-center' onClick={() => handleCloseEvent()}>
        <Image src={icoClose} alt='close'></Image>
      </div>
    </>
  );
}
