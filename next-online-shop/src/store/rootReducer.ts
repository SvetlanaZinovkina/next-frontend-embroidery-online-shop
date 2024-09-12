import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import langReducer from "./slices/langSlice";

export const reducers = {
  user: userReducer,
  cart: cartReducer,
  lang: langReducer,
};
