import { ExpenseDateProps } from "@/Models/ExpenseDateModel";
import React, { FC } from "react";

const ExpenseDate: FC<ExpenseDateProps> = ({ expenseDate }) => {
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.getFullYear();

  return (
    <>
      <div className="flex flex-col items-center bg-gray-800 px-3 py-1 text-white border-solid border-white border-2 rounded-xl shadow shadow-white w-28">
        <div className="font-medium text-sm">{month}</div>
        <div className="text-sm">{year}</div>
        <div className="font-semibold text-xl">{day}</div>
      </div>
    </>
  );
};

export default ExpenseDate;
