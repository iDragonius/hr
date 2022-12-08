import React, { useState } from 'react'

import dayjs from 'dayjs'

import { addOvertime } from '../../http/api/overtimes'
import Button from '../../components/ui/buttons/button/Button'

const WorkingHoursAdd = () => {
    let today = new Date()

    const [currDate, setCurrDate] = useState(new Date())
    const [hours, setHours] = useState(null)

    const add = async () => {
        await addOvertime({
            employeeId: +localStorage.getItem('id'),
            date: currDate,
            hourCount: +hours,
        })
    }
    return (
        <div>
            <h1 className={'text-2xl font-bold mb-4'}>Add Overtime</h1>
            <div className={'flex flex-col w-min'}>
                <div className={'flex flex-col mb-3'}>
                    <label className={'text-gray-700'}>Date</label>
                    <input
                        value={currDate}
                        onChange={(e) => setCurrDate(e.target.value)}
                        type="date"
                        className={
                            'py-3 px-3  border border-primary rounded-md w-min outline-none'
                        }
                    />
                </div>
                <div className={'flex flex-col mb-3'}>
                    <label className={'text-gray-700'}>Hours</label>
                    <input
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        type="text"
                        placeholder={'1'}
                        className={
                            'w-[169px] py-3 px-3 border border-primary rounded-md w-min outline-none'
                        }
                    />
                </div>
                <Button label={'Add'} primary onClick={add} />
            </div>
        </div>
    )
}

export default WorkingHoursAdd
