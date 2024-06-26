import { useState, useEffect, useRef } from "react";
import { DataGrid } from '@mui/x-data-grid';
import CustomTooltip from "./CustomTooltip";
import CardContainer from "./CardContainer";
import { Pagination, Dialog } from "@mui/material";
import DialogData from "./DialogContent";
import FilterButton from "./dashboard/FilterButton";
import Search from "./dashboard/Search";
import icoUser from "@/app/icons/person.svg";
import icoFund from "@/app/icons/attach_money.svg";
import icoEdu from "@/app/icons/history_edu.svg";
import icoSort from "@/app/icons/sort.svg";
import icoCal from "@/app/icons/calendar_today.svg";


export default function ArticlesList({ route }) {
  const [dataItems, setDataItems] = useState([]);
  const cardRef = useRef(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dataItem, setDataItem] = useState(null);

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${route}`);
        if (response.ok) {
          const data = await response.json();
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

  const handleRowClick = (item) => {
    setDataItem(item);
    setShowDialog(true);
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  // const handleItemsPerPageChange = (event) => {
  //   setItemsPerPage(parseInt(event.target.value, 10));
  //   setPage(1); // Reset to first page when changing items per page
  // };

  const displayedItems = dataItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <>
      <div className="flex gap-2 mb-4">
        <FilterButton filterType='Authors' icon={icoUser}></FilterButton>
        <FilterButton filterType='Affiliations' icon={icoEdu}></FilterButton>
        <FilterButton filterType='Year' icon={icoCal}></FilterButton>
        <FilterButton filterType='Funding' icon={icoFund}></FilterButton>
        <FilterButton filterType='Sort' icon={icoSort}></FilterButton>
        <Search></Search>
      </div>
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

            {displayedItems ? displayedItems.map((item, index) => (
              <CustomTooltip data={item} key={index}>

                <tr key={index} className="border-b text-sm hover:bg-blue-50 cursor-pointer" onClick={() => handleRowClick(item)}>
                  <td className="truncate max-w-[20rem] px-6 py-3">{item.Title}</td>
                  <td className="truncate max-w-[20rem] px-6 py-3">{Object.values(item.Authors[0]).join(', ')}</td>
                  <td className="truncate max-w-[20rem] px-6 py-3">{item.Affiliations[0] ? Object.values(item.Affiliations[0]).join('; ') : ''}</td>
                </tr>

                {/* {showDialog ? <Dialog></Dialog> : null} */}

              </CustomTooltip>
            )) : null}

          </tbody>

          <Dialog
            open={showDialog}
            onClose={() => setShowDialog(false)}
            scroll="paper"
            maxWidth="lg"
          >
            <DialogData data={dataItem} setDialog={setShowDialog}></DialogData>
          </Dialog>
        </table>

        <div className="flex justify-center mt-6 mb-4">
          <Pagination
            count={Math.ceil(dataItems.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
          />
        </div>

      </CardContainer>
    </>
  );
}
