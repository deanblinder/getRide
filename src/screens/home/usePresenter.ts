import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as Location from 'expo-location';
import { setUserLocation } from '../../redux/auth/authActions';

const usePresenter = (props: any) => {
  const dispatch = useDispatch();

  const showFindRideScreen = () => {
    navigationService.push(screenIds.OFFER_RIDES);
  };

  const showSearchRideScreen = () => {
    navigationService.push(screenIds.SEARCH_RIDE_SCREEN);
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
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
  return {
    showFindRideScreen,
    showSearchRideScreen,
  };
};

export default usePresenter;
