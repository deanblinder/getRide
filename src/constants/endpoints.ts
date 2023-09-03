// @ts-ignore
import { API_KEY } from '@env';
import { Point } from 'react-native-google-places-autocomplete';

export const endpoints = {
  googleMapsDirections: (props: { origin: Point; destination: Point }) => {
    const { origin, destination } = props;
    return `https://maps.googleapis.com/maps/api/directions/json?origin=${
      origin.lat
    },${origin.lng}&destination=${destination.lat},${
      destination.lng
    }&key=${'AIzaSyCaBAGiUbPLCLYCryxhZiqYo7f7aNitmzw'}`;
  },
  USERS: 'https://getride-e4c3e-default-rtdb.firebaseio.com',
};
