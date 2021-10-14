import { combineReducers } from 'redux';
import authReducer from './authSlice';
import pawnShopSlice from './pawnShopSlice';

export * from './authSlice';

const rootReducer: any = combineReducers({
  auth: authReducer,
  pawnShop: pawnShopSlice.reducer,
});

export default rootReducer;
