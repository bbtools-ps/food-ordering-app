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
      const updatedItems = state.items.concat(action.payload.item);
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.item.amount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    },
    removeItem(state) {
      return;
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
