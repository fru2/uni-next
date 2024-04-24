import React from 'react';
import CardContainer from '@/app/components/CardContainer';
import SubmittedArticleCard from '@/app/components/facultyPanel/SubmittedArticleCard';
import AddArticleForm from '@/app/components/facultyPanel/AddArticleForm';
import Nav from '@/app/components/Nav';
import ApproveArticle from '@/app/components/ApproveArticle';


export default function page() {
  return (
    <>
      <Nav disable></Nav>
      <main className='px-4 sm:px-6 lg:px-8 bg-gray-50 mt-[4.5rem]'>

        <h3 className="text-2xl pt-6 mb-4">Approve articles</h3>

        <CardContainer disableHover='1'>
          <table className='w-full status-table'>
            <tbody className=''>
              {/* TODO: Fetch submitted articles form the database and run map from the fetched list*/}
              <tr className='border-b flex py-4'>
                <ApproveArticle title='GG' status={true} ></ApproveArticle>
              </tr>
              <tr className='border-b flex py-4'>
                <ApproveArticle title='GG' status={false} ></ApproveArticle>
              </tr>
              <tr className='border-b flex py-4'>
                <ApproveArticle title='GG' status={null} ></ApproveArticle>
              </tr>
            </tbody>
          </table>
        </CardContainer>
      </main>
    </>
  )
}
