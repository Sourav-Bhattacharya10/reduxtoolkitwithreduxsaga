import { combineReducers } from 'redux';

import userReducer from './slice';

const rootReducer = combineReducers({
    users: userReducer
});

export default rootReducer;