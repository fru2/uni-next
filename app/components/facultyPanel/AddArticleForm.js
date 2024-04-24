import React from 'react';
import InputField from './InputField';
import AuthorDetailsInput from './AuthorDetailsInput';

export default function AddArticleForm() {
  const formFields = [
    { label: 'Title', placeholder: 'Enter article title', isRequired: true },
    { label: 'Year', placeholder: 'Enter publication year', isRequired: false },
    { label: 'Source Title', placeholder: 'Enter source title', isRequired: false },
    { label: 'Volume', placeholder: 'Enter volume', isRequired: false },
    { label: 'Issue', placeholder: 'Enter issue', isRequired: true },
    { label: 'Page Start', placeholder: 'Enter page start', isRequired: false },
    { label: 'Page End', placeholder: 'Enter page end', isRequired: false },
    { label: 'DOI', placeholder: 'Enter DOI', isRequired: false },
    { label: 'Funding Details', placeholder: 'Enter funding details', isRequired: false },
    { label: 'References', placeholder: 'Enter references', isRequired: false },
    { label: 'Correspondence Address', placeholder: 'Enter correspondence address', isRequired: false },
    { label: 'Editors', placeholder: 'Enter editors', isRequired: false },
    { label: 'Sponsors', placeholder: 'Enter sponsors', isRequired: false },
    { label: 'Publisher', placeholder: 'Enter publisher', isRequired: false },
    { label: 'Conference Name', placeholder: 'Enter conference name', isRequired: false },
    { label: 'Conference Date', placeholder: 'Enter conference date', isRequired: false },
    { label: 'Conference Location', placeholder: 'Enter conference location', isRequired: false },
    { label: 'CODEN', placeholder: 'Enter CODEN', isRequired: false },
    { label: 'Language of Original Document', placeholder: 'Enter language of original document', isRequired: false },
    { label: 'Abbreviated Source Title', placeholder: 'Enter abbreviated source title', isRequired: false },
    { label: 'Document Type', placeholder: 'Enter document type', isRequired: false },
    { label: 'Publication Stage', placeholder: 'Enter publication stage', isRequired: false },
    { label: 'Open Access', placeholder: 'Enter open access', isRequired: false },
    { label: 'Source', placeholder: 'Enter source', isRequired: false },
    { label: 'EID', placeholder: 'Enter EID', isRequired: false },
  ];

  return (
    <form>
      <table className='w-full'>
        <tbody>
          {formFields.map((field, index) => (
            <>
              {index === 1 ? <AuthorDetailsInput label='Author details'></AuthorDetailsInput> : null}
              <InputField
                key={index}
                label={field.label}
                placeholder={field.placeholder}
                isRequired={field.isRequired}
              />
            </>
          ))}
        </tbody>
      </table>
    </form>
  );
}
