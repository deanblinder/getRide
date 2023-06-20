import {LOGIN, LOGOUT} from './authActionsType'

export const login = () => {
    return {
       type: LOGIN,
      //  payload: parameter
    }
 }

 export const logout = () => {
    return {
       type: LOGOUT
    }
 }
