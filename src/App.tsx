import React from 'react';
import GetRide from './getRide';
import store from './store';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import 'expo-asset';

import { NativeBaseProvider, extendTheme } from 'native-base';

export default function App() {
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
registerRootComponent(App);
