import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import type { Store as ReduxStore } from "redux";

import { countsApi } from "services/counts";
import { appSlice } from "slices/app.slice";
import { userSlice } from "slices/user.slice";

export const store = configureStore({
  reducer: combineReducers({
    app: appSlice.reducer,
    user: userSlice.reducer,
    [countsApi.reducerPath]: countsApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...[countsApi.middleware]),
});

setupListeners(store.dispatch);

export type ApplicationState = {
  app: ReturnType<typeof appSlice.reducer>;
  user: ReturnType<typeof userSlice.reducer>;
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = ReduxStore<ApplicationState>;
