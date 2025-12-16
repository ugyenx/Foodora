import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

appStore.subscribe(() => {
  localStorage.setItem("cartState", JSON.stringify(appStore.getState().cart));
});

export default appStore;
