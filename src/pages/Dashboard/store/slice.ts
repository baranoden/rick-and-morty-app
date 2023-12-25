import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};
const dashboardSlice = createSlice({
  name: 'dashboardSlice',
  initialState: initialState,
  reducers: {
    getData: (state, action) => {},
  },
});
export const { getData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
