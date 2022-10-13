import React, { useState } from 'react'
import Select from 'react-select'
import Button from '../../../../components/ui/buttons/button/Button'
import { FiCopy } from 'react-icons/fi'
import { toast } from 'react-toastify'
const customStyles = {
    valueContainer: () => ({
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        width: '200px',
        marginLeft: '20px',
    }),
    control: (provided) => ({
        ...provided,
        border: '1px solid rgba(0, 0, 0, 0.1)',
    }),
    placeholder: () => ({
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        color: '#31373e',
    }),
    multiValue: () => ({
        display: 'flex',
        background: '#f1f4fa',
        alignItems: 'center',
        height: 'max-content',
        marginRight: '5px',
    }),
    multiValueLabel: () => ({
        fontSize: '15px',
        paddingLeft: '8px',
        paddingBlock: '5px',
        paddingRight: '3px',
        color: '#858c99',
    }),
}
const Token = () => {
    const [token, setToken] = useState('12893qduig127d12t97')
    const [generated, setGenerated] = useState(true)
    const values = [
        { label: 'Admin', value: 1 },
        { label: 'User', value: 3 },
        { label: 'HR', value: 2 },
    ]
    function copyToClipboard() {
        navigator.clipboard.writeText(token)

        // Alert the copied text
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
                    options={values}
                    styles={customStyles}
                    placeholder={'Select Role...'}
                />
                <Button label={'Generate'} primary className={'ml-5'} />
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
