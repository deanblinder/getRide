import React from 'react';

import { Spinner, View } from 'native-base';
import LottieView from 'lottie-react-native';

import lottie from '../../../assets/lottie/animation_lnt89a60.json';

const SplashScreen = () => {
  return (
    <View justifyContent={'center'} alignItems={'center'} flex={1}>
      <LottieView
        style={{ width: '100%', height: '100%', padding: '10%' }}
        source={lottie}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;
