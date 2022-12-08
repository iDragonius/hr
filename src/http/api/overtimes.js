import $api from '../index'

export const addOvertime = async ({ employeeId, date, hourCount }) => {
    return await $api.post('/Overtimes/add', { employeeId, date, hourCount })
}
