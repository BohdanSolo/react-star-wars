import { store } from "./store";
import {
  DARK_THEME,
  LIGHT_THEME,
  NEUTRAL_THEME,
} from "../constants/api-constants";

//General types for App State and Reducer
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Types for favoriteSlice

export interface FavoriteSliceTypes {
  favList: FavoriteArrTypes[];
}

export interface FavoriteArrTypes {
  [key: string]: {
    name: string | undefined;
    img: string | undefined;
  };
}

//Types for themeSlice

export interface ThemeSliceTypes {
  theme:
    | typeof LIGHT_THEME
    | typeof DARK_THEME
    | typeof NEUTRAL_THEME
}
