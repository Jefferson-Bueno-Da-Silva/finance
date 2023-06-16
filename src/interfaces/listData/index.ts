export default interface ListData {
  id: string | number[];
  label: string;
  amount: number;
  checked: boolean;
}

export type TypeData = "invoice" | "income";
