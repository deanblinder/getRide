import { useEffect, useState } from 'react';
import { ridesActions } from '../../actions';
import { Ride } from '../../typing';

const usePresenter = () => {
  const [upcomingRides, setUpcomingRides] = useState<Ride[]>([]);

  useEffect(() => {
    getUpcomingRides;
  }, []);

  const getUpcomingRides = async () => {
    const previousRides = await ridesActions.getUpcomingRides();
    setUpcomingRides(previousRides);
  };

  return {
    upcomingRides,
  };
};
export default usePresenter;
