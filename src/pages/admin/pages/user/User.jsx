import React, { useEffect, useState } from 'react'
import TextInput from '../../../../components/ui/inputs/textInput/TextInput'
import Button from '../../../../components/ui/buttons/button/Button'
import { useSelector } from 'react-redux'
import { userData } from '../../../../store/slices/adminSlice'
import { editUser, changePassword } from '../../../../http/api/admin'

const User = () => {
    const [passStatus, setPassStatus] = useState(false)

    const data = useSelector(userData)
    const [UData, setUData] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        status: false,
        password: '',
        confirmPassword: '',
    })

    useEffect(() => {
        setUData({
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            status: data.status,
        })
    }, [])
    const change = (e) => {
        console.log(e.target)
        setUData({ ...UData, [e.target.name]: e.target.value })
    }

    return (
        <div className={'flex flex-col gap-5 w-max'}>
            <div>
                <p className={'opacity-60'}>First Name</p>
                <TextInput
                    name={'firstName'}
                    type={'text'}
                    label={'First Name'}
                    value={UData.firstName}
                    change={change}
                />
            </div>

            <div>
                <p className={'opacity-60'}>Last Name</p>
                <TextInput
                    name={'lastName'}
                    type={'text'}
                    label={'Last Name'}
                    value={UData.lastName}
                    change={change}
                />
            </div>

            <div>
                <p className={'opacity-60'}>Email</p>
                <TextInput
                    type={'email'}
                    label={'Email'}
                    value={UData.email}
                    name={'email'}
                    change={change}
                />
            </div>
            <div>
                <p className={'opacity-60'}>Password</p>
                <div className={'flex gap-3 mb-2'}>
                    <TextInput
                        type={'password'}
                        label={'Password'}
                        name={'password'}
                        change={change}
                        readOnly={!passStatus && true}
                        value={UData.password}
                    />

                    <Button
                        label={!passStatus ? 'Change Password' : 'Cancel'}
                        primary
                        onClick={() => setPassStatus((old) => !old)}
                    />
                </div>
                {passStatus && (
                    <div className={'flex gap-3'}>
                        <TextInput
                            type={'password'}
                            name={'confirmPassword'}
                            change={change}
                            label={'Confirm Password'}
                            value={UData.confirmPassword}
                        />
                        <Button
                            label={'Save'}
                            primary
                            onClick={() => changePassword(UData)}
                        />
                    </div>
                )}
            </div>

            <Button
                primary
                label={'Save'}
                shadow={'medium'}
                onClick={() => editUser(UData)}
            />
        </div>
    )
}

export default User
