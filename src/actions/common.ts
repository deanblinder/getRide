import * as Location from 'expo-location';
import { LocationObject } from 'expo-location/src/Location.types';

export const getUserLocationAsync = async (): Promise<
  LocationObject | undefined
> => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
    return;
  }

  return await Location.getCurrentPositionAsync({});
};
