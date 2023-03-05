export type ExpenseItemType = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

export interface ExpenseItemProps{
  expenseItem: ExpenseItemType
};