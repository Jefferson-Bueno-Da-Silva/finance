import { createSlice } from "@reduxjs/toolkit";
import { add, edit, remove } from "./reducers";
import { ListData } from "../interfaces";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: [] as ListData[],
  reducers: {
    addInvoice: add,
    removeInvoice: remove,
    editInvoice: edit,
  },
});

export const { addInvoice, removeInvoice, editInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
