'use client';

import { Autocomplete, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
// import { setSearch } from '../../store/reducers/filterReducer';

export default function Search() {
//   const searchInput = useSelector((state) => state.filter.search);
//   console.log(searchInput);

  return (
    <Autocomplete
      className="flex-1 flex-grow w-max bg-white border-red"
      id="free-solo-demo"
      freeSolo
      // options={top100Films.map((option) => option.title)}
      options={['gg', 'abc']}
      renderInput={(params) => <TextField placeholder="Search" {...params} />}
    />
  );
}
