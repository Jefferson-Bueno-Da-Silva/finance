import { Action, ListData } from "../../interfaces";

const edit: Action<ListData[], ListData> = (state, { payload }) => {
  return state.map((item) =>
    payload.id === item.id ? { ...item, ...payload } : item
  );
};

export default edit;
