import { Location } from '../../typing';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

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
    onDonePressed,
    onLocationSelected,
  };
};
export default usePresenter;
