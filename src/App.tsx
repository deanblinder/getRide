import React from "react";
import App from "./index";
import store from './store';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import {NativeBaseProvider} from 'native-base';

export default function GetRide () {

    return (
        <Provider store={store}>
            <NativeBaseProvider>
            <App/>
            </NativeBaseProvider>
        </Provider>
    );
}
registerRootComponent(GetRide);