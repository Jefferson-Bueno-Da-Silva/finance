export default interface ListData {
  id: string | number[];
  label: string;
  amount: number;
  checked: boolean;
  date: string;
  monthlyRepeat: boolean;
}

export type TypeData = "invoice" | "income";
