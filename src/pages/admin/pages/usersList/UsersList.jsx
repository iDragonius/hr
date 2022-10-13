import React, { useState } from 'react'
import { Grid, _ } from 'gridjs-react'
import 'gridjs/dist/theme/mermaid.css'
import Button from '../../../../components/ui/buttons/button/Button'
import Status from '../../../../components/ui/status/Status'
const UsersList = () => {
    const [data, setData] = useState([
        [
            'a',
            'b',
            'asda',
            _(<Status checked={true} />),
            _(<Button primary label={'Edit'} size={'small'} />),
        ],
        [
            'c',
            'd',
            'adsasd',
            _(<Status checked={false} />),

            _(<Button primary label={'Edit'} size={'small'} />),
        ],
    ])
    return (
        <Grid
            data={data}
            columns={['First Name', 'Last Name', 'Email', 'Status', 'Actions']}
            style={{
                td: {
                    'min-width': '80px',
                },
            }}
            pagination={{
                limit: 5,
            }}
        />
    )
}

export default UsersList
