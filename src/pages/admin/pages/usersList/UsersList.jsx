import React, { useState, memo, useEffect } from 'react'
import 'gridjs/dist/theme/mermaid.min.css'
import { Grid } from 'gridjs-react'
import { h } from 'gridjs'
import { useNavigate } from 'react-router-dom'
import $api from '../../../../http'
import { changeStatus } from '../../../../http/api/admin'
import { useDispatch } from 'react-redux'
import { setCurrentUserData } from '../../../../store/slices/adminSlice'
const UsersList = () => {
    const dispatch = useDispatch()
    const fetchUsers = async () => {
        await $api.get('/Auth/getallusers').then((res) => {
            const tempData = []
            res.data.map((user) => {
                tempData.push([
                    user.id,
                    user.firstName,
                    user.lastName,
                    user.email,
                    user.status,
                    user.status,
                ])
            })
            setData([...tempData])
            console.log(tempData)
        })
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    const [data, setData] = useState([])
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
                                onClick: async () => {
                                    const res = await changeStatus(
                                        row.cells[0].data,
                                        !row.cells[4].data
                                    )
                                    if (res.status === 200) {
                                        await fetchUsers()
                                    }
                                },
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
                                onClick: () => {
                                    navigate(
                                        `/admin/users-list/${row.cells[0].data}`
                                    )
                                    dispatch(
                                        setCurrentUserData({
                                            id: row.cells[0].data,
                                            firstName: row.cells[1].data,
                                            lastName: row.cells[2].data,
                                            email: row.cells[3].data,
                                            status: row.cells[4].data,
                                        })
                                    )
                                },
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
