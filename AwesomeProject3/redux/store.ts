import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
// import {reducer} from './reducer';

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
    }),
  reducer: rootReducer,
});
