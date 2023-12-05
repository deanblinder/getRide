import { useNavigation } from '@react-navigation/native';
import { screenIds } from '../../constants';

const usePresenter = () => {
  const navigation = useNavigation();

  const onAboutPress = () => {
    // @ts-ignore
    navigation.navigate(screenIds.ABOUT_SCREEN);
  };

  const onLanguagesPress = () => {
    // @ts-ignore
    navigation.navigate(screenIds.LANGUAGE_SCREEN);
  };

  return { onAboutPress, onLanguagesPress };
};
export default usePresenter;
