import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const usePresenter = (props: any) => {
  const dispatch = useDispatch();

  const showFindRideScreen = () => {
    navigationService.push(screenIds.OFFER_RIDES_OR_EDIT_RIDES_SCREEN);
  };

  const showSearchRideScreen = () => {
    navigationService.push(screenIds.SEARCH_RIDE_SCREEN);
  };

  useEffect(() => {
    // getLocationAsync();
  }, []);

  return {
    showFindRideScreen,
    showSearchRideScreen,
  };
};

export default usePresenter;
