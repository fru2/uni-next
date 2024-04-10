import React from 'react'

export default function DialogTableData({ title, data }) {
    return (
        <>
            <tr className="py-5 h-4">
                <td colSpan={2} className='w-full'>
                    <div className='w-full bg-slate-200 h-[0.5px]'></div>
                </td>
            </tr>
            <tr>
                <td className="align-top mr-4 block"><span>{title}</span></td>
                <td>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs border-[1px] rounded-md px-2 py-1">{data}</span>
                    </div>
                </td>
            </tr>
        </>
    )
}
