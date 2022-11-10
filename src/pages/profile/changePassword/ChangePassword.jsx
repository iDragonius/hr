import React from 'react'
import TextInput from '../../../components/ui/inputs/textInput/TextInput'
import Button from '../../../components/ui/buttons/button/Button'
const ChangePassword = () => {
    return (
        <div className={'flex flex-col gap-5 mt-5 w-max'}>
            <TextInput
                type={'password'}
                label={'New Password'}
                mode={'normal'}
            />
            <TextInput
                type={'password'}
                label={'Confirm New Password'}
                mode={'normal'}
            />
            <Button label={'Change Password'} primary />
        </div>
    )
}

export default ChangePassword
