import * as Location from 'expo-location';
import { setUserLocation } from '../redux/auth/authActions';
import { useDispatch } from 'react-redux';

export const getUserLocationAsync = async () => {
  const dispatch = useDispatch();

  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  dispatch(
    setUserLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
  );
};
