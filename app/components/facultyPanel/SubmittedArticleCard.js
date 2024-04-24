import React from 'react';
import Image from 'next/image';
import icoDone from '@/app/icons/download_done.svg';
import icoPending from '@/app/icons/pending_actions.svg';
import icoRejected from '@/app/icons/warning_amber.svg';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';

export default function SubmittedArticleCard({ title, status, remarks }) {

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
        if (status === null) return { backgroundColor: '#fff2c4', color: '#000000', padding: '0 0.25rem' }; // Yellow for pending
        else if (status === true) return { backgroundColor: '#c4ffc4', color: '#000', padding: '0 0.25rem' }; // Green for approved
        else return { backgroundColor: '#ffc4c4', color: '#000', padding: '0 0.25rem' }; // Red for rejected
    }

    return (
        <td className='flex justify-between w-full items-center'>
            <div>
                <span>{title}</span>
            </div>

            <div>
                {status === false ? <Button variant='text' size='small'>Edit</Button> : null}

                <Chip
                    icon={<Image className='h-4 w-4' src={pickStatusIcon()} alt=''></Image>}
                    label={checkStatus()}
                    size='small'
                    className={`px-2 rounded-full`}
                    style={getStatusColor()}
                ></Chip>
            </div>
        </td>
    )
}
