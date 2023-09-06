import React from 'react';
import { navigationService } from '../../services';
import { useNavigation } from '@react-navigation/native';
import { screenIds } from '../../constants';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { Props } from '../searchOrigin/usePresenter';

const usePresenter = (props: Props) => {
  const navigation = useNavigation();

  const onLocationSelected = (origin: GooglePlaceDetail | null) => {
    const location = {
      location: origin?.geometry.location,
      formatted_address: origin?.formatted_address,
    };
    props?.route.params.getLocations(location);
  };

  const onDonePressed = () => {
    props.navigation.reset({
      routes: [{ name: screenIds.HOME_SCREEN }],
    });
    navigation.goBack();
  };
  return {
    onDonePressed,
    onLocationSelected,
  };
};

export default usePresenter;
