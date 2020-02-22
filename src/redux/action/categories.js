import axios from 'axios'
import {APP_URL} from '../config'


export const getCategories = ()=>{
  return {
    type: 'GET_CATEGORIES',
    payload: axios.get(APP_URL.concat(`/categories`))
  }
}