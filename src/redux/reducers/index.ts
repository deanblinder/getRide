import { combineReducers } from 'redux';
import authReducer from '../auth/authReducer'; // Import your specific reducers

const rootReducer = combineReducers({
  authReducer: authReducer, // Add your reducers here
  // Add more reducers if needed
});

export default rootReducer;
