import React from "react";
import App from "./index";
import store from './store';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';

export default function GetRide () {

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}
registerRootComponent(GetRide);