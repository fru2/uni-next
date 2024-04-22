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

    const getStatusColor = () => {
        if (checkStatus() === 'Pending') return 'bg-yellow-100 text-yellow-800';
        else if (checkStatus() === 'Approved') return 'bg-green-100 text-green-800';
        else return 'bg-red-100 text-red-800';
    }

    return (
        <td className='flex justify-between w-full items-center'>
            <div>
                <span>{title}</span>
            </div>
            <Chip 
                icon={<Image className='h-4 w-4' src={pickStatusIcon()} alt=''></Image>} 
                label={checkStatus()} 
                size='small'
                className={`px-2 ${getStatusColor()} rounded-full`}
            ></Chip>
        </td>
    )
}
