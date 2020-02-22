import { combineReducers } from 'redux'

import items from './items'
import detailitem from './detailitem'
import carts from './carts'
import reviews from './reviews'
import detailreview from './detailreview'
import categories from './categories'
import login from './login'
import cartshistory from './cartshistory'
import register from './register'

const appReducer = combineReducers({
  items,
  detailitem,
  carts,
  reviews,
  categories,
  login,
  cartshistory,
  register,
  detailreview
})

export default appReducer
