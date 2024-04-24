'use client';

import React, { useState } from 'react';
import { TextField, IconButton, Button } from '@mui/material';
import Image from 'next/image';
import icoAdd from '@/app/icons/add.svg';

export default function AuthorDetailsInput({ label }) {
  const [authors, setAuthors] = useState([
    { name: '', affiliation: '', scopusId: '', irins: '', wosId: '' }
  ]);

  const handleAddAuthor = () => {
    const newAuthor = { name: '', affiliation: '', scopusId: '', irins: '', wosId: '' };
    setAuthors([...authors, newAuthor]);
  };

  const handleChangeAuthor = (index, field, value) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index][field] = value;
    setAuthors(updatedAuthors);
  };

  return (
    <tr className=''>
      <td className='min-w-14 py-2 pr-2 align-top pt-6'>
        {label}
      </td>
      <td className='w-full py-2'>
        {authors.map((author, index) => (
          <div key={index} className='flex items-center gap-2 mb-4'>
            <span className='w-[10ch]'>{index + 1}:</span>
            <TextField
              className='w-full'
              placeholder='Enter name'
              value={author.name}
              onChange={(e) => handleChangeAuthor(index, 'name', e.target.value)}
            />
            <TextField
              className='w-full'
              placeholder='Enter Affiliation'
              value={author.affiliation}
              onChange={(e) => handleChangeAuthor(index, 'affiliation', e.target.value)}
            />
            <TextField
              className='w-full'
              placeholder='Enter Scopus ID'
              value={author.scopusId}
              onChange={(e) => handleChangeAuthor(index, 'scopusId', e.target.value)}
            />
            <TextField
              className='w-full'
              placeholder='Enter IRINS'
              value={author.irins}
              onChange={(e) => handleChangeAuthor(index, 'irins', e.target.value)}
            />
            <TextField
              className='w-full'
              placeholder='Enter IRINS'
              value={author.wosId}
              onChange={(e) => handleChangeAuthor(index, 'wosId', e.target.value)}
            />
          </div>
        ))}

        <Button onClick={handleAddAuthor} style={ {textTransform: 'none'} }>
          <span className='mr-2'>Add another author</span>
        </Button>

      </td>
    </tr>
  );
}
