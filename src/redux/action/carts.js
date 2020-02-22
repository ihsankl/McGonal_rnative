import axios from 'axios'
import qs from 'qs'
import {APP_URL} from '../config'


const url = APP_URL.concat('/carts')


export const getCarts = (user_id, token) => {
    return {
        type: 'GET_CARTS',
        payload: axios.get(`${url}/user/${user_id}`, { headers: { Authorization: `Bearer ${token}` } })
    }
}

export const getCartsHistory = (user_id, token) => {
    return {
        type: 'GET_CARTS_HISTORY',
        payload: axios.get(`${url}/user/history/${user_id}`, { headers: { Authorization: `Bearer ${token}` } })
    }
}

export const putToCarts = (data, token) => {
    const headers = { Authorization: `Bearer ${token}` }
    return {
        type: 'POST_CARTS',
        payload: axios.post(`${url}`, qs.stringify(data), { headers: headers })
    }
}

export const checkout = (id, data, token) => {
    const headers = { Authorization: `Bearer ${token}` }
    return {
        type: 'PUT_CARTS',
        payload: axios.put(`${url}/${id}`, qs.stringify(data), { headers: headers })
    }
}

export const removeItem = (id, token) => {
    const headers = { Authorization: `Bearer ${token}` }
    return {
        type: 'DELETE_CARTS',
        payload: axios.delete(`${url}/${id}`, { headers: headers })
    }
}