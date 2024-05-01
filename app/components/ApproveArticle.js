'use client'

import { Chip, IconButton, Popover, TextField, Button } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import icoCheck from '@/app/icons/check.svg';
import icoCross from '@/app/icons/close.svg';

export default function ApproveArticle({ data, user, title, status }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [remarks, setRemarks] = useState('');

  const handleRejectClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handleRejectConfirm = () => {
    // Perform action on reject with remarks
    console.log('Rejected with remarks:', remarks);
    handleClosePopover();
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'reject-popover' : undefined;

  return (
    <td className='flex justify-between w-full items-center'>
      <div className='flex-1 overflow-hidden text-ellipsis'>
        <span className=''>
          {title}
        </span>
      </div>

      <div className='flex gap-2'>
        <IconButton aria-label='approve' className='z-10'>
          <Image src={icoCheck} alt='' />
        </IconButton>
        <IconButton aria-label='reject' onClick={handleRejectClick}>
          <Image src={icoCross} alt='' />
        </IconButton>

        {/* Popover for remarks input */}
        <Popover
          id={popoverId}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{ padding: '16px', minWidth: '200px' }}>
            <TextField
              label='Remarks'
              fullWidth
              multiline
              rows={4}
              value={remarks}
              onChange={handleRemarksChange}
            />
            <div style={{ marginTop: '16px', textAlign: 'right' }}>
              <Button variant='text' onClick={handleRejectConfirm}>
                Reject
              </Button>
            </div>
          </div>
        </Popover>
      </div>
    </td>
  );
}
