import { navigationService } from '../../services';

const usePresenter = () => {
  const onDonePressed = () => {
    navigationService.pop();
  };
  return {
    onDonePressed,
  };
};
export default usePresenter;
