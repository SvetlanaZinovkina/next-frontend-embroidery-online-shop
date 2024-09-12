import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageState } from "../../types/store-types";

const initialState: LanguageState = {
  lang: "ru",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

// Export the action and reducer
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
