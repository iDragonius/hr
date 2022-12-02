import $api from '../index'

const PREFIX = '/Notifications'
export const getNotifications = async () => {
    return await $api.get(PREFIX + '/getall')
}
export const getUserNotifications = async (id) => {
    return await $api.get(PREFIX + `/getbyuser/?userId=${id}`)
}
