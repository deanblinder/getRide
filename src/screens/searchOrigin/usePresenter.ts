import { Location } from '../../typing';
import {
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';

export type Props = {
  route: {
    params: {
      getLocations: (location: Location | undefined) => void;
    };
  };
  navigation: {
    reset: (props: { routes: { name: string }[] }) => void;
  };
};

const usePresenter = (props: Props) => {
  const navigation = useNavigation();

  const inputRef = useRef<GooglePlacesAutocompleteRef | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onDonePressed = () => {
    navigation.goBack();
  };

  const onLocationSelected = (origin: GooglePlaceDetail | null) => {
    const location = {
      location: origin?.geometry.location,
      formatted_address: origin?.formatted_address,
    };
    props?.route.params.getLocations(location);
  };

  return {
    inputRef,
    onDonePressed,
    onLocationSelected,
  };
};
export default usePresenter;
