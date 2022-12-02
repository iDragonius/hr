import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    pageLoading,
    setRole,
    setUserData,
    toggleLoading,
} from './store/slices/authSlice'
import Navigation from './components/navigation/Navigation'
import { fetchRoles } from './http/api/admin'
import Loader from './components/ui/Loader'
import { useNavigate } from 'react-router-dom'

function App() {
    const dispatch = useDispatch()
    const loading = useSelector(pageLoading)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(toggleLoading(true))
        dispatch(
            setUserData({
                name: localStorage.getItem('name'),
                token: localStorage.getItem('token'),
                email: localStorage.getItem('email'),
                id: localStorage.getItem('id'),
            })
        )
        if (
            localStorage.getItem('id') === 'null' ||
            !localStorage.getItem('id')
        ) {
            dispatch(toggleLoading(false))
            return
        }
        fetchRoles(localStorage.getItem('id'))
            .then((res) => {
                dispatch(setRole(res.data[0].name))
            })
            .catch((err) => {
                if (err) {
                    navigate('/auth/sign-in')
                }
            })
            .finally(() => dispatch(toggleLoading(false)))
    }, [])

    if (loading) {
        return <Loader loading={loading} />
    }
    return (
        <div className={'bg-bgPrimary min-h-screen '}>
            <ToastContainer />
            <Navigation />
        </div>
    )
}

export default App
