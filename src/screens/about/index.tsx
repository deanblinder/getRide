import React from 'react';
import { View, Text } from 'native-base';
import { Linking, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const About = () => {
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
        Hello Riders,{'\n'}this is an that made in my personal time.{'\n'}if you
        have any questions any feedback please DM and Email or LinkedIn i would
        like to hear any feed back.{'\n'}
        Dean Blinder{'\n'}
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
