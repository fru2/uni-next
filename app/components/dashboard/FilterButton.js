
import Image from "next/image";
import CardContainer from "../CardContainer";
import { useState } from "react";
import iconExpand from '@/app/icons/expand_more.svg';
import iconCross from '@/app/icons/bxs-x-circle.svg';
import { Autocomplete, IconButton, Popover, TextField, Button } from "@mui/material";


const filterOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

export default function FilterButton({ filterType, icon }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const minWidth = filterType.length * 8;

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing popover
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  // Function to handle selecting/deselecting a filter option
  const handleFilterSelection = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  // Function to clear all selected filters
  const clearFilters = () => {
    setSelectedFilters([]);
    handlePopoverClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div onClick={handlePopoverOpen} className={`bg-white border-[1px] rounded-lg w-fit px-4 py-4 hover:bg-blue-50 hover:border-blue-500 cursor-pointer
            ${selectedFilters.length != 0 ? ' bg-light-blue border-blue-500' : ''}`}>
        <span className="">{filterType}</span>
        <Image className={`inline h-5 w-5 ml-2 hover:opacity-60 ${selectedFilters.length != 0 ? 'icon-blue' : ''}`} src={selectedFilters.length != 0 ? iconCross : iconExpand} alt="" onClick={clearFilters}></Image>
      </div>


      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}

        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className="min-w-48 flex gap-4">
          {/* <Image className="h-5 w-5" src={icon} alt=''></Image> */}
          <Autocomplete
            className="flex-1"
            multiple
            id="tags-standard"
            sx={{ p: 2 }}
            options={filterOptions}
            defaultValue={selectedFilters}
            onChange={(event, value) => setSelectedFilters(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder={`Select ${filterType.toLowerCase()}`}
              />
            )}
          />
        </div>
      </Popover>
    </>
  )
}
