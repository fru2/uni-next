import { useState, useEffect, useRef } from "react";
import { DataGrid } from '@mui/x-data-grid';
import CustomTooltip from "./CustomTooltip";
import CardContainer from "./CardContainer";
import { Tooltip } from "@mui/material";

// const columns = [
//   { field: 'Title', headerName: 'Article title', flex: 1 },
//   { field: 'Authors', headerName: 'Authors', flex: 1 },
//   {
//     field: 'Affiliations',
//     headerName: 'Affiliations',
//     flex: 1,
//   }
// ]

export default function ArticlesList({ route }) {
  const [dataItems, setDataItems] = useState([]);
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${route}`);
        if (response.ok) {
          const data = await response.json();
          // const rows = data.map((item, index) => ({
          //   id: index + 1,
          //   Title: item.Title,
          //   Authors: Object.values(item.Authors).join('; '),
          //   Affiliations: item.Affiliations ? Object.values(item.Affiliations).join('; ') : '',
          // }));
          setDataItems(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    fetchData();
  }, [route]);


  return (
    // <div className="h-[32rem] w-full">
    //   <DataGrid
    //     rows={dataItems}
    //     columns={columns}
    //     pageSize={5}
    //     // checkboxSelection
    //     style={{
    //       backgroundColor: '#fff',
    //       borderRadius: '8px'
    //     }}
    //   />
    // </div>
    <CardContainer disablePd='1' disableHover='1'>
      <table className="w-full">
        <thead className="border-b-[1px]">
          <tr>
            <th className="w-1/3 text-start px-6 py-3">Title</th>
            <th className="w-1/3 text-start px-6 py-3">Authors</th>
            <th className="w-1/3 text-start px-6 py-3">Affiliations</th>
          </tr>
        </thead>

        <tbody>

          {dataItems ? dataItems.map((item, index) => (
            <CustomTooltip data={item} key={index}>

              <tr key={index} className="border-b text-sm hover:bg-blue-50">
                <td className="truncate max-w-[20rem] px-6 py-3">{item.Title}</td>
                <td className="truncate max-w-[20rem] px-6 py-3">{Object.values(item.Authors).join(', ')}</td>
                <td className="truncate max-w-[20rem] px-6 py-3">{item.Affiliations ? Object.values(item.Affiliations).join('; ') : ''}</td>
              </tr>

            </CustomTooltip>
          )) : null}

        </tbody>
      </table>
    </CardContainer>
  );
}
