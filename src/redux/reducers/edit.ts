import { Action, ListData } from "../../interfaces";

const edit: Action<ListData[], ListData> = (state, { payload }) => {
  return state
    .map((item) => (payload.id === item.id ? { ...item, ...payload } : item))
    .sort((item) => (item.checked ? 1 : -1));
};

export default edit;
