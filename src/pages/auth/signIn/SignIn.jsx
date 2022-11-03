import React, { useState } from 'react'
import TextInput from '../../../components/ui/inputs/textInput/TextInput'
import Button from '../../../components/ui/buttons/button/Button'
import $api from '../../../http'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../../store/slices/authSlice'

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const signIn = async (e) => {
        e.preventDefault()
        await $api
            .post('/Auth/login', { ...data })
            .then((res) => {
                localStorage.setItem('token', res.data.accessToken.token)
                localStorage.setItem(
                    'name',
                    res.data?.loggedUser?.firstName +
                        ' ' +
                        res.data?.loggedUser?.lastName
                )
                localStorage.setItem('email', res.data?.loggedUser?.email)
                localStorage.setItem('id', res.data?.loggedUser?.id)
                toast.success('Successful!')

                dispatch(
                    setUserData({
                        name:
                            res.data?.loggedUser?.firstName +
                            ' ' +
                            res.data?.loggedUser?.lastName,
                        token: res.data?.accessToken.token,
                        email: res.data?.loggedUser?.email,
                        id: res.data?.loggedUser?.id,
                    })
                )
                navigate('/')
            })
            .catch((err) => {
                toast.error(err?.response?.data?.Detail)
            })
    }

    const change = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <div className={'flex flex-col'}>
            <h1 className={'text-[20px] opacity-70 font-medium mb-8'}>
                Dear user, please fill in all fields to log in
            </h1>
            <TextInput
                type={'email'}
                label={'Email'}
                className={'mb-5'}
                name={'email'}
                change={change}
                value={data.email}
            />
            <TextInput
                type={'password'}
                label={'Password'}
                name={'password'}
                className={'mb-5'}
                change={change}
                value={data.password}
            />

            <Button label={'Sign in'} primary onClick={signIn} />
        </div>
    )
}

export default SignIn
