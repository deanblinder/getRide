import { useState } from 'react';
import { screenIds } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const usePresenter = () => {
  const [shouldShowLogin, setShouldShowLogin] = useState(false);

  const navigation = useNavigation();

  const onSignupPressed = () => {
    // @ts-ignore
    navigation.navigate(screenIds.REGISTER_SCREEN, {});
  };
  const onHaveAccountPressed = () => {
    // @ts-ignore
    navigation.navigate(screenIds.LOGIN_SCREEN, {});
  };
  return {
    shouldShowLogin,
    onSignupPressed,
    onHaveAccountPressed,
  };
};
export default usePresenter;
