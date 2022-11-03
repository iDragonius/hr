import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setRole, setUserData } from './store/slices/authSlice'
import Navigation from './components/navigation/Navigation'
import $api from './http/index'
function App() {
    const dispatch = useDispatch()
    const fetchRoles = async () => {
        await $api
            .get(`/Auth/getroles/?userId=${localStorage.getItem('id')}`)
            .then((res) => {
                dispatch(setRole(res.data[0].name))
            })
    }
    useEffect(() => {
        dispatch(
            setUserData({
                name: localStorage.getItem('name'),
                token: localStorage.getItem('token'),
                email: localStorage.getItem('email'),
                id: localStorage.getItem('id'),
            })
        )
        fetchRoles()
    }, [])

    return (
        <div className={'bg-bgPrimary min-h-screen '}>
            <ToastContainer />
            <Navigation />
        </div>
    )
}

export default App
