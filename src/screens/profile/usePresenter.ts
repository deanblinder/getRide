import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';

const usePresenter = () => {
  const user = useSelector((state: AuthState) => state.user);
  return { user };
};

export default usePresenter;
