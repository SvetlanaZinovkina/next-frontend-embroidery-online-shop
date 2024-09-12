import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../../types/store-types";

const initialState: Cart = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      state.total += item.price * item.quantity;
    },
    // Remove item from cart
    removeItemFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === itemId,
      );

      if (itemIndex !== -1) {
        state.total -=
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    // Clear the cart
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

// Export actions and reducer
export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
