import React, { useEffect, useState } from 'react';
import { ridesActions } from '../../actions';
import { Ride } from '../../components/rideCard/usePresenter';

const usePresenter = () => {
  const [previousRides, setPreviousRides] = useState<Ride[]>([]);

  useEffect(() => {
    getFavoritesRides();
  }, []);

  const getFavoritesRides = async () => {
    const previousRides = await ridesActions.getFavoritesRides();
    setPreviousRides(previousRides);
  };
  return {
    previousRides,
  };
};
export default usePresenter;
