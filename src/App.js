import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from './store/slices/authSlice'
import Navigation from './components/navigation/Navigation'
function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            setUserData({
                name: localStorage.getItem('name'),
                token: localStorage.getItem('token'),
                email: localStorage.getItem('email'),
            })
        )
    }, [])

    return (
        <div className={'bg-bgPrimary min-h-screen '}>
            <ToastContainer />
            <Navigation />
        </div>
    )
}

export default App
