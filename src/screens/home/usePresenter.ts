import { navigationService } from '../../services';
import { screenIds } from '../../constants';
import { useDispatch } from 'react-redux';
// import { logout } from '../../redux/auth/authActions';


const usePresenter = () => {
  const showFindRideScreen = () => {
    navigationService.push(screenIds.FIND_RIDE_SCREEN);
  };

  const showSearchRideScreen = () => {
    navigationService.push(screenIds.SEARCH_RIDE_ORIGIN_SCREEN);
  };

  const dispatch = useDispatch();


  // const handleLogout = () => {
  //   dispatch(logout());
  // };
  
  return {
    showFindRideScreen,
    showSearchRideScreen,
  };
};

export default usePresenter;
