import axios from 'axios'

const options = {
  method: 'GET',
  baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/',
  headers: {
    'x-rapidapi-key': 'ef2891c04emsha5d9ed72c8df918p154ff7jsnef50f45e2ac3',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
}

export const instance = axios.create(options)