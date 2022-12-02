import $api from '../index'
import { toast } from 'react-toastify'

const AUTH_PREFIX = '/Auth/'

export const changeStatus = async (id, status) => {
    return $api.post(
        AUTH_PREFIX + `switchuserstatus?userId=${id}&val=${status}`
    )
}

export const editUser = async (data) => {
    return $api.post(AUTH_PREFIX + 'editinfo', { ...data })
}

export const changePassword = async (data) => {
    console.log(data)
    if (data.password !== data.confirmPassword)
        return toast.error('Passwords will be identific')
    return await $api.post(AUTH_PREFIX + 'changepassword', {
        userId: +data.id,
        password: data.password,
    })
}

export const fetchRoles = async (id) => {
    return await $api.get(AUTH_PREFIX + `getroles/?userId=${id}`)
}

export const getRoles = async () => {
    return await $api.get(AUTH_PREFIX + 'getallroles')
}

export const fetchUsers = async () => {
    return await $api.get('/Auth/getallusers')
}
