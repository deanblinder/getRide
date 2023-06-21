// @ts-ignore
import { API_KEY } from '@env';

export const endpoints = {
  googleMapsDirections: (props: {
    origin: {
      latitude: number;
      longitude: number;
    };
    destination: {
      latitude: number;
      longitude: number;
    };
  }) => {
    const { origin, destination } = props;
    return `https://maps.googleapis.com/maps/api/directions/json?origin=${
      origin.latitude
    },${origin.longitude}&destination=${destination.latitude},${
      destination.longitude
    }&key=${'AIzaSyCaBAGiUbPLCLYCryxhZiqYo7f7aNitmzw'}`;
  },
};
