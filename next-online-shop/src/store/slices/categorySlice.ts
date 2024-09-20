import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState } from "../../types/store-types";
import { Category } from "../../types/types";

const initialState: CategoriesState = {
  categories: [],
  activeCategory: null,
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setActiveCategory, setCategories } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
