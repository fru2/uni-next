import { Autocomplete, TextField } from '@mui/material';

export default function Search() {
    return (
        <Autocomplete
            className="flex-1 flex-grow w-max bg-white border-red"
            id="free-solo-demo"
            freeSolo
            // options={top100Films.map((option) => option.title)}
            options={['gg', 'abc']}
            renderInput={(params) => <TextField placeholder='Search' {...params}/>}
        />
    )
}

            

