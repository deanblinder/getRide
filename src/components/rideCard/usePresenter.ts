import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { Ride } from '../../typing';

export type Props = {
  ride: Ride;
  disabled?: boolean;
};

const usePresenter = (props: Props) => {
  const { ride } = props;

  const pushRidePage = () => {
    navigationService.push(screenIds.RIDE_SCREEN, { ride });
  };

  return {
    pushRidePage,
  };
};
export default usePresenter;
