import { useState } from 'react';
import CardContainer from './CardContainer';
import { Dialog, DialogContentText, DialogTitle, DialogContent } from '@mui/material';
import icoClose from '@/app/icons/close.svg';
import Image from 'next/image';
import { truncateComma } from '../utils/helperFunction';
import DialogTableData from './DialogTableData';

export default function DialogData({ data, setDialog, disableAuthor }) {

  const handleCloseEvent = () => {
    setDialog(false);
  }

  return (
    <>
      <DialogTitle id="scroll-dialog-title" className='relative mr-10'>{data.Title}</DialogTitle>
      <DialogContent dividers={true} className='scr'>
        <table className='w-full'>
          <tr className="h-2"></tr>
          <tr className="">
            <td className="align-top mr-4 block"><span>Authors</span></td>
            <td>
              <div className="flex flex-wrap gap-2">
                {disableAuthor ? null :
                  Object.values(data.Authors).map((item, index) => (
                    <span key={index} className="text-xs border-[1px] rounded-md px-2 py-1">{item}</span>
                  ))
                }
              </div>
            </td>
          </tr>

          <tr className="py-5 h-4">
            <td colSpan={2} className='w-full'>
              <div className='w-full bg-slate-200 h-[0.5px]'></div>
            </td>
          </tr>
          <tr>
            <td className="align-top mr-4 block"><span>Affiliations</span></td>
            <td>
              <div className="flex flex-wrap gap-2">
                {disableAuthor ? null :
                  Object.values(data.Affiliations).map((item, index) => (
                    <span key={index} className="text-xs border-[1px] rounded-md px-2 py-1">{truncateComma(item)}</span>
                  ))
                }
              </div>
            </td>
          </tr>

          <DialogTableData title="Year" data={data.Year}></DialogTableData>
          <DialogTableData title="Source title" data={data["Source title"]}></DialogTableData>
          <DialogTableData title="Volume" data={data.Volume}></DialogTableData>
          <DialogTableData title="Issue" data={data.Issue}></DialogTableData>
          <DialogTableData title="Page start" data={data["Page start"]}></DialogTableData>
          <DialogTableData title="Page end" data={data["Page end"]}></DialogTableData>
          <DialogTableData title="DOI" data={data.DOI}></DialogTableData>
          <DialogTableData title="Funding Details" data={data["Funding Details"]}></DialogTableData>
          <DialogTableData title="Funding Text 1" data={data["Funding Text 1"]}></DialogTableData>
          <DialogTableData title="Funding Text 2" data={data["Funding Text 2"]}></DialogTableData>
          <DialogTableData title="References" data={data.References}></DialogTableData>
          <DialogTableData title="Correspondence Address" data={data["Correspondence Address"]}></DialogTableData>
          <DialogTableData title="Editors" data={data["Editors"]}></DialogTableData>
          <DialogTableData title="Sponsors" data={data["Sponsors"]}></DialogTableData>
          <DialogTableData title="Abbreviated Source Title" data={data["Publisher"]}></DialogTableData>

          <DialogTableData title="Conference name" data={data["Conference name"]}></DialogTableData>
          <DialogTableData title="Conference date" data={data["Conference date"]}></DialogTableData>
          <DialogTableData title="Conference location" data={data["Conference location"]}></DialogTableData>
          <DialogTableData title="CODEN" data={data["CODEN"]}></DialogTableData>
          <DialogTableData title="PubMed ID" data={data["PubMed ID"]}></DialogTableData>
          <DialogTableData title="Language of Original Document" data={data["Language of Original Document"]}></DialogTableData>
          <DialogTableData title="Abbreviated Source Title" data={data["Abbreviated Source Title"]}></DialogTableData>

          <DialogTableData title="Document Type" data={data["Document Type"]}></DialogTableData>
          <DialogTableData title="Publication Stage" data={data["Publication Stage"]}></DialogTableData>
          <DialogTableData title="Open Access" data={data["Open Access"]}></DialogTableData>
          <DialogTableData title="Source" data={data["Source"]}></DialogTableData>
          <DialogTableData title="EID" data={data["EID"]}></DialogTableData>



          <tr className="h-2"></tr>
        </table>
      </DialogContent>
      <div className='h-10 w-10 mt-2 mr-2 bg-slate-100 absolute top-0 right-0 rounded-full p-2 flex align-middle justify-center cursor-pointer border-[1px] hover:bg-blue-50 hover:border-blue-500' onClick={() => handleCloseEvent()}>
        <Image src={icoClose} alt='close'></Image>
      </div>
    </>
  );
}
