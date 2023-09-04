import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { useState } from 'react';
import { Location, Ride } from '../../typing';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { ridesActions } from '../../actions';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import Chance from 'chance';

const usePresenter = () => {
  const [origin, setOrigin] = useState<Location | undefined>(undefined);
  const [destination, setDestination] = useState<Location | undefined>(
    undefined
  );
  const [time, setTime] = useState<Date>(new Date());
  const [date, setDate] = useState<Date>(new Date());
  const [seats, setSeats] = useState<number>(4);
  const [price, setPrice] = useState<number>(0);

  const user = useSelector((state: AuthState) => state.user);

  const onTimeChange = (
    _event: DateTimePickerEvent,
    time?: Date | undefined
  ) => {
    setTime(time ?? new Date());
  };

  const onDateChange = (
    _event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    setDate(date ?? new Date());
  };

  const getOrigin = (origin: Location) => {
    setOrigin(origin);
  };

  const getDestination = (destination: Location) => {
    setDestination(destination);
  };

  const addRide = async () => {
    if (!origin || !destination || !time || !date) return;

    const chance = new Chance();

    const ride: Ride = {
      rideId: chance.guid(),
      userId: user!.uid,
      origin: origin,
      destination: destination,
      hour: time.getTime().toString(),
      date: date.toDateString(),
      seats,
      price,
      userImage: user?.profileImage,
    };

    ridesActions.addRide(ride);
    navigationService.pop();
  };

  const onOriginPressed = () => {
    navigationService.push(screenIds.SEARCH_RIDE_ORIGIN_SCREEN, {
      getLocations: getOrigin,
    });
  };

  const onDestinationPressed = () => {
    navigationService.push(screenIds.SEARCH_RIDE_DESTINATION_SCREEN, {
      getLocations: getDestination,
    });
  };

  const onSeatsChange = (value: number) => {
    setSeats(value);
  };

  const onPriceChange = (value: number) => {
    setPrice(value);
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
    onPriceChange,
    price,
  };
};
export default usePresenter;
