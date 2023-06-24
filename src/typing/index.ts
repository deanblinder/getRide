import { Point } from 'react-native-google-places-autocomplete';

export type Location = {
  formatted_address: string | undefined;
  location: Point | undefined;
};
