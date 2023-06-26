import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";
import { addIncome, editIncome, removeIncome } from "../../redux/incomeSlice";
import {
  addInvoice,
  editInvoice,
  removeInvoice,
} from "../../redux/invoiceSlice";
import { useCallback } from "react";
import { Inputs } from "../../components/Forms/FormCreate";
import { ListData, TypeData } from "../../interfaces";
import moment from "moment";

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
    if (typeData === "income") dispatch(addIncome(parseData(data)));
    if (typeData === "invoice") dispatch(addInvoice(parseData(data)));
  }, []);

  const edit = useCallback((typeData: TypeData, data: Inputs) => {
    if (typeData === "income") dispatch(editIncome(parseData(data)));
    if (typeData === "invoice") dispatch(editInvoice(parseData(data)));
  }, []);

  const remove = useCallback((type: TypeData, data: ListData) => {
    if (type === "income") return dispatch(removeIncome(data));
    if (type === "invoice") return dispatch(removeInvoice(data));
  }, []);

  return {
    add,
    edit,
    remove,
  };
};

export default useTransactions;
