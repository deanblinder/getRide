import { LOGIN, LOGOUT } from './authActionsType';

export type State = {
   isLoggedIn:boolean
}
//initializing state
const initialState:State = {
   isLoggedIn: false,
}

const authReducer = (state = initialState, action: { type: any; }) => {
   switch (action.type) {
      case LOGIN: return {
         ...state, 
         isLoggedIn: state.isLoggedIn = true
      }
      case LOGOUT: return {
         ...state,
         isLoggedIn: state.isLoggedIn = false
      }
      default: return state
   }
}
export default authReducer;