import { useCallback, useMemo } from "react";
import { ListData, TypeData } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useListItems = () => {
  const { income, invoice } = useSelector((state: RootState) => state);

  const getTotal = useCallback((data: ListData[]) => {
    return data.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
  }, []);

  const incomeData = useMemo(
    () => ({
      title: "Entrada",
      total: getTotal(income),
      type: "income" as TypeData,
      data: income,
    }),
    [income]
  );

  const invoiceData = useMemo(
    () => ({
      title: "Saídas",
      total: getTotal(invoice),
      type: "invoice" as TypeData,
      data: invoice,
    }),
    [invoice]
  );

  return { incomeData, invoiceData };
};

export default useListItems;
