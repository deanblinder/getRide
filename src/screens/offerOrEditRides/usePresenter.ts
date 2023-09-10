import { screenIds } from '../../constants';
import { useState } from 'react';
import { Location, Ride } from '../../typing';
import { ridesActions } from '../../actions';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import Chance from 'chance';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'native-base';
import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';

export type Props = {
  route?: {
    params?: {
      rideToEdit?: Ride;
      isEdit?: false;
    };
  };
};

const usePresenter = (props: Props) => {
  const { rideToEdit } = props?.route?.params || {};
  const [origin, setOrigin] = useState<Location | undefined>(
    rideToEdit ? rideToEdit.origin : undefined
  );
  const [destination, setDestination] = useState<Location | undefined>(
    rideToEdit ? rideToEdit.destination : undefined
  );
  const [time, setTime] = useState<Date>(
    rideToEdit ? new Date(parseInt(rideToEdit?.hour)) : new Date()
  );
  const [date, setDate] = useState<Date>(
    rideToEdit ? new Date(rideToEdit.date) : new Date()
  );
  const [seats, setSeats] = useState<number>(rideToEdit ? rideToEdit.seats : 4);
  const [loading, setLoading] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(IS_IOS);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(IS_IOS);

  const onDateChange = (event: any, selectedDate: any) => {
    if (selectedDate) {
      setShowDatePicker(IS_IOS);
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event: any, selectedDate: any) => {
    if (selectedDate) {
      setShowTimePicker(IS_IOS); // On Android, it's better to manually control when to close the picker
      setTime(selectedDate);
    }
  };

  const user = useSelector((state: AuthState) => state.user);
  const navigation = useNavigation();
  const toast = useToast();

  const getOrigin = (origin: Location) => {
    setOrigin(origin);
  };

  const getDestination = (destination: Location) => {
    setDestination(destination);
  };

  const clearState = () => {
    setOrigin(undefined);
    setDestination(undefined);
    setTime(new Date());
    setDate(new Date());
    setSeats(4);
  };

  const addRide = async () => {
    if (!origin || !destination) {
      toast.show({
        title: 'Please enter all fields',
      });
      return;
    }

    const chance = new Chance();

    const ride: Ride = {
      rideId: chance.guid(),
      userId: user!.uid,
      origin: origin,
      destination: destination,
      hour: time.getTime().toString(),
      date: date.toDateString(),
      seats,
    };

    try {
      setLoading(true);
      if (rideToEdit) {
        const rideToUpdate = {
          date: date.toDateString(),
          hour: time.getTime().toString(),
          rideId: rideToEdit.rideId,
          origin: origin,
          destination: destination,
          seats,
        };
        await ridesActions.updateRide(rideToEdit.rideId, rideToUpdate);
      } else {
        await ridesActions.addRide(ride);
      }
      clearState();
      setLoading(false);
      // @ts-ignore
      await navigation.navigate(screenIds.RIDES_SCREEN);
      toast.show({
        description: 'Ride added successfully',
        color: 'green',
      });
    } catch (error) {
      toast.show({
        description: 'Ride didnt added',
        color: 'red',
      });
    }
  };

  const onOriginPressed = () => {
    // @ts-ignore
    navigation.navigate(screenIds.SEARCH_RIDE_ORIGIN_SCREEN, {
      getLocations: getOrigin,
    });
  };

  const onDestinationPressed = () => {
    // @ts-ignore
    navigation.navigate(screenIds.SEARCH_RIDE_DESTINATION_SCREEN, {
      getLocations: getDestination,
    });
  };

  const onSeatsChange = (value: number) => {
    setSeats(value);
  };

  return {
    onOriginPressed,
    onDestinationPressed,
    origin,
    destination,
    onTimeChange,
    onDateChange,
    time,
    date,
    addRide,
    onSeatsChange,
    seats,
    shouldShowDatePicker: showDatePicker || IS_IOS,
    shouldShowTimePicker: showTimePicker || IS_IOS,
    setShowTimePicker,
    setShowDatePicker,
    loading,
    isEdit: !!rideToEdit,
  };
};
export default usePresenter;
