import React from 'react';
import { View, Text, ScrollView } from 'native-base';
import { Linking, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import AboutParagraph from './aboutParagraph';

const About = () => {
  const { t, i18n } = useTranslation();

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
    <ScrollView padding={'5%'} backgroundColor={'white'} height={'100%'}>
      <Text
        textAlign={i18n.language === 'he' ? 'right' : 'left'}
        fontSize={'xl'}
        fontFamily={'Roboto-Bold'}
        marginBottom={'2%'}
      >
        {t('ABOUT_PAGE.TITLE')}
      </Text>
      <AboutParagraph
        title={'ABOUT_PAGE.RIDE_TOGETHER_TITLE'}
        subtitle={'ABOUT_PAGE.RIDE_TOGETHER_SUBTITLE'}
        icon={'car'}
      />
      <AboutParagraph
        title={'ABOUT_PAGE.WHY_GET_TREMP_TITLE'}
        subtitle={'ABOUT_PAGE.WHY_GET_TREMP_SUBTITLE'}
        icon={'questioncircleo'}
      />
      <AboutParagraph
        title={'ABOUT_PAGE.CONNECT_ME_TITLE'}
        subtitle={'ABOUT_PAGE.CONNECT_ME_SUBTITLE'}
        icon={'mail'}
      />
      <View flexDirection={'row'} marginTop={'2%'}>
        <Text fontSize={'lg'} fontFamily={'Roboto-Regular'}>
          Email:{' '}
        </Text>
        <>
          <TouchableOpacity onPress={onEmailPress}>
            <Text fontFamily={'Roboto-Regular'} fontSize={'lg'}>
              deanblinder91@gmail.com
            </Text>
          </TouchableOpacity>
        </>
      </View>
      <View flexDirection={'row'}>
        <Text fontFamily={'Roboto-Regular'} fontSize={'lg'}>
          LinkedIn:{' '}
        </Text>
        <TouchableOpacity onPress={onLinkedInPressed}>
          <AntDesign name={'linkedin-square'} size={25} color={'blue'} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default About;
