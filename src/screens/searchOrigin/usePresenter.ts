import { navigationService } from '../../services';
import { Location } from '../../typing';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';

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
  const onDonePressed = () => {
    navigationService.pop();
  };
  const onLocationSelected = (origin: GooglePlaceDetail | null) => {
    console.log('onLocationSelected', origin);
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
