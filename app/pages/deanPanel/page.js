'use client'

import React, { useState } from 'react';
import CardContainer from '@/app/components/CardContainer';
import SubmittedArticleCard from '@/app/components/facultyPanel/SubmittedArticleCard';
import AddArticleForm from '@/app/components/facultyPanel/AddArticleForm';
import Nav from '@/app/components/Nav';
import ApproveArticle from '@/app/components/ApproveArticle';
import { Dialog } from '@mui/material';
import DialogData from '@/app/components/DialogContent';


export default function Page() {

  const [dataList, setDataList] = useState(() => {
    const storedData = localStorage.getItem('dataList');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [showDialog, setShowDialog] = useState(false);
  const [dataItem, setDataItem] = useState(null);

  const handleRowClick = (item) => {
    setDataItem(item);
    setShowDialog(true);
  }

  return (
    <>
      <Nav disable></Nav>
      <main className='px-4 sm:px-6 lg:px-8 bg-gray-50 mt-[4.5rem]'>

        <h3 className="text-2xl pt-6 mb-4">Approve articles</h3>

        <CardContainer disableHover='1'>
          <table className='w-full status-table'>
            <tbody className=''>
              {dataList.length === 0
                ? <tr><td>No data found</td></tr>
                : dataList.map((value, index) => (
                  value.isVerifiedByDean == null
                    ? <tr className='border-b flex py-4 cursor-pointer' key={index} onClick={() => handleRowClick(value)}>
                      <ApproveArticle title={value.Title} status={value.isVerifiedByDean} ></ApproveArticle>
                    </tr>
                    : null
                ))
              }
            </tbody>
            <Dialog
              open={showDialog}
              onClose={() => setShowDialog(false)}
              scroll="paper"
              maxWidth="lg"
            >
              <DialogData data={dataItem} setDialog={setShowDialog} disableAuthor></DialogData>
            </Dialog>
          </table>
        </CardContainer>
      </main>
    </>
  )
}
