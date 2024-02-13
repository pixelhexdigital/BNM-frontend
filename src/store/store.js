import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";

import AuthSlice from "./AuthSlice";
import ProfileSlice from "./ProfileSlice";
import ChatSlice from "./ChatSlice";
import MessageSlice from "./MessageSlice";
import PostSlice from "./PostSlice";
import ConnectionSlice from "./ConnectionSlice";

const reducers = combineReducers({
  Auth: AuthSlice,
  Chat: ChatSlice,
  Profile: ProfileSlice,
  Message: MessageSlice,
  Post: PostSlice,
  Connection: ConnectionSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  version: 1,
  whitelist: ["Auth"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});
