import { createSlice } from '@reduxjs/toolkit';
import { IPages } from '../Types';

const initialState: IPages = {
  pages: [
    {
      api: '/',
      title: 'Home',
    },
    {
      api: '/on-company',
      title: 'On Company',
    },
    {
      api: '/til',
      title: 'TIL',
      subTitle: 'Today I Learn',
    },
  ],
};

const pageSlice = createSlice({
  name: 'pageSlice',
  initialState,
  reducers: {},
});

export default pageSlice.reducer;
