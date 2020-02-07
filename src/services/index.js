import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://game11.herokuapp.com/api/',
  // for non-work development
  headers: {
    'content-type': 'application/json',
  },
})
