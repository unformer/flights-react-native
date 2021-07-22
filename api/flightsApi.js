import {instance} from './api'

const now = new Date()
const currentDate = now.getFullYear()+'-'+('0'+(now.getMonth()+1)).slice(-2)+'-'+now.getDate()

export const flightsAPI = {
    async getflights() {
        const res = await instance.get(`browsedates/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/anytime/anytime`)
        return res.data
    }
}