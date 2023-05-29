import { Action, ListData } from "../../interfaces";

const add: Action<ListData[], ListData> = (state, { payload }) => {
  return [...state, payload];
};

export default add;
