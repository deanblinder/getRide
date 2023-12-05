import { View, Text } from 'native-base';
import React from 'react';
import ListItem from '../../components/ListItem';
import usePresenter from './usePresenter';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { onAboutPress, onLanguagesPress } = usePresenter();
  const { t } = useTranslation();

  return (
    <View paddingTop={'2%'} backgroundColor={'white'} flex={1}>
      <ListItem
        icon={'info-outline'}
        title={t('SETTINGS_PAGE.ABOUT')}
        onPress={onAboutPress}
      />
      <ListItem
        icon={'language'}
        title={t('SETTINGS_PAGE.LANGUAGES')}
        onPress={onLanguagesPress}
        showDivider={false}
      />
    </View>
  );
};
export default Settings;
