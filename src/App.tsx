import React from 'react';
import GetRide from './getRide';
import store from './store';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import {
  NativeBaseProvider,
  extendTheme,
  // useColorMode,
  // useColorModeValue,
  // useAccessibleColors,
} from 'native-base';

export default function App() {
  const theme = extendTheme({
    colors: {
      // primary: '33B8FF',
    },
  });

  // const { toggleColorMode, colorMode } = useColorMode();
  // const backgroundColor = useColorModeValue('warmGray.50', 'coolGray.800');

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <GetRide />
      </NativeBaseProvider>
    </Provider>
  );
}
registerRootComponent(App);
