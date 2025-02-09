import { screenIds } from '../../constants';
import { useState } from 'react';
import { Location, Ride } from '../../typing';
import { ridesActions } from '../../actions';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import Chance from 'chance';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'native-base';
import { Platform, Alert } from 'react-native';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [origin, setOrigin] = useState<Location | undefined>(
    rideToEdit ? rideToEdit.origin : undefined
  );
  const [destination, setDestination] = useState<Location | undefined>(
    rideToEdit ? rideToEdit.destination : undefined
  );
  const [time, setTime] = useState<Date>(
    rideToEdit ? new Date(rideToEdit?.rideTimestamp!) : new Date()
  );
  const [date, setDate] = useState<Date>(
    rideToEdit ? new Date(rideToEdit?.rideTimestamp!) : new Date()
  );

  const [seats, setSeats] = useState<number>(rideToEdit ? rideToEdit.seats : 4);
  const [loading, setLoading] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(IS_IOS);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(IS_IOS);
  const [routeNumber, setRoutNumber] = useState<number>(
    rideToEdit ? rideToEdit.routeNumber : 0
  );
  const [numberOfRoutes, setNumberOfRoutes] = useState<number>(0);

  const onDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    if (selectedDate) {
      setShowDatePicker(IS_IOS);
      setDate(selectedDate);
    }
  };

  const onTimeChange = (
    event: DateTimePickerEvent,
    selectedTime?: Date | undefined
  ) => {
    if (selectedTime) {
      setShowTimePicker(IS_IOS); // On Android, it's better to manually control when to close the picker
      setTime(selectedTime);
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

  const onChangeRoot = () => {
    setRoutNumber(routeNumber + 1 === numberOfRoutes ? 0 : routeNumber + 1);
  };

  const clearState = () => {
    setOrigin(undefined);
    setDestination(undefined);
    setTime(new Date());
    setDate(new Date());
    setSeats(4);
    setNumberOfRoutes(0);
  };

  const convertToTimestamp = (date: Date) => {
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    return date.getTime();
  };

  const addRide = async () => {
    if (!origin || !destination) {
      toast.show({
        title: t('TOAST.ENTER_ALL_FIELDS'),
      });
      return;
    }

    const chance = new Chance();

    const ride: Ride = {
      rideId: chance.guid(),
      userId: user!.uid,
      origin: origin,
      destination: destination,
      rideTimestamp: convertToTimestamp(date),
      hitchhikers: [],
      seats,
      routeNumber,
    };

    try {
      setLoading(true);
      if (rideToEdit) {
        const rideToUpdate = {
          rideTimestamp: convertToTimestamp(date),
          rideId: rideToEdit.rideId,
          origin: origin,
          destination: destination,
          seats,
          routeNumber: routeNumber,
        };
        await ridesActions.updateRide(rideToEdit.rideId, rideToUpdate);
        toast.show({
          description: t('TOAST.RIDE_UPDATED_SUCCESSFULLY'),
          color: 'green',
        });
        navigation.goBack();
        return;
      } else {
        if (!user?.phoneNumber) {
          Alert.alert(t('ALERT.HEY_THERE'), t('ALERT.PROVIDE_PHONE_NUMBER'), [
            { text: t('ALERT.LATER') },
            {
              text: t('ALERT.EDIT_PROFILE'),
              onPress: () => {
                // @ts-ignore
                navigation.navigate(screenIds.EDIT_PROFILE_SCREEN);
              },
            },
          ]);
          setLoading(false);
          return;
        }
        await ridesActions.addRide(ride);
        toast.show({
          description: t('TOAST.RIDE_ADDED_SUCCESSFULLY'),
          color: 'green',
        });
      }
      clearState();
      setLoading(false);
      // @ts-ignore
      navigation.navigate(t('TABS.RIDES'));
    } catch (error) {
      toast.show({
        description: t('TOAST.RIDE_DIDNT_ADDED'),
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

  const onDeletePress = async () => {
    Alert.alert(t('ALERT.WARNING'), t('ALERT.DELETE_RIDE_MESSAGE'), [
      { text: t('ALERT.NO') },
      {
        text: t('ALERT.YES'),
        onPress: async () => {
          rideToEdit && (await ridesActions.deleteRide(rideToEdit.rideId));
          navigation.goBack();
        },
      },
    ]);
  };

  const getNumberOfRoutes = (routeNumber: number) => {
    setNumberOfRoutes(routeNumber);
  };

  const onSwitchPress = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
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
    isEditMode: !!rideToEdit,
    onDeletePress,
    onChangeRoot,
    routeNumber,
    getNumberOfRoutes,
    numberOfRoutes,
    onSwitchPress,
    shouldShowChangeRouteButton: numberOfRoutes > 0,
  };
};
export default usePresenter;
