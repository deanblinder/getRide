import { db, ridesRef } from '../config/firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { Ride } from '../typing';
import { Point } from 'react-native-google-places-autocomplete';

export const getUpcomingRides = async () => {
  return [];
};

export const addRide = async (ride: Ride) => {
  await setDoc(doc(ridesRef), ride);
};

export const isWithinRadius = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  radius: number
): boolean => {
  // Radius of the Earth in kilometers (mean value)
  const R = 7;

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
}): Promise<Ride[]> => {
  const RADIUS = 7;
  const querySnapshot = await getDocs(collection(db, 'rides'));
  const allRides = querySnapshot.docs.map((doc) => doc.data()) as Ride[];

  return allRides.filter((ride: Ride) => {
    return (
      isWithinRadius(
        ride.origin.location!.lat,
        ride.origin.location!.lng,
        rideDate.origin.lat,
        rideDate.origin.lng,
        RADIUS
      ) &&
      isWithinRadius(
        ride.destination.location!.lat,
        ride.destination.location!.lng,
        rideDate.destination.lat,
        rideDate.destination.lng,
        RADIUS
      )
    );
  });
};
