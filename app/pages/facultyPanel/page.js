'use client'

import { useState, useEffect } from 'react';
import CardContainer from '@/app/components/CardContainer';
import SubmittedArticleCard from '@/app/components/facultyPanel/SubmittedArticleCard';
import AddArticleForm from '@/app/components/facultyPanel/AddArticleForm';
import Nav from '@/app/components/Nav';
import { Box, Button, Dialog } from '@mui/material';
import axios from 'axios';
import DialogData from '@/app/components/DialogContent';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



export default function Page() {

  const [dataList, setDataList] = useState(() => {
    const storedData = localStorage.getItem('dataList');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [showDialog, setShowDialog] = useState(false);
  const [dataItem, setDataItem] = useState(null);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    localStorage.setItem('dataList', JSON.stringify(dataList));
  }, [dataList]);


  const handleStatus = (value) => {
    if (value.isVerifiedByDean === true && value.isVerifiedByVc === true && value.isVerifiedByLib === true) {
      return true;
    }
    else if (value.isVerifiedByDean === false || value.isVerifiedByVc === false || value.isVerifiedByLib === false) {
      return false;
    }
    return null;
  }

  const handleRowClick = (item) => {
    setDataItem(item);
    setShowDialog(true);
  }

  return (
    <>
      <Nav></Nav>
      <main className='px-4 sm:px-6 lg:px-8 bg-gray-50 mt-[4.5rem]'>

        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Submitted article" value="1" />
              <Tab label="Add articles" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <div className="mt-[-1rem] mb-4"></div>
            <CardContainer disableHover='1'>
              <table className='w-full status-table'>
                <tbody className=''>
                  {dataList.length === 0
                    ? <tr><td>No data found</td></tr>
                    : dataList.map((value, index) => (
                      <tr className='border-b flex py-4 cursor-pointer' key={index} onClick={() => handleRowClick(value)}>
                        <SubmittedArticleCard title={value.Title} status={handleStatus(value)}></SubmittedArticleCard>
                      </tr>
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
          </TabPanel>


          <TabPanel value="2">
            <div className="mt-[-1rem] mb-4"></div>
            <CardContainer disableHover='1'>
              <AddArticleForm data={dataList} setData={setDataList}></AddArticleForm>
            </CardContainer>
          </TabPanel>
        </TabContext>




      </main>
    </>
  )
}