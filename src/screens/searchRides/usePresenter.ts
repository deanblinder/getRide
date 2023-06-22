import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { useState } from 'react';
import { Location } from '../../typing';

const usePresenter = () => {
  const [origin, setOrigin] = useState<Location | undefined>(undefined);
  const [destination, setDestination] = useState<Location | undefined>(
    undefined
  );

  const getOrigin = (origin: Location) => {
    setOrigin(origin);
  };

  const getDestination = (destination: Location) => {
    setDestination(destination);
  };

  const onOriginPressed = () => {
    navigationService.push(screenIds.SEARCH_RIDE_ORIGIN_SCREEN, {
      getLocations: getOrigin,
    });
  };
  const onDestinationPressed = () => {
    navigationService.push(screenIds.SEARCH_RIDE_DESTINATION_SCREEN, {
      getLocations: getDestination,
    });
  };
  return {
    onOriginPressed,
    onDestinationPressed,
    origin,
    destination,
  };
};
export default usePresenter;
