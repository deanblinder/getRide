import { Ride, Location } from '../../typing';

export type Props = {
  route: {
    params: {
      ride: Ride;
      searchData?: {
        origin?: Location;
        destination?: Location;
      };
    };
  };
};
export const usePresenter = () => {
  return {};
};
