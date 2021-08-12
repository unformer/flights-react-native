import {instance} from './api'

export const flightsAPI = {
    async getflights() {
        const res = await instance.get(`browsedates/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/anytime/anytime`)
        return res.data
    }
}