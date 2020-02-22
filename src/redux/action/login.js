import axios from 'axios'
import qs from 'qs'
import {APP_URL} from '../config'


export const login = (data) => {
    return {
        type: 'GET_TOKEN',
        payload: axios.post(`${APP_URL}/user/login`, qs.stringify(data))
    }
}

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${APP_URL}/user/customer`, qs.stringify(data))
    }
}

export const logOut = (token) => {
    // const headers = { Authorization: `Bearer ${token}` }
    return {
        type: 'REMOVE_TOKEN',
        payload: axios.delete(`${APP_URL}/user/logout`, { headers: { Authorization: `Bearer ${token}` } })
    }
}
