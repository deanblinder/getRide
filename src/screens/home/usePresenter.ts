import { navigationService } from '../../services';
import { screenIds } from '../../constants';

const usePresenter = () => {
  const showFindRideScreen = () => {
    navigationService.push(screenIds.FIND_RIDE_SCREEN);
  };
  const showSearchRideScreen = () => {
    navigationService.push(screenIds.SEARCH_RIDE_SCREEN);
  };

  return {
    showFindRideScreen,
    showSearchRideScreen,
  };
};

export default usePresenter;
