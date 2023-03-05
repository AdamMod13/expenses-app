import { ExpenseDateProps } from "@/Models/ExpenseDateModel";
import React, { FC } from "react";

const ExpenseDate: FC<ExpenseDateProps> = ({ expenseDate }) => {
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.getFullYear();

  return (
    <>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
    </>
  );
};

export default ExpenseDate;
