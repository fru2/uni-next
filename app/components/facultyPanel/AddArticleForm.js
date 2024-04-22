import React from 'react';
import TextField from '@mui/material/TextField';
import InputField from './InputField';

export default function AddArticleForm() {
  return (
    <table className='w-full'>
      <tbody>
        <InputField label='Title' placeholder='' isRequired='1'></InputField>

        <InputField label='Year' placeholder='' isRequired=''></InputField>

        <InputField label='Source title' placeholder='' isRequired=''></InputField>

        <InputField label='Volume' placeholder='' isRequired=''></InputField>

        <InputField label='Issue' placeholder='' isRequired=''></InputField>

        <InputField label='Page start' placeholder='' isRequired=''></InputField>

        <InputField label='Page end' placeholder='' isRequired=''></InputField>

        <InputField label='DOI' placeholder='' isRequired=''></InputField>

        <InputField label='Funding Details' placeholder='' isRequired=''></InputField>

        <InputField label='References' placeholder='' isRequired=''></InputField>

        <InputField label='Correspondence Address' placeholder='' isRequired=''></InputField>

        <InputField label='Editors' placeholder='' isRequired=''></InputField>

        <InputField label='Sponsors' placeholder='' isRequired=''></InputField>

        <InputField label='Publisher' placeholder='' isRequired=''></InputField>

        <InputField label='Conference name' placeholder='' isRequired=''></InputField>

        <InputField label='Conference date' placeholder='' isRequired=''></InputField>

        <InputField label='Conference location' placeholder='' isRequired=''></InputField>

        <InputField label='CODEN' placeholder='' isRequired=''></InputField>

        <InputField label='Language of Original Document' placeholder='' isRequired=''></InputField>

        <InputField label='Abbreviated Source Title' placeholder='' isRequired=''></InputField>

        <InputField label='Document Type' placeholder='' isRequired=''></InputField>

        <InputField label='Publication Stage' placeholder='' isRequired=''></InputField>

        <InputField label='Open Access' placeholder='' isRequired=''></InputField>

        <InputField label='Source' placeholder='' isRequired=''></InputField>

        <InputField label='EID' placeholder='' isRequired=''></InputField>
      </tbody>
    </table>
  )
}
