import { configureStore } from "@reduxjs/toolkit";
import incomeSlice from "./incomeSlice";
import invoiceSlice from "./invoiceSlice";

export const store = configureStore({
  reducer: {
    income: incomeSlice,
    invoice: invoiceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
