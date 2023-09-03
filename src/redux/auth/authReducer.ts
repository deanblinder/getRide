import { SET_USER, SET_USER_LOCATION } from './authActionsType';
import { User } from '../../typing';
import { Point } from 'react-native-google-places-autocomplete';

export type AuthState = {
  user: User | undefined;
  userLocation: Point | undefined;
};
//initializing state
const initialState: AuthState = {
  user: undefined,
  userLocation: undefined,
};

const authReducer = (
  state = initialState,
  action: { type: 'SET_USER' | 'SET_USER_LOCATION'; payload: User }
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
