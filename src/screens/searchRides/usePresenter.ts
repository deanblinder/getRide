import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { useEffect, useState } from 'react';
import { Location, Ride } from '../../typing';
import { ridesActions } from '../../actions';

const usePresenter = () => {
  const [origin, setOrigin] = useState<Location | undefined>(undefined);
  const [destination, setDestination] = useState<Location | undefined>(
    undefined
  );
  const [rides, setRides] = useState<Ride[] | undefined>(undefined);
  const [shouldShowRides, setShouldShowRides] = useState(false);

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

  const onSearchPress = async () => {
    if (!destination?.location || !origin?.location) return;

    const rides = await ridesActions.getRides({
      origin: origin.location,
      destination: destination.location,
      date: new Date(),
      time: new Date(),
    });
    setRides(rides);
  };
  return {
    onOriginPressed,
    onDestinationPressed,
    origin,
    destination,
    rides,
    shouldShowRides,
    onSearchPress,
  };
};
export default usePresenter;
