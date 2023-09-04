import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { Ride } from '../../typing';
import { usersActions } from '../../actions';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { Linking } from 'react-native';

export type Props = {
  ride: Ride;
  disabled?: boolean;
};

const usePresenter = (props: Props) => {
  const { ride, disabled } = props;

  const user = useSelector((state: AuthState) => state.user);

  const pushRidePage = () => {
    navigationService.push(screenIds.RIDE_SCREEN, { ride });
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

  const onViewProfilePress = () => {};

  return {
    pushRidePage,
    onChatPress,
    onViewProfilePress,
    isMyRide: user?.uid === ride.userId,
    shouldCardBeDisabled: user?.uid === ride.userId || disabled,
  };
};
export default usePresenter;
