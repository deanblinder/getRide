import { useNavigation } from '@react-navigation/native';
import {
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import { Props } from '../searchOrigin/usePresenter';
import { useEffect, useRef } from 'react';

const usePresenter = (props: Props) => {
  const navigation = useNavigation();

  const inputRef = useRef<GooglePlacesAutocompleteRef | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onLocationSelected = (origin: GooglePlaceDetail | null) => {
    const location = {
      location: origin?.geometry.location,
      formatted_address: origin?.formatted_address,
    };
    props?.route.params.getLocations(location);
  };

  const onDonePressed = () => {
    navigation.goBack();
  };
  return {
    inputRef,
    onDonePressed,
    onLocationSelected,
  };
};

export default usePresenter;
