import { Autocomplete, TextField } from '@mui/material';

export default function Search() {
    return (
        <Autocomplete
<<<<<<< HEAD
            className="flex-1 w-max bg-white"
=======
            className="flex-1 flex-grow w-max bg-white"
>>>>>>> c649031fe1c3065ea8a6cec240a11f249fada49c
            id="free-solo-demo"
            freeSolo
            // options={top100Films.map((option) => option.title)}
            options={['gg', 'abc']}
            renderInput={(params) => <TextField {...params}/>}
<<<<<<< HEAD
        />
    )
}
=======
            
        />
    )
}
>>>>>>> c649031fe1c3065ea8a6cec240a11f249fada49c
