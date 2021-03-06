import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { emptySplitLastFmApi } from 'services/lastFm/lastFm';

export const store = configureStore({
  reducer: {
    [emptySplitLastFmApi.reducerPath]: emptySplitLastFmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitLastFmApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
