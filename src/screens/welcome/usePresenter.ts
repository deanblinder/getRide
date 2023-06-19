import { useState } from 'react';
import { navigationService } from '../../services';
import { screenIds } from '../../constants';

const usePresenter = () => {
  const [shouldShowLogin, setShouldShowLogin] = useState(false);

  const onSignupPressed = () => {
    navigationService.push(screenIds.REGISTER_SCREEN, {});
  };
  const onHaveAccountPressed = () => {
    navigationService.push(screenIds.LOGIN_SCREEN, {});
  };
  return {
    shouldShowLogin,
    onSignupPressed,
    onHaveAccountPressed,
  };
};
export default usePresenter;
