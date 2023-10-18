import { useEffect, useState } from 'react';
import { Ride } from '../../typing';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { onSnapshot } from 'firebase/firestore';
import { ridesQueries } from '../../../src/quries';

const usePresenter = () => {
  const [upcomingRides, setUpcomingRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
        return () => unsubscribe();
      }
    );
  };

  useEffect(() => {
    getMyFutureRides();
  }, []);

  return {
    upcomingRides,
    loading,
  };
};
export default usePresenter;
