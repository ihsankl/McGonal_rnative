import axios from 'axios'
import qs from 'qs'
import { APP_URL } from '../config'

// FAKE TOKEN



const url = APP_URL.concat('/review')


export const getReview = (user_id, token) => {
    const headers = { Authorization: `Bearer ${token}` }
    return {
        type: 'GET_REVIEWS',
        payload: axios.get(`${url}/user/${user_id}`, { headers: headers })
    }
}

export const getDetailReview = (id, token) => {
    const headers = { Authorization: `Bearer ${token}` }
    return {
        type: 'GET_DETAIL_REVIEW',
        payload: axios.get(`${url}/${id}`, { headers: headers })
    }
}

export const postReview = (data, token) => {
    const headers = { Authorization: `Bearer ${token}` }
    return {
        type: 'POST_REVIEWS',
        payload: axios.post(`${url}`, qs.stringify(data), { headers: headers })
    }
}

export const editReview = (id, data, token) => {
    const headers = { Authorization: `Bearer ${token}` }
    return {
        type: 'PUT_REVIEWS',
        payload: axios.put(`${url}/${id}`, qs.stringify(data), { headers: headers })
    }
}

export const deleteReview = (reviewId, token) => {
    const headers = { Authorization: `Bearer ${token}` }
    return {
        type: 'DELETE_REVIEWS',
        payload: axios.delete(`${url}/${reviewId}`, { headers: headers })
    }
}