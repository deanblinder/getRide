import { screenIds } from '../../constants';
import { Ride, User } from '../../typing';
import { ridesActions, usersActions } from '../../actions';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { Linking } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export type Props = {
  ride: Ride;
  disabled?: boolean;
};

const usePresenter = (props: Props) => {
  const { ride, disabled } = props;
  const [rideUser, setRideUser] = useState<User | undefined>(undefined);

  const navigation = useNavigation();

  const user = useSelector((state: AuthState) => state.user);

  const pushRidePage = () => {
    // @ts-ignore
    navigation.navigate(screenIds.RIDE_SCREEN, { ride });
  };

  useEffect(() => {
    getUserImage();
  }, []);

  const getUserImage = async () => {
    setRideUser(await usersActions.getUserById(ride.userId));
  };

  const onChatPress = async () => {
    const user = await usersActions.getUserById(ride.userId);
    let url = 'whatsapp://send?text=' + '&phone=+972' + user.phoneNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened successfully ' + data); //<---Success
      })
      .catch(() => {
        alert('Make sure WhatsApp installed on your device'); //<---Error
      });
  };

  const onViewProfilePress = () => {
    // @ts-ignore
    navigation.navigate(screenIds.OFFERING_PROFILE_SCREEN, {
      userId: ride.userId,
    });
  };

  const onDeletePress = async () => {
    await ridesActions.deleteRide(ride.rideId);
  };

  const onEditPress = () => {
    // @ts-ignore
    navigation.navigate(screenIds.EDIT_RIDE_SCREEN, {
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
    onDeletePress,
  };
};
export default usePresenter;
