import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      console.log("remove item from cart:", action.payload);
      const itemsCopy = state.items.filter(item => item.name !== action.payload.name)
      state.items = itemsCopy;
    },
    updateQuantity: (state, action) => {
      state.items = state.items.map((obj) => {
        if (action.payload.name === obj.name) {
          if (obj.quantity >= 1) {
            if (action.payload.increment) {
              return { ...action.payload, quantity: action.payload.quantity + 1 }
            } else if (!action.payload.increment && action.payload.quantity > 1) {
              return { ...action.payload, quantity: action.payload.quantity - 1 }
            }
          }
        }

        return { ...action.payload }
      })
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
