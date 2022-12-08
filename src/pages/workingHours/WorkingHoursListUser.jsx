import React, { useState } from 'react'
import { Grid } from 'gridjs-react'

const WorkingHoursListUser = () => {
    const [data, setData] = useState([])
    return (
        <Grid
            resizable={true}
            sort={true}
            data={data}
            search={true}
            width={'max-content'}
            columns={['ID', 'Date', 'Hours']}
            style={{
                td: {
                    'min-width': '100px',
                },
            }}
            pagination={{
                limit: 5,
            }}
        />
    )
}

export default WorkingHoursListUser
