import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favoriteSlice";
import themeReducer from "./slices/themeSlice";
import { setLocalStore } from "../utils/localStorage";

export const rootReducer = combineReducers({
  favorite: favoriteReducer,
  theme: themeReducer,
});

export const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
  setLocalStore("store", store.getState().favorite.favList);
});
