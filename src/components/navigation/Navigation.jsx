import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../../layouts/authLayout/AuthLayout'
import SignUp from '../../pages/auth/signUp/SignUp'
import SignIn from '../../pages/auth/signIn/SignIn'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import StaffAdding from '../../pages/staffAdding/StaffAdding'
import HR from '../../pages/hr/HR'
import NonWorkingDays from '../../pages/hr/nonWorkingDays/NonWorkingDays'
import Duty from '../../pages/hr/duty/Duty'
import Awards from '../../pages/hr/awards/Awards'
import Dashboard from '../../pages/dashboard/Dashboard'
import Salary from '../../pages/salary/Salary'
import Vacation from '../../pages/vacation/Vacation'
import Tabel from '../../pages/tabel/Tabel'
import Permissions from '../../pages/permissions/Permissions'
import WorkingHours from '../../pages/workingHours/WorkingHours'
import Illness from '../../pages/illness/Illness'
import Admin from '../../pages/admin/Admin'
import UsersList from '../../pages/admin/pages/usersList/UsersList'
import User from '../../pages/admin/pages/user/User'
import Token from '../../pages/admin/pages/token/Token'
import Profile from '../../pages/profile/Profile'
import RoleWrapper from '../../features/roles/RoleWrapper'
import ChangePassword from '../../pages/profile/changePassword/ChangePassword'
import MainInfo from '../../pages/profile/mainInfo/MainInfo'
import AuthRequire from '../../features/auth/AuthRequire'
import Staff from '../../pages/staffAdding/Staff'
import StaffList from '../../pages/staffAdding/StaffList'

const Navigation = () => {
    return (
        <Routes>
            <Route path={'/auth/'} element={<AuthLayout />}>
                <Route path={'sign-up'} element={<SignUp />} />
                <Route path={'sign-in'} element={<SignIn />} />
            </Route>
            <Route element={<AuthRequire />}>
                <Route path={'/'} element={<MainLayout />}>
                    <Route path={'/'} element={<Dashboard />} />
                    <Route path={'profile/'} element={<Profile />}>
                        <Route path={'main-info'} element={<MainInfo />} />
                        <Route
                            path={'change-password'}
                            element={<ChangePassword />}
                        />
                    </Route>

                    <Route element={<RoleWrapper routeRole={'3'} />}>
                        <Route element={<RoleWrapper routeRole={'2'} />}>
                            <Route path={'hr/'} element={<HR />}>
                                <Route
                                    path={'non-working-days'}
                                    element={<NonWorkingDays />}
                                />
                                <Route path={'duty'} element={<Duty />} />
                                <Route path={'awards'} element={<Awards />} />
                            </Route>
                            <Route path={'staff/'} element={<Staff />}>
                                <Route path={'add'} element={<StaffAdding />} />
                                <Route path={'list'} element={<StaffList />} />
                            </Route>

                            <Route element={<RoleWrapper routeRole={'1'} />}>
                                <Route path={'admin/'} element={<Admin />}>
                                    <Route
                                        path={'users-list'}
                                        element={<UsersList />}
                                    />
                                    <Route
                                        path={'users-list/:id'}
                                        element={<User />}
                                    />
                                    <Route path={'token'} element={<Token />} />
                                </Route>
                            </Route>
                        </Route>
                        <Route path={'tabel'} element={<Tabel />} />
                        <Route path={'salary'} element={<Salary />} />
                    </Route>

                    <Route path={'vacation'} element={<Vacation />} />
                    <Route path={'permissions'} element={<Permissions />} />
                    <Route path={'working-hours'} element={<WorkingHours />} />
                    <Route path={'illness'} element={<Illness />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Navigation
