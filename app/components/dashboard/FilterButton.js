<<<<<<< HEAD
// FilterButton.js

=======
>>>>>>> c649031fe1c3065ea8a6cec240a11f249fada49c
import Image from "next/image";
import CardContainer from "../CardContainer";
import { useState } from "react";
import iconExpand from '@/app/icons/bxs-x-circle.svg';
import iconCross from '@/app/icons/expand_more.svg';
import { Autocomplete, IconButton, Popover, TextField } from "@mui/material";

const filterOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

export default function FilterButton() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

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
      <CardContainer style={'flex w-fit'}>
        <span className="" onClick={handlePopoverOpen}>Filter</span>
        <Image className={`inline`} src={open ? iconCross : iconExpand} alt=""></Image>
      </CardContainer>
      
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
        <Autocomplete
          multiple
          id="tags-standard"
          options={filterOptions}
          defaultValue={[]}
          onChange={(event, value) => setSelectedFilters(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Favorites"
            />
          )}
        />
        {selectedFilters.length > 0 && (
          <IconButton onClick={clearFilters}>
            <Image src={iconCross} alt=""></Image>
          </IconButton>
        )}
      </Popover>
    </>
  )
}
