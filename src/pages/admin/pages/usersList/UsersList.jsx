import React, { useState, memo } from 'react'
import 'gridjs/dist/theme/mermaid.min.css'
import { Grid, _ } from 'gridjs-react'
import { h } from 'gridjs'
import Status from '../../../../components/ui/status/Status'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/ui/buttons/button/Button'
const UsersList = () => {
    const [data, setData] = useState([
        ['1', 'a', 'b', 'asda', true, true],
        ['2', 'c', 'd', 'asdasd', false, false],
        ['3', 'a', 'b', 'asdasd', true, true],
        ['4', 'c', 'd', 'qweqwe', true, true],
    ])
    const navigate = useNavigate()
    return (
        <Grid
            resizable={true}
            sort={true}
            search={true}
            data={data}
            width={'max-content'}
            columns={[
                'ID',
                'First Name',
                'Last Name',
                'Email',

                {
                    name: 'Status',
                    formatter: (cell, row) => {
                        return h(
                            'p',
                            {
                                className: cell
                                    ? 'py-2  px-4 border rounded-md text-white bg-green-500'
                                    : 'py-2  px-4 border rounded-md text-white bg-red-500',
                            },
                            cell ? 'Active' : 'Inactive'
                        )
                    },
                },
                {
                    name: 'Ban',
                    formatter: (cell, row) => {
                        return h(
                            'button',
                            {
                                className: cell
                                    ? 'py-2  px-4 border rounded-md text-white bg-primary'
                                    : ' border-[1px]  py-2  px-4 text-primary rounded-md font-bold',
                                onClick: () =>
                                    alert(
                                        `Editing "${row.cells[0].data}" "${row.cells[1].data}"`
                                    ),
                            },
                            cell ? 'Block' : 'Unblock'
                        )
                    },
                },
                {
                    name: 'Actions',
                    formatter: (cell, row) => {
                        return h(
                            'button',
                            {
                                className:
                                    'py-2  px-4 border rounded-md text-white bg-primary',
                                onClick: () =>
                                    navigate(
                                        `/admin/users-list/${row.cells[0].data}`
                                    ),
                            },
                            'Edit'
                        )
                    },
                },
            ]}
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

export default memo(UsersList)
