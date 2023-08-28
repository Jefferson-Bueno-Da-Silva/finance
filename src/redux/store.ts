import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import reactotron from "../../ReactotronConfig";

import transactionsSlice from "./transactionsSlice";
import monthlyRepeatSlice from "./monthlyRepeatSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  transactions: transactionsSlice,
  monthlyRepeat: monthlyRepeatSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  enhancers: [reactotron.createEnhancer!()],
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
