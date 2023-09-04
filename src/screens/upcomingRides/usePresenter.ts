import { useEffect, useState } from 'react';
import { ridesActions } from '../../actions';
import { Ride } from '../../typing';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { onSnapshot, query } from 'firebase/firestore';
import { ridesRef } from '../../config/firebase';

const usePresenter = () => {
  const [upcomingRides, setUpcomingRides] = useState<Ride[]>([]);

  const user = useSelector((state: AuthState) => state.user);

  const getMyFutureRides = async () => {
    const queryImages = query(ridesRef);
    const unsubscribe = onSnapshot(queryImages, (querySnapshot) => {
      let rides: Ride[] = [];
      querySnapshot.forEach((doc: any) => {
        const ride = doc.data() as Ride;
        if (new Date(ride.date) >= new Date() && ride.userId === user?.uid) {
          rides.push(doc.data() as Ride);
        }
      });
      setUpcomingRides(
        rides.sort((a, b) => {
          // @ts-ignore
          return new Date(a.date) - new Date(b.date);
        })
      );
      return () => unsubscribe();
    });
  };

  useEffect(() => {
    getMyFutureRides();
  }, []);

  const getUpcomingRides = async () => {
    const upcomingRides = await ridesActions.getUpcomingRides(user!.uid);
    setUpcomingRides(upcomingRides);
  };

  return {
    upcomingRides,
  };
};
export default usePresenter;
