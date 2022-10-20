import React, { useState } from 'react'
import TextInput from '../../../../components/ui/inputs/textInput/TextInput'
import Button from '../../../../components/ui/buttons/button/Button'

const User = () => {
    const [passStatus, setPassStatus] = useState(false)
    return (
        <div className={'flex flex-col gap-5 w-max'}>
            <div>
                <p className={'opacity-60'}>First Name</p>
                <TextInput type={'text'} label={'First Name'} />
            </div>

            <div>
                <p className={'opacity-60'}>Last Name</p>
                <TextInput type={'text'} label={'Last Name'} />
            </div>

            <div>
                <p className={'opacity-60'}>Email</p>
                <TextInput type={'email'} label={'Email'} />
            </div>
            <div>
                <p className={'opacity-60'}>Password</p>
                <div className={'flex gap-3 mb-2'}>
                    <TextInput
                        type={!passStatus ? 'password' : 'text'}
                        label={'Password'}
                        readOnly={!passStatus && true}
                    />

                    <Button
                        label={!passStatus ? 'Change Password' : 'Cancel'}
                        primary
                        onClick={() => setPassStatus((old) => !old)}
                    />
                </div>
                {passStatus && (
                    <TextInput type={'text'} label={'Confirm Password'} />
                )}
            </div>

            <Button primary label={'Save'} shadow={'medium'} />
        </div>
    )
}

export default User
