import axios from 'axios'
import {APP_URL} from '../config'


export const getItems = ()=>{
  return {
    type: 'GET_ITEMS',
    payload: axios.get(`${APP_URL}/items?sort[total_ratings]=desc`)
  }
}

export const nextItems = (nextURL)=>{
  return {
    type: 'GET_NEXT_ITEMS',
    payload: axios.get(`${nextURL}`)
  }
}

export const getDetailItem = (id)=>{
  return {
    type: 'GET_DETAIL_ITEM',
    payload: axios.get(APP_URL.concat(`/items/${id}`))
  }
}