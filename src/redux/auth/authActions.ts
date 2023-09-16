import { SET_USER, SET_USER_LOCATION } from './authActionsType';
import { User } from '../../typing';
import { Point } from 'react-native-google-places-autocomplete';

export const setUser = (data: User | undefined) => {
  return {
    type: SET_USER,
    payload: data,
  };
};

export const setUserLocation = (location: Point) => {
  return {
    type: SET_USER_LOCATION,
    payload: location,
  };
};
