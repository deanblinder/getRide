import { db } from '../config/firebase';
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

export const getUpcomingRides = async (userId: string) => {
  const querySnapshot = await getDocs(collection(db, 'rides'));
  const allRides = querySnapshot.docs.map((doc) => doc.data()) as Ride[];
  return allRides.filter(
    (ride) => new Date(ride.date) >= new Date() && ride.userId === userId
  );
};

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

export const getRides = async (rideDate: {
  date: Date;
  time: Date;
  origin: Point;
  destination: Point;
  radius: number;
}): Promise<Ride[]> => {
  const querySnapshot = await getDocs(collection(db, 'rides'));
  const allRides = querySnapshot.docs.map((doc) => doc.data()) as Ride[];

  return allRides.filter((ride: Ride) => {
    return (
      isWithinRadius(
        ride.origin.location!.lat,
        ride.origin.location!.lng,
        rideDate.origin.lat,
        rideDate.origin.lng,
        rideDate.radius
      ) &&
      isWithinRadius(
        ride.destination.location!.lat,
        ride.destination.location!.lng,
        rideDate.destination.lat,
        rideDate.destination.lng,
        rideDate.radius
      )
    );
  });
};
