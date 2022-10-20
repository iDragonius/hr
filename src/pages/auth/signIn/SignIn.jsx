import React from 'react'
import TextInput from '../../../components/ui/inputs/textInput/TextInput'
import Button from '../../../components/ui/buttons/button/Button'

const SignIn = () => {
    return (
        <div className={'flex flex-col'}>
            <h1 className={'text-[20px] opacity-70 font-medium mb-8'}>
                Dear user, please fill in all fields to log in
            </h1>
            <TextInput type={'email'} label={'Email'} className={'mb-5'} />
            <TextInput
                type={'password'}
                label={'Password'}
                className={'mb-5'}
            />

            <Button label={'Sign in'} primary />
        </div>
    )
}

export default SignIn
