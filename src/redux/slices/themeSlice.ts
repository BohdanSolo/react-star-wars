import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeSliceTypes } from "../reduxTypes";
import {
  DARK_THEME,
  LIGHT_THEME,
  NEUTRAL_THEME,
} from "../../constants/api-constants";
import {changeScssVariables} from "../../services/changeScssVariables";

const initialState: ThemeSliceTypes = {
  theme: "DARK_THEME",
};
export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    changeTheme(
      state,
      action: PayloadAction<
        | typeof LIGHT_THEME
        | typeof DARK_THEME
        | typeof NEUTRAL_THEME
      >
    ) {
      changeScssVariables(action.payload);
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
