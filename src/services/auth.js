import { API } from '.'

export const signIn = ({ email, password }) => API.post('auth/login', { email, password })

export const signUp = ({ email, password, name }) =>
  API.post('auth/signup', { email, name, password })

export const logout = () => API.post('auth/logout')

export const setAuthToken = token => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearAuthToken = () => {
  API.defaults.headers.common.Authorization = null
}
