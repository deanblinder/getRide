import React from 'react';
import { View } from 'native-base';
import ListItem from '../../components/ListItem';
import { useTranslation } from 'react-i18next';
import usePresenter from './usePresenter';

const LanguagesScreen = () => {
  const { t } = useTranslation();
  const { currentLang, onLanguageChange } = usePresenter();

  return (
    <View backgroundColor={'white'} flex={1}>
      <ListItem
        title={t('LANGUAGE_SELECT.HEBREW')}
        showChevron={false}
        onPress={() => onLanguageChange('he')}
        showCheck={currentLang === 'he'}
      />
      <ListItem
        title={t('LANGUAGE_SELECT.ENGLISH')}
        showChevron={false}
        onPress={() => onLanguageChange('en')}
        showCheck={currentLang === 'en'}
      />
    </View>
  );
};
export default LanguagesScreen;
