// TODO: Delete this component and merge it with FilterButton component

import Image from "next/image";
import { useState, useEffect } from "react";
import iconExpand from '@/app/icons/expand_more.svg';
import iconCross from '@/app/icons/bxs-x-circle.svg';
import { Autocomplete, IconButton, Popover, TextField } from "@mui/material";

export default function FilterYearButton({ filterType, route, getFilterOptions }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);

  const fetchOptions = async () => {
    try {
      const response = await fetch(`/api/${route}`);
      if (response.ok) {
        const data = await response.json();
        setFilterOptions(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error("Error fetching data", error);

    }
  };

  useEffect(() => {
    fetchOptions();
    getFilterOptions(selectedFilters);
  }, [selectedFilters]);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleFilterSelection = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    handlePopoverClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div onClick={handlePopoverOpen} className={`bg-white border-[1px] rounded-lg w-fit px-4 py-4 hover:bg-blue-50 hover:border-blue-500 cursor-pointer ${selectedFilters.length !== 0 ? ' bg-light-blue border-blue-500' : ''}`}>
        <span>{filterType}</span>
        <Image className={`inline h-5 w-5 ml-2 hover:opacity-60 ${selectedFilters.length !== 0 ? 'icon-blue' : ''}`} src={selectedFilters.length !== 0 ? iconCross : iconExpand} alt="" onClick={clearFilters} />
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
          <Autocomplete
            className="flex-1"
            multiple
            id="tags-standard"
            sx={{ p: 2 }}
            options={filterOptions.map(String)}
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
  );
}
