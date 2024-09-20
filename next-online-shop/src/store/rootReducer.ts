import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import langReducer from "./slices/langSlice";
import categoriesReducer from "./slices/categorySlice";

export const reducers = {
  user: userReducer,
  cart: cartReducer,
  lang: langReducer,
  categories: categoriesReducer,
};
