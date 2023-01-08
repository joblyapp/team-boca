import { configureStore } from '@reduxjs/toolkit';
import user from '../redux/slices/userSlice'

export const store = configureStore({
  reducer: {
    user: user,
  },
});
