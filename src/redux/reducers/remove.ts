import { Action, ListData } from "../../interfaces";

const remove: Action<ListData[], ListData> = (state, { payload }) => {
  return state.filter((item) => item.id !== payload.id);
};

export default remove;
