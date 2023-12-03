import { View, Text } from 'native-base';
import React from 'react';
import ListItem from '../../components/ListItem';
import usePresenter from './usePresenter';

const Settings = () => {
  const { onAboutPress, onLanguagesPress } = usePresenter();

  return (
    <View paddingTop={'2%'} backgroundColor={'white'} flex={1}>
      <ListItem icon={'info-outline'} title={'about'} onPress={onAboutPress} />
      {/*<ListItem*/}
      {/*  icon={'language'}*/}
      {/*  title={'languages'}*/}
      {/*  onPress={onAboutPress}*/}
      {/*  showDivider={false}*/}
      {/*/>*/}
    </View>
  );
};
export default Settings;
