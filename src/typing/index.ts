import { Point } from 'react-native-google-places-autocomplete';

export type Location = {
  formatted_address: string | undefined;
  location: Point | undefined;
};

export type User = {
  uid: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  profileImage?: string;
  phoneNumber?: string;
  address?: Location;
  facebookLink?: string;
  instagramLink?: string;
  birthDate?: number;
  gender?: Gender;
};

export type Ride = {
  rideId: string;
  userId: string;
  origin: Location;
  destination: Location;
  routeNumber: number;
  rideTimestamp: number;
  seats: number;
  price?: number;
  userImage?: string;
  hitchhikers: string[];
};

export type Message = {
  id: string;
  content: string;
  createdAt: Date;
  userId: string;
};

export type Gender = 'Male' | 'Female';
