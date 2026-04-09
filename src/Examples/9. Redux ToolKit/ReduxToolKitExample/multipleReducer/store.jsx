import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create counter slice
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

// Create message slice
const messageSlice = createSlice({
  name: "message",
  initialState: { message: "Hello, Redux Toolkit!" },
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;
export const { updateMessage } = messageSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    message: messageSlice.reducer,
  },
});

export default store;
