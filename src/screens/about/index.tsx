import React from 'react';
import { View, Text } from 'native-base';
import { Linking, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const onEmailPress = async () => {
    const url = 'mailto:deanblinder91@gmail.com';
    await Linking.openURL(url);
  };

  const onLinkedInPressed = async () => {
    await Linking.openURL(
      'https://www.linkedin.com/in/dean-blinder-1276a31a9/'
    );
  };

  return (
    <View padding={'5%'} backgroundColor={'white'} height={'100%'}>
      <Text fontSize={'lg'} fontFamily={'Roboto-Regular'}>
        {t('ABOUT_PAGE.CONTENT')}
        <>
          <TouchableOpacity
            onPress={onEmailPress}
            style={{ marginBottom: '10%' }}
          >
            <Text fontSize={'lg'}>deanblinder91@gmail.com</Text>
          </TouchableOpacity>
        </>
      </Text>
      <TouchableOpacity onPress={onLinkedInPressed}>
        <AntDesign name={'linkedin-square'} size={44} />
      </TouchableOpacity>
    </View>
  );
};
export default About;
