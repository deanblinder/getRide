import {
  and,
  or,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { ridesRef } from '../config/firebase';
import { HOUR } from '../screens/upcomingRides/usePresenter';
import { QueryDocumentSnapshot } from '@firebase/firestore';

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

export const futureRides = (
  userId: string,
  lastVisibleDoc: QueryDocumentSnapshot | null
) =>
  query(
    ridesRef,
    where('rideTimestamp', '>=', startTime),
    orderBy('rideTimestamp'),
    // where('userId', '!=', userId),
    limit(4),
    startAfter(lastVisibleDoc ?? null)
  );
