import { Point } from 'react-native-google-places-autocomplete';

export type Location = {
  formatted_address: string | undefined;
  location: Point | undefined;
};

export type User = {
  uid: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  profileImage?: string;
  phoneNumber?: string;
  address?: Location;
  facebookLink?: string;
  instagramLink?: string;
  birthDate?: number;
  facebookId?: string;
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
  senderId: string;
  content: string;
  timeStamp: number;
};

export type Conversation = {
  id: string;
  senderAId: string;
  senderBId: string;
  messages: Message[];
};

export type Gender = 'Male' | 'Female';

// export const deanId = '2hTc7yXcN4SoyyTbQbdLNgj0gwW2';
// export const adiId = 'zoCcYuPb9hQLQqavznIYAc2mYIL2';
// export const adi3Id = 'cRQaumXs9FeqfhDWUaKIipmzZ4x2';
// export const conversationId =
//   '2hTc7yXcN4SoyyTbQbdLNgj0gwW2zoCcYuPb9hQLQqavznIYAc2mYIL2';
// export const conversationId2 =
//   '2hTc7yXcN4SoyyTbQbdLNgj0gwW2cRQaumXs9FeqfhDWUaKIipmzZ4x2';
