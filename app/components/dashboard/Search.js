import { Autocomplete, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Search({ getSearchQuery }) {

    const [search, setSearch] = useState('');

    console.log(search);

    useEffect(() => {
        getSearchQuery(search);
    }, [search])

    return (
        <TextField
            placeholder='Search'
            className="flex-1 flex-grow w-max bg-white border-red"
            onChange={(e) => setSearch(e.target.value)} />
    )
}



