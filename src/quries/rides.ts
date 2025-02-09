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
import { QueryDocumentSnapshot } from '@firebase/firestore';

const HOUR = 1000 * 60 * 60;

const startTime = Date.now() - HOUR * 24;
const endTime = Date.now() + HOUR * 24 * 2;

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
    where('rideTimestamp', '<=', endTime),
    orderBy('rideTimestamp'),
    // where('userId', '!=', userId),
    limit(10),
    startAfter(lastVisibleDoc ?? null)
  );
