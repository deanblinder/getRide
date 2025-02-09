import { screenIds } from '../../constants';
import { Ride, User, Location } from '../../typing';
import { ridesActions, usersActions } from '../../actions';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { Linking } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export type Props = {
  ride: Ride;
  searchData?: {
    origin?: Location;
    destination?: Location;
  };
  disabled?: boolean;
};

const usePresenter = (props: Props) => {
  const { ride, disabled, searchData } = props;
  const [rideUser, setRideUser] = useState<User | undefined>(undefined);
  const { t } = useTranslation();
  const navigation = useNavigation();
  const user = useSelector((state: AuthState) => state.user);

  useEffect(() => {
    updateRideUser();
  }, [user]);

  const pushRidePage = () => {
    // @ts-ignore
    navigation.navigate(screenIds.RIDE_SCREEN, { ride, searchData });
  };

  const updateRideUser = async () => {
    setRideUser(await usersActions.getUserById(ride.userId));
  };

  const onChatPress = async () => {
    const user = await usersActions.getUserById(ride.userId);
    let url = 'whatsapp://send?text=' + '&phone=+972' + user!.phoneNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened successfully ' + data); //<---Success
      })
      .catch(() => {
        alert(t('ALERT.WHATS_APP_NOT_INSTALLED'));
      });
  };

  const onViewProfilePress = () => {
    // @ts-ignore
    navigation.navigate(screenIds.OFFERING_PROFILE_SCREEN, {
      userId: ride.userId,
    });
  };

  const onEditPress = () => {
    // @ts-ignore
    navigation.navigate(screenIds.OFFER_RIDES_OR_EDIT_RIDES_SCREEN, {
      rideToEdit: props.ride,
      isEdit: true,
    });
  };

  return {
    pushRidePage,
    onChatPress,
    onViewProfilePress,
    isMyRide: user?.uid === ride.userId,
    shouldCardBeDisabled: disabled,
    rideUser,
    onEditPress,
    rideHour: new Date(ride.rideTimestamp).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    }),
    rideDate: new Date(ride.rideTimestamp).toLocaleDateString('he'),
  };
};
export default usePresenter;
