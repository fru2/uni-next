import { TextField, Typography } from '@mui/material'
import React from 'react'

export default function InputField({ label, placeholder, isRequired }) {
  return (
    <tr className=''>
      <td className='min-w-14 py-2 pr-2'>
        {label}
        {isRequired && <Typography variant="body2" component="span" color="error">*</Typography>}
      </td>
      <td className='w-full py-2'>
        <TextField required={isRequired} className='w-full' placeholder={placeholder}></TextField>
      </td>
    </tr>
  )
}
