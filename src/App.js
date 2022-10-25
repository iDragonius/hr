import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mainLayout/MainLayout'
import AuthLayout from './layouts/authLayout/AuthLayout'
import SignUp from './pages/auth/signUp/SignUp'
import SignIn from './pages/auth/signIn/SignIn'
import StaffAdding from './pages/staffAdding/StaffAdding'
import HR from './pages/hr/HR'
import NonWorkingDays from './pages/hr/nonWorkingDays/NonWorkingDays'
import Salary from './pages/salary/Salary'
import Vacation from './pages/vacation/Vacation'
import Tabel from './pages/tabel/Tabel'
import Permissions from './pages/permissions/Permissions'
import WorkingHours from './pages/workingHours/WorkingHours'
import Illness from './pages/illness/Illness'
import Dashboard from './pages/dashboard/Dashboard'
import Admin from './pages/admin/Admin'
import Awards from './pages/hr/awards/Awards'
import Duty from './pages/hr/duty/Duty'
import UsersList from './pages/admin/pages/usersList/UsersList'
import Token from './pages/admin/pages/token/Token'
import User from './pages/admin/pages/user/User'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from './store/slices/authSlice'
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
            <Routes>
                <Route path={'/auth/'} element={<AuthLayout />}>
                    <Route path={'sign-up'} element={<SignUp />} />
                    <Route path={'sign-in'} element={<SignIn />} />
                </Route>
                <Route path={'/'} element={<MainLayout />}>
                    <Route path={'staff-add'} element={<StaffAdding />} />
                    <Route path={'hr/'} element={<HR />}>
                        <Route
                            path={'non-working-days'}
                            element={<NonWorkingDays />}
                        />
                        <Route path={'duty'} element={<Duty />} />
                        <Route path={'awards'} element={<Awards />} />
                    </Route>
                    <Route path={'/'} element={<Dashboard />} />
                    <Route path={'salary'} element={<Salary />} />
                    <Route path={'vacation'} element={<Vacation />} />
                    <Route path={'tabel'} element={<Tabel />} />
                    <Route path={'permissions'} element={<Permissions />} />
                    <Route path={'working-hours'} element={<WorkingHours />} />
                    <Route path={'illness'} element={<Illness />} />
                    <Route path={'admin/'} element={<Admin />}>
                        <Route path={'users-list'} element={<UsersList />} />
                        <Route path={'users-list/:id'} element={<User />} />

                        <Route path={'token'} element={<Token />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
