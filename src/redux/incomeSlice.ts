import { createSlice } from "@reduxjs/toolkit";
import { add, edit, remove } from "./reducers";

const incomeSlice = createSlice({
  name: "income",
  initialState: [{ id: "", name: "", amount: 0, date: Date() }],
  reducers: {
    addIncome: add,
    removeIncome: remove,
    editIncome: edit,
  },
});

export const { addIncome, removeIncome, editIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
