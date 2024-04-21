import React from 'react';
import CardContainer from '@/app/components/CardContainer';

export default function page() {
  return (
    <>
        <h3>Submitted article</h3>
        <CardContainer disableHover='1'>
            <table>
                <tr>
                    {/* TODO: Fetch submitted articles form the database and run map from the fetched list*/}
                </tr>
            </table>
        </CardContainer>

        <h3>Add articles</h3>
        <CardContainer disableHover='1'>
            <div></div>
        </CardContainer>
    </>
  )
}
