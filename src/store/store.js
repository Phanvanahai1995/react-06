import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSilce";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
