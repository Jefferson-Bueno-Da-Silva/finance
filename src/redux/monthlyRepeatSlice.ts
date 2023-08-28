import { createSlice } from "@reduxjs/toolkit";
import { Income, Invoice } from "../interfaces/listData";
import { Action } from "../interfaces";

type monthlyRepeat = {
  incomes?: Income[];
  invoices?: Invoice[];
};

const add: Action<monthlyRepeat, { income?: Income; invoice?: Invoice }> = (
  state,
  { payload }
) => {
  if (payload?.income) {
    const incomes = state?.incomes || [];
    return {
      ...state,
      incomes: [...incomes, payload.income],
    };
  }

  if (payload?.invoice) {
    const invoices = state?.invoices || [];
    return {
      ...state,
      invoices: [...invoices, payload.invoice],
    };
  }

  return state;
};

const monthlyRepeatSlice = createSlice({
  name: "monthlyRepeat",
  initialState: { incomes: [], invoices: [] } as monthlyRepeat,
  reducers: {
    addMonthlyRepeat: add,
  },
});

export const { addMonthlyRepeat } = monthlyRepeatSlice.actions;
export default monthlyRepeatSlice.reducer;
