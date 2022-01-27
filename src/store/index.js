import { createSlice, configureStore } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      console.log(current(state.items));
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      let additionalItemsSum = 0;

      if (existingCartItem) {
        // check if existing cart item has additional items selected
        if (existingCartItem.selectedAdditionalItems) {
          additionalItemsSum = existingCartItem.selectedAdditionalItems.reduce(
            (previousValue, currentValue) => {
              return previousValue + currentValue.price;
            },
            0
          );
        }
        console.log(additionalItemsSum * action.payload.amount);
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
        state.totalAmount +
        action.payload.price * action.payload.amount +
        additionalItemsSum * action.payload.amount;
    },
    removeItem(state, action) {
      // sum for the additional items for each cart item
      let additionalItemsSum = 0;

      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload;
      });
      const existingItem = state.items[existingCartItemIndex];

      // check if existing cart item has additional items and then find the sum
      if (existingItem.selectedAdditionalItems) {
        additionalItemsSum = existingItem.selectedAdditionalItems.reduce(
          (previousValue, currentValue) => {
            return previousValue + currentValue.price;
          },
          0
        );
      }

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
      state.totalAmount =
        state.totalAmount - existingItem.price - additionalItemsSum;

      // round totalAmount to 0
      if (state.totalAmount < 0) {
        state.totalAmount = 0;
      }
    },
    addItemAdditional(state, action) {
      let sumAdditional = 0;
      let updatedItems;
      // loop through each cart item in the Cart
      state.items.forEach((cartItem, existingCartItemIndex) => {
        const existingCartItem = state.items[existingCartItemIndex];
        cartItem.additional.forEach((additionalItem) => {
          if (additionalItem.id === action.payload.id) {
            const updatedCartItem = {
              ...existingCartItem,
            };
            updatedCartItem.selectedAdditionalItems = [
              ...updatedCartItem.selectedAdditionalItems,
              action.payload,
            ];
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedCartItem;
            sumAdditional = cartItem.amount * action.payload.price;
          }
        });
      });
      state.items = updatedItems;
      state.totalAmount = state.totalAmount + sumAdditional;
    },
    removeItemAdditional(state, action) {
      let sumAdditional = 0;
      let updatedItems;
      // loop through each cart item in the Cart
      state.items.forEach((cartItem, existingCartItemIndex) => {
        const existingCartItem = state.items[existingCartItemIndex];
        cartItem.selectedAdditionalItems.forEach(
          (additionalItem, additionalItemIndex) => {
            if (additionalItem.id === action.payload) {
              let updatedCartItem = { ...existingCartItem };
              updatedCartItem.selectedAdditionalItems.splice(
                additionalItemIndex,
                1
              );
              updatedItems = [...state.items];
              updatedItems[existingCartItemIndex] = updatedCartItem;
              sumAdditional = cartItem.amount * additionalItem.price;
            }
          }
        );
      });
      state.items = updatedItems;
      state.totalAmount = state.totalAmount - sumAdditional;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
