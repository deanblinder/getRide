import React from "react";
import {View, Text} from "native-base";
import LottieView from 'lottie-react-native';

const lottie = require('../../../assets/lottie/animation_lnt89a60.json')

const SplashScreen = () => {
    return (
        <View marginTop={'20%'} justifyContent={'center'} alignItems={'center'}>
            <LottieView
                style={{width:'100%',height:'100%'}}
                source={lottie}
                autoPlay
                loop
            ></LottieView>
            <Text></Text>
        </View>
    )
}

export default SplashScreen
