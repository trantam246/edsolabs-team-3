import { createSlice } from '@reduxjs/toolkit';

const navSortSlice = createSlice({
  name: 'navSort',
  initialState: { active: '' } as any,
  reducers: {
    toggle(state, action: any) {
      state.active = action.payload;
    },
  },
});
export const navSortAction = navSortSlice.actions;
export default navSortSlice;
