import { createSlice } from "@reduxjs/toolkit";
import { Action } from "../interfaces";
import ListData, { Income, Invoice, TypeData } from "../interfaces/listData";
import moment from "moment";

const initialState = {
  2023: {
    6: {
      incomes: [],
      invoices: [],
    },
  },
};

type transactions = {
  [year: string]: {
    [month: string]: {
      incomes: Income[];
      invoices: Invoice[];
    };
  };
};

const getTransactions = (state: transactions, year: string, month: string) => {
  const invoices = state?.[year]?.[month]?.invoices || [];
  const incomes = state?.[year]?.[month]?.incomes || [];
  return { incomes, invoices };
};

const add: Action<transactions, { income?: Income; invoice?: Invoice }> = (
  state,
  { payload }
) => {
  if (payload?.income) {
    const year = moment(payload.income.date).year().toString();
    const month = moment(payload.income.date).month().toString();
    const { incomes, invoices } = getTransactions(state, year, month);

    return {
      ...state,
      [year]: {
        ...state[year],
        [month]: {
          incomes: [...incomes, payload.income],
          invoices,
        },
      },
    };
  }

  if (payload?.invoice) {
    const year = moment(payload.invoice.date).year().toString();
    const month = moment(payload.invoice.date).month().toString();
    const { incomes, invoices } = getTransactions(state, year, month);

    return {
      ...state,
      [year]: {
        ...state[year],
        [month]: {
          incomes,
          invoices: [...invoices, payload.invoice],
        },
      },
    };
  }

  return state;
};

type payloadTransactions = ListData & {
  year: string;
  month: string;
  type: TypeData;
};

const remove: Action<transactions, payloadTransactions> = (
  state,
  { payload }
) => {
  const { incomes, invoices } = getTransactions(
    state,
    payload.year,
    payload.month
  );

  if (payload.type === "income") {
    return {
      ...state,
      [payload.year]: {
        ...state[payload.year],
        [payload.month]: {
          incomes: incomes.filter((item) => item.id != payload.id),
          invoices,
        },
      },
    };
  }

  if (payload.type === "invoice") {
    return {
      ...state,
      [payload.year]: {
        ...state[payload.year],
        [payload.month]: {
          incomes,
          invoices: invoices.filter((item) => item.id != payload.id),
        },
      },
    };
  }

  return state;
};

const edit: Action<transactions, payloadTransactions> = (
  state,
  { payload }
) => {
  const { year, month, type, ...rest } = payload;
  const { incomes, invoices } = getTransactions(state, year, month);

  if (type === "income") {
    return {
      ...state,
      [year]: {
        ...state[year],
        [month]: {
          incomes: incomes
            .map((item) => (rest.id === item.id ? { ...item, ...rest } : item))
            .sort((item) => (item.checked ? 1 : -1)),
          invoices,
        },
      },
    };
  }

  if (type === "invoice") {
    return {
      ...state,
      [year]: {
        ...state[year],
        [month]: {
          incomes,
          invoices: invoices
            .map((item) => (rest.id === item.id ? { ...item, ...rest } : item))
            .sort((item) => (item.checked ? 1 : -1)),
        },
      },
    };
  }

  return state;
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {} as transactions,
  reducers: {
    addTransaction: add,
    removeTransactions: remove,
    editTransactions: edit,
  },
});

export const { addTransaction, removeTransactions, editTransactions } =
  transactionsSlice.actions;
export default transactionsSlice.reducer;
