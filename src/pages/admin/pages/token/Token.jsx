import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Button from '../../../../components/ui/buttons/button/Button'
import { FiCopy } from 'react-icons/fi'
import { toast } from 'react-toastify'
import $api from '../../../../http'
import { customStyles } from '../../../../shared'
import { roles } from '../../../../config'
import { getRoles } from '../../../../http/api/admin'
const Token = () => {
    const [token, setToken] = useState('')
    const [generated, setGenerated] = useState(false)
    const [selectedRole, setSelectedRole] = useState(0)

    useEffect(() => {
        roles.filter((data) => {
            data.label = data.name
        })
        getRoles()
    }, [])

    const createToken = async () => {
        await $api
            .get(`/UserKeys/generatekey/?roleId=${selectedRole}`)
            .then((res) => {
                console.log(res)
                setToken(res.data.secretKey)
                setGenerated(true)
            })
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(token)
        toast.success('Token copied successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
    }

    return (
        <div className={'px-2'}>
            <h1 className={'text-xl mt-6 mb-3'}>Generate Sign Up Token</h1>
            <div className={'flex'}>
                <Select
                    options={roles}
                    styles={customStyles}
                    onChange={(data) => setSelectedRole(data.value)}
                    placeholder={'Select Role...'}
                />
                <Button
                    label={'Generate'}
                    primary
                    className={'ml-5'}
                    onClick={createToken}
                />
            </div>
            {generated && (
                <div className={'mt-6'}>
                    <p>Your token:</p>
                    <div className={'flex items-center h-10'}>
                        <p className={'bg-white py-2 px-5 w-max'}>{token}</p>
                        <div className={'w-1 h-10 bg-primary'} />
                        <div
                            className={'bg-white p-2 cursor-pointer'}
                            onClick={copyToClipboard}
                        >
                            <FiCopy size={'24px'} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Token
