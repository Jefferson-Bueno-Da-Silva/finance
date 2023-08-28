import { useCallback, useMemo, useState } from "react";
import { ListData, TypeData } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Income, Invoice } from "../../interfaces/listData";
import moment from "moment";

const useListItems = () => {
  const { transactions, monthlyRepeat } = useSelector(
    (state: RootState) => state
  );
  const [currentMonth, setCurrentMonth] = useState(moment().month());
  const [currentYear, setCurrentYear] = useState(moment().year());

  const nextMonth = useCallback(() => {
    setCurrentMonth((old) => {
      if (old + 1 > 11) {
        setCurrentYear((old) => old + 1);
        return 0;
      }
      return old + 1;
    });
  }, []);

  const previousMonth = useCallback(() => {
    setCurrentMonth((old) => {
      if (old - 1 < 0) {
        setCurrentYear((old) => old - 1);
        return 11;
      }
      return old - 1;
    });
  }, []);

  const getTotal = useCallback((data: Income[] | Invoice[]) => {
    return data.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
  }, []);

  const incomeData = useMemo(() => {
    const transactionsIncomes =
      transactions?.[currentYear.toString()]?.[currentMonth.toString()]
        ?.incomes || [];
    const monthlyRepeatIncomes =
      monthlyRepeat?.incomes?.filter(
        (income) => moment(income.date).month() <= currentMonth
      ) || [];

    const incomes = [...monthlyRepeatIncomes, ...transactionsIncomes];

    return {
      title: "Entrada",
      total: getTotal(incomes),
      type: "income" as TypeData,
      currentYear,
      currentMonth,
      data: incomes,
    };
  }, [transactions, monthlyRepeat, currentYear, currentMonth]);

  const invoiceData = useMemo(() => {
    const transactionsInvoices =
      transactions?.[currentYear.toString()]?.[currentMonth.toString()]
        ?.invoices || [];
    const monthlyRepeatInvoices =
      monthlyRepeat?.invoices?.filter(
        (invoice) => moment(invoice.date).month() <= currentMonth
      ) || [];

    const invoices = [...monthlyRepeatInvoices, ...transactionsInvoices];

    return {
      title: "Saídas",
      total: getTotal(invoices),
      type: "invoice" as TypeData,
      currentYear,
      currentMonth,
      data: invoices,
    };
  }, [transactions, monthlyRepeat, currentYear, currentMonth]);

  return {
    incomeData,
    invoiceData,
    currentMonth,
    currentYear,
    nextMonth,
    previousMonth,
  };
};

export default useListItems;
