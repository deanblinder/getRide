import { endpoints } from '../constants';
import axios from 'axios';
// @ts-ignore
import { decode } from '@mapbox/polyline';
import { Point } from 'react-native-google-places-autocomplete';

export const getRouteCoordinates = async (route: {
  origin: Point;
  destination: Point;
}) => {
  try {
    const response = await axios.get(endpoints.googleMapsDirections(route));
    return response.data.routes;
  } catch (e) {
    console.log('getRouteCoordinates error', e);
  }
};

export const decodePolyline = (polyline: string) => {
  const decoded = decode(polyline);
  return decoded.map((point: Point[]) => {
    return {
      latitude: point[0],
      longitude: point[1],
    };
  });
};
