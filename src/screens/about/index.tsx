import React from 'react';
import { View, Text } from 'native-base';
import { Linking, TouchableOpacity } from 'react-native';

const About = () => {
  const onEmailPress = async () => {
    const url = 'mailto:deanblinder91@gmail.com';
    await Linking.openURL(url);
  };

  return (
    <View padding={'5%'} backgroundColor={'white'} height={'100%'}>
      <Text fontSize={'lg'}>
        Hello Riders,{'\n'}this is an app that helps people find and offer
        rides.{'\n'} if you have any questions any feedback please send me a
        mail, i would like to hear.{'\n'}
        Dean Blinder
        <TouchableOpacity onPress={onEmailPress}>
          <Text fontSize={'lg'}>deanblinder91@gmail.com</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};
export default About;
