import { Inter } from "next/font/google";
import { ExpenseItemType } from "@/Models/ExpenseItemModel";
import NewExpense from "@/components/NewExpense/NewExpense";
import Expenses from "@/components/Expenses/Expenses";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const DUMMY_EXPENSES: ExpenseItemType[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


export default function Home() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  

  const addExpenseHandler = (expense: ExpenseItemType): void => {
    setExpenses((prevExpenses:ExpenseItemType[]) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <>
      <main>
        <div>
          <NewExpense onAddExpense={addExpenseHandler}/>  
        </div>
        <Expenses expensesItemArray={expenses}/>
      </main>
    </>
  );
}
