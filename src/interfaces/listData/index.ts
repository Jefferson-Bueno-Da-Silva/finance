export interface Income {
  id: string | number[];
  label: string;
  amount: number;
  checked: boolean;
  date: string;
  monthlyRepeat: boolean;
}

export interface Invoice {
  id: string | number[];
  label: string;
  amount: number;
  checked: boolean;
  date: string;
  monthlyRepeat: boolean;
}

type ListData = Income | Invoice;

export default ListData;
export type TypeData = "invoice" | "income";
