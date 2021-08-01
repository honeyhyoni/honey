import { createSlice } from '@reduxjs/toolkit';
import { IPages } from '../Types';

const initialState: IPages = {
  pages: [
    {
      api: '/',
      label: 'Home',
    },
    {
      api: '/on-company',
      label: 'On Company',
    },
  ],
};

const pageSlice = createSlice({
  name: 'pageSlice',
  initialState,
  reducers: {},
});

export default pageSlice.reducer;
