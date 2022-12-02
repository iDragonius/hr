import React, { useEffect, useState } from 'react'
import TextInput from '../../../components/ui/inputs/textInput/TextInput'
import Button from '../../../components/ui/buttons/button/Button'
import { changePassword } from '../../../http/api/admin'
import { useSelector } from 'react-redux'
import { userData } from '../../../store/slices/adminSlice'
const ChangePassword = () => {
    const [password, setPaswword] = useState('')

    const [confirmPassword, setConfirmPaswword] = useState('')
    return (
        <div className={'flex flex-col gap-5 mt-5 w-max'}>
            <TextInput
                type={'password'}
                label={'New Password'}
                mode={'normal'}
                value={password}
                change={(e) => setPaswword(e.target.value)}
            />
            <TextInput
                type={'password'}
                label={'Confirm New Password'}
                mode={'normal'}
                value={confirmPassword}
                change={(e) => setConfirmPaswword(e.target.value)}
            />
            <Button
                label={'Change Password'}
                primary
                onClick={() =>
                    changePassword({
                        password,
                        confirmPassword,
                        id: localStorage.getItem('id'),
                    })
                }
            />
        </div>
    )
}

export default ChangePassword
