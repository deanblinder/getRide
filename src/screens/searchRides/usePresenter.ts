import { screenIds } from '../../constants';
import { useState } from 'react';
import { Location, Ride } from '../../typing';
import { ridesActions } from '../../actions';
import { useNavigation } from '@react-navigation/native';
import { IS_IOS } from '../offerOrEditRides/usePresenter';
import { useToast } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { QueryDocumentSnapshot } from '@firebase/firestore';
import { LayoutAnimation } from 'react-native';
import { useTranslation } from 'react-i18next';

const usePresenter = () => {
  const user = useSelector((state: AuthState) => state.user);
  const { t } = useTranslation();

  const [origin, setOrigin] = useState<Location | undefined>(undefined);
  const [destination, setDestination] = useState<Location | undefined>(
    undefined
  );
  const [rides, setRides] = useState<Ride[] | undefined>(undefined);
  const [radius, setRadius] = useState(7);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(IS_IOS);
  const [shouldFetchMore, setShouldFetchMore] = useState<boolean>(false);
  const [lastVisibleDoc, setLastVisibleDoc] =
    useState<QueryDocumentSnapshot | null>(null);
  const toast = useToast();

  const onDateChange = (event: any, selectedDate: any) => {
    if (selectedDate) {
      setShowDatePicker(IS_IOS);
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
    // @ts-ignore
    navigation.navigate(screenIds.SEARCH_RIDE_ORIGIN_SCREEN, {
      getLocations: getOrigin,
    });
  };

  const clearSearch = () => {
    LayoutAnimation.easeInEaseOut();
    setRides(undefined);
    setLastVisibleDoc(null);
    setShouldFetchMore(false);
  };

  const onDestinationPressed = () => {
    // @ts-ignore
    navigation.navigate(screenIds.SEARCH_RIDE_DESTINATION_SCREEN, {
      getLocations: getDestination,
    });
  };

  const onSearchPress = async () => {
    // setRides(undefined);
    if (!destination?.location || !origin?.location) {
      toast.show({
        title: t('TOAST.SELECT_ORIGIN_AND_DESTINATION'),
      });
      return;
    }

    setLoading(true);
    const { allRides, lastVisible } = await ridesActions.getFutureRides({
      userId: user!.uid,
      origin: origin.location,
      destination: destination.location,
      date: date.getTime(),
      radius,
      lastVisibleDoc: null,
    });
    LayoutAnimation.easeInEaseOut();
    setRides(allRides);
    setLastVisibleDoc(lastVisible);
    setShouldFetchMore(allRides.length > 0);
    setLoading(false);
  };

  const onSearchMore = async () => {
    if (!shouldFetchMore) return;

    setLoadingMore(true);
    const { allRides, lastVisible } = await ridesActions.getFutureRides({
      userId: user!.uid,
      origin: origin!.location!,
      destination: destination!.location!,
      date: date.getTime(),
      radius,
      lastVisibleDoc,
    });
    rides && setRides([...rides, ...allRides]);
    setLastVisibleDoc(lastVisible);
    setShouldFetchMore(allRides.length > 0);
    setLoadingMore(false);
  };

  const onSwitchPress = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
    setLastVisibleDoc(null);
    setShouldFetchMore(false);
  };

  return {
    onOriginPressed,
    onDestinationPressed,
    origin,
    destination,
    rides,
    loading,
    loadingMore,
    onSearchPress,
    radius,
    shouldShowDatePicker: IS_IOS || showDatePicker,
    setShowDatePicker,
    onDateChange,
    clearSearch,
    date,
    onSearchMore,
    onSwitchPress,
    setRadius,
  };
};
export default usePresenter;
