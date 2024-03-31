import { Autocomplete, TextField } from '@mui/material';

export default function Search() {
    return (
        <Autocomplete
            className="flex-1 w-max bg-white"
            id="free-solo-demo"
            freeSolo
            // options={top100Films.map((option) => option.title)}
            options={['gg', 'abc']}
            renderInput={(params) => <TextField {...params}/>}
        />
    )
}