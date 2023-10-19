import { legacy_createStore as createStore } from 'redux';

import authReducer from '../redux/auth/authReducer';

// @ts-ignore
export default createStore(authReducer);
