import { legacy_createStore as createStore } from "redux"

import authReducer from "../redux/auth/authReducer"

export default createStore(authReducer)