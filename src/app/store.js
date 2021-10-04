import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../redux/reducer/';

export const store = configureStore({
  reducer: {
    reducer: dataReducer,
  },
});
