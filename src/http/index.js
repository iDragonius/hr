import axios from 'axios'

export const API_URL = 'https://k191publicadministration.azurewebsites.net/api'
const $api = axios.create({
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (
            error.response.status === 500 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                const response = await axios.post(`${API_URL}/refresh`, {
                    withCredentials: true,
                })
                localStorage.setItem('token', response.data.token)
                return $api.request(originalRequest)
            } catch (error) {
                console.log(error)
            }
        }
        throw error
    }
)

export default $api
