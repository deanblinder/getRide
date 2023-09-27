import { useEffect, useState } from 'react';
import { Ride } from '../../typing';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { onSnapshot } from 'firebase/firestore';
import { ridesQueries } from '../../../src/quries';

export const HOUR = 1000 * 60 * 60;

const usePresenter = () => {
  const [upcomingRides, setUpcomingRides] = useState<Ride[]>([]);

  const user = useSelector((state: AuthState) => state.user);

  const getMyFutureRides = async () => {
    const unsubscribe = onSnapshot(
      ridesQueries.myFutureRides(user!.uid),
      (querySnapshot: any) => {
        let rides: Ride[] = [];
        querySnapshot.forEach((doc: any) => {
          const ride = doc.data() as Ride;
          rides.push(ride);
        });
        setUpcomingRides(rides);
        return () => unsubscribe();
      }
    );
  };

  useEffect(() => {
    getMyFutureRides();
  }, []);

  return {
    upcomingRides,
  };
};
export default usePresenter;
