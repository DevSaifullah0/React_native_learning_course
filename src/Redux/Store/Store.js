import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Slice/CounterSlice";

const StoreData = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export default StoreData;