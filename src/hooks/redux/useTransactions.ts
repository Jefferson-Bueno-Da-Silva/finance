import uuid from "react-native-uuid";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { Inputs } from "../../components/Forms/FormCreate";
import { ListData, TypeData } from "../../interfaces";
import {
  addTransaction,
  editTransactions,
  removeTransactions,
} from "../../redux/transactionsSlice";
import { addMonthlyRepeat } from "../../redux/monthlyRepeatSlice";

const useTransactions = () => {
  const dispatch = useDispatch();

  const parseData = useCallback((data: Inputs): ListData => {
    return {
      id: data?.id ? data.id : uuid.v4(),
      label: data.name,
      amount: parseFloat(
        data.value
          .replace(".", "")
          .replace(",", ".")
          .replace(/[^0-9.]/g, "")
      ),
      checked: false,
      date: moment(data.date, "DD/MM/YYYY").toISOString(),
      monthlyRepeat: data.monthlyRepeat,
    };
  }, []);

  const add = useCallback((typeData: TypeData, data: Inputs) => {
    if (typeData === "income") {
      if (data.monthlyRepeat) {
        dispatch(addMonthlyRepeat({ income: parseData(data) }));
      } else {
        dispatch(addTransaction({ income: parseData(data) }));
      }
    }

    if (typeData === "invoice") {
      if (data.monthlyRepeat) {
        dispatch(addMonthlyRepeat({ invoice: parseData(data) }));
      } else {
        dispatch(addTransaction({ invoice: parseData(data) }));
      }
    }
  }, []);

  const edit = useCallback(
    (
      type: TypeData,
      data: Inputs,
      currentYear: number,
      currentMonth: number
    ) => {
      dispatch(
        editTransactions({
          type,
          year: currentYear.toString(),
          month: currentMonth.toString(),
          ...parseData(data),
        })
      );
    },
    []
  );

  const remove = useCallback(
    (
      type: TypeData,
      data: ListData,
      currentYear: number,
      currentMonth: number
    ) => {
      dispatch(
        removeTransactions({
          type,
          year: currentYear.toString(),
          month: currentMonth.toString(),
          ...data,
        })
      );
    },
    []
  );

  return {
    add,
    edit,
    remove,
  };
};

export default useTransactions;
