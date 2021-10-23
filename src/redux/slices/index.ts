import { combineReducers } from 'redux';
import authReducer from './authSlice';
import navSortSlice from './navSort';
export * from './authSlice';

const rootReducer: any = combineReducers({
  auth: authReducer,
  navSort: navSortSlice.reducer,
});

export default rootReducer;
