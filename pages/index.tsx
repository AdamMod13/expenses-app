import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import ExpenseItem from "@/components/ExpenseItem";
import { ExpenseItemType } from "@/Models/ExpenseItemModel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const expenses: ExpenseItemType[] = [
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

  return (
    <>
      <main>
        <div>
          {expenses.map((item: ExpenseItemType) => (
            <ExpenseItem expenseItem={item} />
          ))}
        </div>
      </main>
    </>
  );
}
