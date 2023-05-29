import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export default interface Action<T, M = never>
  extends CaseReducer<
    T,
    [M] extends [never] ? PayloadAction<T> : PayloadAction<M>
  > {}
