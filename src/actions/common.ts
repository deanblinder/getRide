import { Point } from 'react-native-google-places-autocomplete';

export const distanceBetweenTwoPoints = (point1: Point, point2: Point) => {
  const latDistance = (point1.lat - point2.lat) ^ 2;
  const lngDistance = (point1.lng - point2.lng) ^ 2;
  const distance = Math.sqrt(latDistance + lngDistance);
  return distance;
};
