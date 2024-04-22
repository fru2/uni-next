import React from 'react';
import Image from 'next/image';
import icoDone from '@/app/icons/download_done.svg';
import icoPending from '@/app/icons/pending_actions.svg';
import icoRejected from '@/app/icons/warning_amber.svg';
import Chip from '@mui/material/Chip';

export default function SubmittedArticleCard({title, status, remarks}) {

    // const [status, setStatus] = useState(null);

    const checkStatus = () => {
        if (status === null) return 'Pending';
        else if (status === true) return 'Approved';
        else return 'Rejected';
    }

    const pickStatusIcon = () => {
        if (checkStatus() === 'Pending') return icoPending;
        else if (checkStatus() === 'Approved') return icoDone;
        else return icoRejected;
    }

    return (
        <td className='flex justify-between w-full items-center'>
            <div>
                <span>{title}</span>
            </div>
            <Chip 
                icon={<Image className='h-4 w-4' src={pickStatusIcon()} alt=''></Image>} 
                label={checkStatus()} 
                size='small'></Chip>
        </td>
    )
}
