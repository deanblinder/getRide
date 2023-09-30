import { db, ridesRef } from '../config/firebase';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { Ride } from '../typing';
import { Point } from 'react-native-google-places-autocomplete';
import { ridesQueries } from '../quries';
import { QueryDocumentSnapshot } from '@firebase/firestore';

export const addRide = async (ride: Ride) => {
  const newRideRef = doc(db, 'rides', ride.rideId);
  await setDoc(newRideRef, ride);
};

export const updateRide = async (rideId: string, props: Partial<Ride>) => {
  const rideToUpdateRef = doc(db, 'rides', rideId);
  await updateDoc(rideToUpdateRef, {
    ...props,
  });
};

export const deleteRide = async (rideId: string) => {
  const rideToDeleteRef = doc(db, 'rides', rideId);
  await deleteDoc(rideToDeleteRef);
};

export const getFutureRides = async (rideData: {
  date: number;
  origin: Point;
  destination: Point;
  radius: number;
  userId: string;
  lastVisibleDoc: QueryDocumentSnapshot | null;
}): Promise<{
  allRides: Ride[];
  lastVisible: QueryDocumentSnapshot | null;
}> => {
  try {
    const futureRidesQuery = ridesQueries.futureRides(
      rideData.userId,
      rideData.lastVisibleDoc
    );

    const querySnapshot = await getDocs(futureRidesQuery);

    let rides: Ride[] = [];
    querySnapshot.forEach((doc) => {
      const ride = doc.data() as Ride;
      rides.push(ride);
    });
    const allRides = rides.filter((ride: Ride) => {
      return (
        ride.userId !== rideData.userId &&
        isWithinRadius(
          ride.origin.location!.lat,
          ride.origin.location!.lng,
          rideData.origin.lat,
          rideData.origin.lng,
          rideData.radius
        ) &&
        isWithinRadius(
          ride.destination.location!.lat,
          ride.destination.location!.lng,
          rideData.destination.lat,
          rideData.destination.lng,
          rideData.radius
        )
      );
    });
    return {
      allRides,
      lastVisible:
        querySnapshot.docs[querySnapshot.docs.length - 1] ??
        rideData.lastVisibleDoc,
    };
  } catch (error) {
    console.error(error);
    return {
      allRides: [],
      lastVisible: null,
    };
  }
};

export const isWithinRadius = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  radius: number
): boolean => {
  // Radius of the Earth in kilometers (mean value)
  const R = 6371.0;

  // Convert latitude and longitude from degrees to radians
  const radLat1 = (Math.PI * lat1) / 180;
  const radLon1 = (Math.PI * lon1) / 180;
  const radLat2 = (Math.PI * lat2) / 180;
  const radLon2 = (Math.PI * lon2) / 180;

  // Haversine formula
  const dLon = radLon2 - radLon1;
  const dLat = radLat2 - radLat1;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance <= radius;
};
