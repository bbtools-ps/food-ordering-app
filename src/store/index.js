import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      state.items = updatedItems;
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
    },
    removeItem(state, action) {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload;
      });
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => {
          return item.id !== action.payload;
        });
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

// const initialState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// export const counterActions = counterSlice.actions;

export default store;
