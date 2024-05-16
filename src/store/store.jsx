import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../slices/event';

const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});

export default store;