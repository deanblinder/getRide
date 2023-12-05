import React from 'react';
import GetRide from './getRide';
import store from './store';
import { Provider } from 'react-redux';
// import { registerRootComponent } from 'expo';
import 'expo-asset';

import { NativeBaseProvider, extendTheme } from 'native-base';
import { useFonts } from '@expo-google-fonts/inter';
import './config/localization/i18n';

export default function App() {
  useFonts({
    'Roboto-Italic': require('../assets/fonts/Roboto/Roboto-Italic.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
    'PermanentMarker-Regular': require('../assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf'),
  });

  const theme = extendTheme({
    colors: {
      // primary: '33B8FF',
    },
  });

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <GetRide />
      </NativeBaseProvider>
    </Provider>
  );
}
