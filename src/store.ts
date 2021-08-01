import { configureStore } from '@reduxjs/toolkit';
import page from './Slices/page';

const store = configureStore({
  reducer: {
    page,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
