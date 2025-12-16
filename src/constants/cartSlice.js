import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return { items: [], restaurant: null };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { items: [], restaurant: null };
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState(),
  reducers: {
    addItem: (state, action) => {
      // action.payload structure: { item: itemData, restaurant: restaurantInfo }
      // If payload is just item (legacy/fallback), handle it.

      const item = action.payload.item || action.payload; // fallback if simplified payload
      const restaurant = action.payload.restaurant || null;

      if (restaurant) {
        state.restaurant = restaurant;
      }

      // Check if item already exists
      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }

      // If cart becomes empty, maybe clear restaurant? Optional.
      if (state.items.length === 0) {
        state.restaurant = null;
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      state.restaurant = null;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

