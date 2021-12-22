import axios from 'axios'

const options = {
  method: 'GET',
  baseURL: 'http://min-prices.aviasales.ru/',
}

export const instance = axios.create(options)