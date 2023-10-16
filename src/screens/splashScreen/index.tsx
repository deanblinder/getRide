import React from "react";

import { Spinner, View} from "native-base";
// import LottieView from 'lottie-react-native';

// const lottie = require('../../../assets/lottie/animation_lnt89a60.json')

const SplashScreen = () => {
    return (
        <View flex justifyContent={'center'} alignItems={'center'}>
            <Spinner size={'lg'}/>
                {/*<LottieView*/}
                {/*    style={{width:'100%',height:'100%'}}*/}
                {/*    source={lottie}*/}
                {/*    autoPlay*/}
                {/*    loop*/}
                {/*/>*/}
        </View>
    )
}

export default SplashScreen
