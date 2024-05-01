import { useState, useEffect, useRef } from "react";
import { DataGrid } from '@mui/x-data-grid';
import CustomTooltip from "./CustomTooltip";
import CardContainer from "./CardContainer";
import { Pagination, Dialog } from "@mui/material";
import DialogData from "./DialogContent";
import FilterButton from "./dashboard/FilterButton";
import Search from "./dashboard/Search";
import FilterYearButton from "./dashboard/FilterYearButton";


export default function ArticlesList({ route }) {

  const [selectedAuthor, setSelectedAuthor] = useState([]);
  const [selectedAffiliation, setSelectedAffiliation] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [dataItems, setDataItems] = useState([]);
  const cardRef = useRef(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dataItem, setDataItem] = useState(null);

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorsUrl = selectedAuthor.map(author => `authors=${encodeURIComponent(author)}`).join('&');
        const affiliationsUrl = selectedAffiliation.map(affiliation => `affiliations=${encodeURIComponent(affiliation)}`).join('&');
        const yearsUrl = selectedYear.map(year => `years=${year}`).join('&');
        const searchUrl = `search=${encodeURIComponent(searchQuery)}`;
        

        const response = await fetch(`/api/${route}?${authorsUrl}&${affiliationsUrl}&${yearsUrl}&${searchUrl}`);

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
  }, [selectedAuthor, selectedAffiliation, selectedYear, searchQuery]);


  // useEffect(() => {
  //   console.log(selectedAuthor);
  // }, [selectedAuthor]);

  const handleRowClick = (item) => {
    setDataItem(item);
    setShowDialog(true);
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const displayedItems = dataItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );



  return (
    <>
      <div className="flex gap-2 mb-4">
        <FilterButton route='filter-author-list' getFilterOptions={setSelectedAuthor} filterType='Authors'></FilterButton>
        <FilterButton route='filter-affiliation-list' getFilterOptions={setSelectedAffiliation} filterType='Affiliations'></FilterButton>
        <FilterYearButton route='filter-year-list' getFilterOptions={setSelectedYear} filterType='Year'></FilterYearButton>
        {/* <FilterButton getFilterOptions={setSelectedAuthor} filterType='Funding'></FilterButton> */}
        {/* <FilterButton setFilterOptions={setSelectedAuthor} filterType='Sort' icon={icoSort}></FilterButton> */}
        <Search getSearchQuery={setSearchQuery}></Search>
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
