import Button from './components/ui/buttons/button/Button'
import 'react-toastify/dist/ReactToastify.css'

import { toast, ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mainLayout/MainLayout'
import AuthLayout from './layouts/authLayout/AuthLayout'
import SignUp from './pages/auth/signUp/SignUp'
import SignIn from './pages/auth/signIn/SignIn'
import CalendarDays from './pages/calendarPage/CalendarDays'
import StaffAdding from './pages/staffAdding/StaffAdding'

function App() {
    return (
        <div className={'bg-bgPrimary min-h-screen '}>
            <ToastContainer />
            <Routes>
                <Route path={'/auth/'} element={<AuthLayout />}>
                    <Route path={'sign-up'} element={<SignUp />} />
                    <Route path={'sign-in'} element={<SignIn />} />
                    
                </Route>
                <Route path={'/'} element={<MainLayout />}>
                <Route path={'calendar'} element={<CalendarDays />} />
                <Route path={'staff-add'} element={<StaffAdding />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
