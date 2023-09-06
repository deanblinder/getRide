import React from 'react';
import GetRide from './getRide';
import store from './store';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <GetRide />
      </NativeBaseProvider>
    </Provider>
  );
}
registerRootComponent(App);
