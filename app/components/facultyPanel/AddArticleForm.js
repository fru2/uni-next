'use client'

import { useState, useEffect } from 'react';
import InputField from './InputField';
import AuthorDetailsInput from './AuthorDetailsInput';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import icoExpand from '@/app/icons/expand_more.svg';
import Image from 'next/image';

export default function AddArticleForm({ data, setData }) {

  const miscFields = [
    { dbKey: 'Issue', label: 'Issue', placeholder: 'Enter issue', isRequired: false },
    { dbKey: 'Page start', label: 'Page Start', placeholder: 'Enter page start', isRequired: false },
    { dbKey: 'Page end', label: 'Page End', placeholder: 'Enter page end', isRequired: false },
    { dbKey: 'DOI', label: 'DOI', placeholder: 'Enter DOI', isRequired: false },
    { dbKey: 'Correspondence Address', label: 'Correspondence Address', placeholder: 'Enter correspondence address', isRequired: false },
    { dbKey: 'Editors', label: 'Editors', placeholder: 'Enter editors', isRequired: false },
    { dbKey: 'Publisher', label: 'Publisher', placeholder: 'Enter publisher', isRequired: false },
    { dbKey: 'Source', label: 'Source', placeholder: 'Enter source', isRequired: false },
    { dbKey: 'EID', label: 'EID', placeholder: 'Enter EID', isRequired: false },
    { dbKey: 'CODEN', label: 'CODEN', placeholder: 'Enter CODEN', isRequired: false },
  ];

  const fundingFields = [
    { dbKey: 'Funding Details', label: 'Funding Details', placeholder: 'Enter funding details', isRequired: false },
    { dbKey: 'Sponsors', label: 'Sponsors', placeholder: 'Enter sponsors', isRequired: false },
  ];

  const conferenceFields = [
    { dbKey: 'Conference Name', label: 'Conference Name', placeholder: 'Enter conference name', isRequired: false },
    { dbKey: 'Conference Date', label: 'Conference Date', placeholder: 'Enter conference date', isRequired: false },
    { dbKey: 'Conference Location', label: 'Conference Location', placeholder: 'Enter conference location', isRequired: false },
  ]

  const articleDetails = [
    { dbKey: 'References', label: 'References', placeholder: 'Enter references', isRequired: false },
    { dbKey: 'Source title', label: 'Source Title', placeholder: 'Enter source title', isRequired: false },
    { dbKey: 'Language of Original Document', label: 'Language of Original Document', placeholder: 'Enter language of original document', isRequired: false },
    { dbKey: 'Abbreviated Source Title', label: 'Abbreviated Source Title', placeholder: 'Enter abbreviated source title', isRequired: false },
    { dbKey: 'Document Type', label: 'Document Type', placeholder: 'Enter document type', isRequired: false },
    { dbKey: 'Publication Stage', label: 'Publication Stage', placeholder: 'Enter publication stage', isRequired: false },
    { dbKey: 'Open Access', label: 'Open Access', placeholder: 'Enter open access', isRequired: false },
  ]

  const formFields = [
    { dbKey: 'Title', label: 'Title', placeholder: 'Enter article title', isRequired: true },
    { dbKey: 'Year', label: 'Year', placeholder: 'Enter publication year', isRequired: false },
    { dbKey: 'Volume', label: 'Volume', placeholder: 'Enter volume', isRequired: false },
  ];

  const [formData, setFormData] = useState({});

  const handleButtonClick = () => {
    const newDataObject = {
      ...formData,
      isVerifiedByDean: null,
      isVerifiedByVc: null,
      isVerifiedByLib: null
    };

    setData([...data, newDataObject]);

    setFormData({});
  }

  return (
    <form>
      <table className='w-full'>
        <tbody>
          {formFields.map((field, index) => (
            <>
              {index === 1 ? <AuthorDetailsInput label='Author details' key={index}></AuthorDetailsInput> : null}
              <InputField
                key={index}
                label={field.label}
                placeholder={field.placeholder}
                isRequired={field.isRequired}
                dbKey={field.dbKey}
                formData={formData}
                setFormData={setFormData}
              />
            </>
          ))}


        </tbody>
      </table>

      <Accordion style={{ width: '100%' }} className='acc mt-6 mb-6'>
        <AccordionSummary
          expandIcon={<Image src={icoExpand} alt=''></Image>}
        >
          <span>Article details fields</span>
        </AccordionSummary>
        <AccordionDetails>
          {articleDetails.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              placeholder={field.placeholder}
              isRequired={field.isRequired}
              dbKey={field.dbKey}
              formData={formData}
              setFormData={setFormData}
            ></InputField>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ width: '100%' }} className='acc mt-6 mb-6'>
        <AccordionSummary
          expandIcon={<Image src={icoExpand} alt=''></Image>}
        >
          <span>Conference fields</span>
        </AccordionSummary>
        <AccordionDetails>
          {conferenceFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              placeholder={field.placeholder}
              isRequired={field.isRequired}
              dbKey={field.dbKey}
              formData={formData}
              setFormData={setFormData}
            ></InputField>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ width: '100%' }} className='acc mt-6 mb-6'>
        <AccordionSummary
          expandIcon={<Image src={icoExpand} alt=''></Image>}
        >
          <span>Funding fields</span>
        </AccordionSummary>
        <AccordionDetails>
          {fundingFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              placeholder={field.placeholder}
              isRequired={field.isRequired}
              dbKey={field.dbKey}
              formData={formData}
              setFormData={setFormData}
            ></InputField>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ width: '100%' }} className='acc mt-6 mb-6'>
        <AccordionSummary
          expandIcon={<Image src={icoExpand} alt=''></Image>}
        >
          <span>Miscellaneous fields</span>
        </AccordionSummary>
        <AccordionDetails>
          {miscFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              placeholder={field.placeholder}
              isRequired={field.isRequired}
              dbKey={field.dbKey}
              formData={formData}
              setFormData={setFormData}
            ></InputField>
          ))}
        </AccordionDetails>
      </Accordion>

      <Button type='submit' variant='contained' style={{ backgroundColor: '#313c71' }} className='mt-4' onClick={() => handleButtonClick()}>Submit</Button>
    </form>
  );
}
