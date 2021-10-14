import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};
const pawnShopSlice = createSlice({
  name: 'pawnShop',
  initialState,
  reducers: {
    getPawnShop(state, action) {
      state.data = action.payload;
    },
  },
});
export const pawnShopAction = pawnShopSlice.actions;
export default pawnShopSlice;
