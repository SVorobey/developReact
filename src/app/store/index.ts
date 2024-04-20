import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from '@entities/calendar/model';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;