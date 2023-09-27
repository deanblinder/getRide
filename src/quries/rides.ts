import { and, or, query, where, orderBy } from 'firebase/firestore';
import { ridesRef } from '../config/firebase';
import { HOUR } from '../screens/upcomingRides/usePresenter';

const startTime = Date.now() - HOUR * 24;

export const myFutureRides = (userId: string) =>
  query(
    ridesRef,
    and(
      or(
        where('userId', '==', userId),
        where('hitchhikers', 'array-contains', userId)
      ),
      where('rideTimestamp', '>=', startTime)
    )
  );

export const futureRides = (userId: string) =>
  query(
    ridesRef,
    where('rideTimestamp', '>=', startTime),
    orderBy('rideTimestamp')
  );
