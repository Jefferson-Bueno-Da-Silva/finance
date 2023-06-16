import { createSlice } from "@reduxjs/toolkit";
import { add, edit, remove } from "./reducers";
import { ListData } from "../interfaces";

const incomeSlice = createSlice({
  name: "income",
  initialState: [] as ListData[],
  reducers: {
    addIncome: add,
    removeIncome: remove,
    editIncome: edit,
  },
});

export const { addIncome, removeIncome, editIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
