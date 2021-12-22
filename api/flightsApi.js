import {instance} from './api'

export const flightsAPI = { 
    async getflights() {
        const res = await instance.get(`calendar_preload?origin=MOW&destination=NYC`)
        return res.data
    }
}