import { endpoints } from '../constants';
import axios from 'axios';
// @ts-ignore
import { decode } from '@mapbox/polyline';
import { Coordinate } from '../typing';

export const getRouteCoordinates = async (route: {
  origin: Coordinate;
  destination: Coordinate;
}) => {
  const response = await axios.get(endpoints.googleMapsDirections(route));
  const points = response.data.routes[0].overview_polyline.points;
  return points;
};

export const decodePolyline = (polyline: string) => {
  const decoded = decode(polyline);
  return decoded.map((point: Coordinate[]) => {
    return {
      latitude: point[0],
      longitude: point[1],
    };
  });
};
