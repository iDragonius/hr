import React, { useState } from 'react'
import Button from '../../../components/ui/buttons/button/Button'
import { toast } from 'react-toastify'
import TextInput from '../../../components/ui/inputs/textInput/TextInput'
import $api from '../../../http'
import CommonModal from '../../../components/ui/modals/commonModal/CommonModal'
import { useNavigate } from 'react-router-dom'
import { setUserData } from '../../../store/slices/authSlice'
import { useDispatch } from 'react-redux'

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [token, setToken] = useState('')
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })
    const [modal, setModal] = useState(false)

    const change = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const signUpCheck = async (e) => {
        e.preventDefault()
        await $api
            .post('/auth/registercheck', { ...data })
            .then((res) => {
                if (res.data) {
                    setModal(true)
                }
            })
            .catch((err) => {
                console.log(err)
                toast.error('Smthng get wrong :(')
            })
    }
    const signUp = async (e) => {
        e.preventDefault()
        await $api
            .post('/auth/register', { ...data, code: token })
            .then((res) => {
                if (res.data) {
                    setModal(false)
                }
                localStorage.setItem('token', res.data.accessToken.token)
                localStorage.setItem(
                    'name',
                    res.data?.registeredUser?.firstName +
                        ' ' +
                        res.data?.registeredUser?.lastName
                )
                localStorage.setItem('email', res.data?.registeredUser?.email)
                dispatch(
                    setUserData({
                        name:
                            res.data?.registeredUser?.firstName +
                            ' ' +
                            res.data?.registeredUser?.lastName,
                        token: res.data?.accessToken.token,
                        email: res.data?.registeredUser?.email,
                    })
                )
                toast.success('Successful!')
                localStorage.setItem('token', res.data.accessToken.token)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                toast.error('Smthng get wrong :(')
            })
    }
    return (
        <div>
            <CommonModal open={modal} setOpen={setModal} canClose={false}>
                <h1 className={'text-[28px]'}>Enter secret key</h1>
                <div className={'flex flex-col'}>
                    <input
                        type={'text'}
                        placeholder={'XyZ681qwE'}
                        className={
                            'border-[1px] px-6 py-2 rounded-md placeholder-opacity-60 text-black outline-none text-opacity-60 placeholder-black text-lg my-4 hover:border-primary focus:border-primary outline-none transition-all ease-in-out'
                        }
                        onChange={(e) => setToken(e.target.value)}
                        value={token}
                        maxLength={9}
                    />
                    <Button label={'Continue'} primary onClick={signUp} />
                </div>
            </CommonModal>
            <div className={'flex flex-col'}>
                <h1 className={'text-[20px] opacity-70 font-medium mb-8'}>
                    Dear user, please fill in all fields to register
                </h1>
                <TextInput
                    type={'text'}
                    label={'First Name'}
                    className={'mb-5'}
                    mode={'normal'}
                    name={'firstName'}
                    change={change}
                    value={data.firstName}
                />

                <TextInput
                    type={'text'}
                    label={'Last Name'}
                    className={'mb-5'}
                    name={'lastName'}
                    mode={'normal'}
                    change={change}
                    value={data.lastName}
                />
                <TextInput
                    type={'email'}
                    label={'Email'}
                    className={'mb-5'}
                    name={'email'}
                    mode={'normal'}
                    // pattern={'^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'}
                    change={change}
                    value={data.email}
                />
                <TextInput
                    type={'password'}
                    label={'Password'}
                    className={'mb-5'}
                    name={'password'}
                    mode={'normal'}
                    change={change}
                    value={data.password}
                />
                <TextInput
                    type={'password'}
                    label={'Confirm Password'}
                    className={'mb-8'}
                    name={'passwordConfirm'}
                    mode={'normal'}
                    change={change}
                    value={data.passwordConfirm}
                />
                <Button label={'Sign up'} primary onClick={signUpCheck} />
            </div>
        </div>
    )
}

export default SignUp
