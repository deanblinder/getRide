import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { useState } from 'react';
import { Location, Ride } from '../../typing';
import { ridesActions } from '../../actions';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

const usePresenter = () => {
  const [origin, setOrigin] = useState<Location | undefined>(undefined);
  const [destination, setDestination] = useState<Location | undefined>(
    undefined
  );
  const [rides, setRides] = useState<Ride[] | undefined>(undefined);
  const [radius, setRadius] = useState(7);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(
    Platform.OS === 'ios'
  );

  const onDateChange = (event: any, selectedDate: any) => {
    if (selectedDate) {
      setShowDatePicker(Platform.OS === 'ios'); // On Android, it's better to manually control when to close the picker
      setDate(selectedDate);
    }
  };

  const navigation = useNavigation();

  const getOrigin = (origin: Location) => {
    setOrigin(origin);
  };

  const getDestination = (destination: Location) => {
    setDestination(destination);
  };

  const onOriginPressed = () => {
    console.log('onOriginPressed');
    // @ts-ignore
    navigation.navigate(screenIds.SEARCH_RIDE_ORIGIN_SCREEN, {
      getLocations: getOrigin,
    });
  };

  const onDestinationPressed = () => {
    console.log('onDestinationPressed');
    // @ts-ignore
    navigation.navigate(screenIds.SEARCH_RIDE_DESTINATION_SCREEN, {
      getLocations: getDestination,
    });
  };

  const onSearchPress = async () => {
    if (!destination?.location || !origin?.location) return;
    setLoading(true);
    const rides = await ridesActions.getRides({
      origin: origin.location,
      destination: destination.location,
      date: new Date(),
      time: new Date(),
      radius,
    });
    setRides(rides);
    setLoading(false);
  };

  const setRideRadius = (radius: number) => {
    setRadius(radius);
  };

  return {
    onOriginPressed,
    onDestinationPressed,
    origin,
    destination,
    rides,
    loading,
    onSearchPress,
    setRideRadius,
    radius,
    isButtonDisabled: !origin || !destination,
    showDatePicker,
    setShowDatePicker,
    onDateChange,
  };
};
export default usePresenter;
