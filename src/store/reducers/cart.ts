import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Produto } from "../../pages/Restaurant";

type CartState = {
  items: Produto[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const produto = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.restauranteId === action.payload.restauranteId,
      );

      if (produto) {
        alert("O prato já está no carrinho");
        return;
      }

      if (state.items.length >= 3) {
        alert("O carrinho permite apenas 3 pratos");
        return;
      }

      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, open, close, remove } = cartSlice.actions;
export default cartSlice.reducer;
