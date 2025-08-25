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
      const newArr = state.items.map((obj, index) => {
        if (action.payload.name === obj.name) {
          if (obj.quantity > 1) {
            if (action.payload.increment) {
              return { ...obj, quantity: obj.quantity + 1 }
            }

            return { ...obj, quantity: obj.quantity - 1 }
          }
        }

        return { ...obj }
      })

      state.items = newArr
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
