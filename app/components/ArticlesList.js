import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Title', headerName: 'Article title', flex: 1 },
  { field: 'Authors', headerName: 'Authors', flex: 1 },
  { field: 'Affiliations', headerName: 'Affiliations', flex: 1 },
]

export default function ArticlesList({ route }) {
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${route}`);
        if (response.ok) {
          const data = await response.json();
          const rows = data.map((item, index) => ({
            id: index + 1,
            Title: item.Title,
            Authors: Object.values(item.Authors).join(', '),
            Affiliations: item.Affiliations ? Object.values(item.Affiliations).join(', ') : '',
          }));
          setDataItems(rows);
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
    <div className="h-[32rem] w-full">
      <DataGrid
        rows={dataItems}
        columns={columns}
        pageSize={5}
        // checkboxSelection
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px'
        }}
      />
    </div>
  );
}
