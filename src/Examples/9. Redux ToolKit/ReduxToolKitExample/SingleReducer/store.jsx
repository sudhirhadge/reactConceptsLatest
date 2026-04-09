import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Create store
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
