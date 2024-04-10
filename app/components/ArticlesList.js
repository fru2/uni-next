import { useState, useEffect, useRef } from "react";
import { DataGrid } from '@mui/x-data-grid';
import CustomTooltip from "./CustomTooltip";
import CardContainer from "./CardContainer";
import { Dialog } from "@mui/material";
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

            {dataItems ? dataItems.map((item, index) => (
              <CustomTooltip data={item} key={index}>

                <tr key={index} className="border-b text-sm hover:bg-blue-50 cursor-pointer" onClick={() => handleRowClick(item)}>
                  <td className="truncate max-w-[20rem] px-6 py-3">{item.Title}</td>
                  <td className="truncate max-w-[20rem] px-6 py-3">{Object.values(item.Authors).join(', ')}</td>
                  <td className="truncate max-w-[20rem] px-6 py-3">{item.Affiliations ? Object.values(item.Affiliations).join('; ') : ''}</td>
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
      </CardContainer>
    </>
  );
}
