import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { Location } from '../../typing';

export type Ride = {
  id: number;
  origin: Location;
  destination: Location;
  hour: string;
  date: string;
  image: string;
  seats: number;
  price: number;
  name: string;
  phone: string;
};

export type Props = {
  ride: Ride;
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
