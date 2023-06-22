import { Point } from 'react-native-google-places-autocomplete';

export type Location = {
  location: Point | undefined;
  formatted_address: string | undefined;
};
