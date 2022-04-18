import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FavoriteArrTypes, FavoriteSliceTypes} from "../reduxTypes";
import {getLocalStore} from "../../utils/localStorage";

const initialState: FavoriteSliceTypes = {
  favList: getLocalStore('store').length > 0 ? getLocalStore('store') : [] ,
};
export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addPersonToFavorite: (state, action: PayloadAction<FavoriteArrTypes>) => {
      state.favList.push(action.payload)
      console.log(getLocalStore('store').length);
    },
    removePersonToFavorite: (state, action: PayloadAction<number>) => {
       state.favList = state.favList?.filter(item => +Object.keys(item) !== +action.payload)
    },
  },
});

export const { addPersonToFavorite, removePersonToFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
